import { beforeEach, describe, expect, it } from 'vitest'
import { useStore } from '@/lib/store/store'
import updateStacks from '@/lib/utils/updateStacks'
import { NavbarVersion } from '@/lib/constants/navbar'

const initialState = useStore.getState()

describe('store', () => {
  beforeEach(() => {
    useStore.setState(initialState, true)
  })

  it('starts with the expected defaults', () => {
    const state = useStore.getState()
    const [firstStack] = updateStacks()
    expect(state.cursorStatus).toBe('default')
    expect(state.showContactForm).toBe(false)
    expect(state.navbarStatus).toBe(false)
    expect(state.navbarVersion).toBe(NavbarVersion.None)
    expect(state.introRunning).toBe(false)
    expect(state.swiperInstance).toBeNull()
    expect(state.shouldMoveToStart).toBe(false)
    expect(state.stacks).toEqual(updateStacks())
    expect(state.selectedStack).toEqual(firstStack)
  })

  it('combines the setters of every slice', () => {
    const state = useStore.getState()
    const {
      stacks: [, secondStack]
    } = state
    state.setCursorStatus('hover')
    state.setShowContactForm(true)
    state.setNavbarStatus(true)
    state.setNavbarVersion(NavbarVersion.Small)
    state.setIntroRunning(true)
    state.setShouldMoveToStart(true)
    state.setSelectedStack(secondStack)

    const next = useStore.getState()
    expect(next.cursorStatus).toBe('hover')
    expect(next.showContactForm).toBe(true)
    expect(next.navbarStatus).toBe(true)
    expect(next.navbarVersion).toBe(NavbarVersion.Small)
    expect(next.introRunning).toBe(true)
    expect(next.shouldMoveToStart).toBe(true)
    expect(next.selectedStack).toEqual(secondStack)
  })

  it('notifies subscribers on change', () => {
    const seen: boolean[] = []
    const unsubscribe = useStore.subscribe((state) => {
      seen.push(state.navbarStatus)
    })
    useStore.getState().setNavbarStatus(true)
    useStore.getState().setNavbarStatus(false)
    unsubscribe()
    expect(seen).toEqual([true, false])
  })
})
