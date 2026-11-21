import { beforeEach, describe, expect, it } from 'vitest'
import { useStore } from '@/lib/store/store'
import updateStacks from '@/lib/utils/updateStacks'

const initialState = useStore.getState()

describe('store', () => {
  beforeEach(() => {
    useStore.setState(initialState, true)
  })

  it('starts with the expected defaults', () => {
    const state = useStore.getState()
    expect(state.cursorStatus).toBe('default')
    expect(state.showContactForm).toBe(false)
    expect(state.navbarStatus).toBe(false)
    expect(state.navbarVersion).toBe(0)
    expect(state.introRunning).toBe(false)
    expect(state.swiperInstance).toBeNull()
    expect(state.shouldMoveToStart).toBe(false)
    expect(state.stacks).toEqual(updateStacks())
    expect(state.selectedStack).toEqual(updateStacks()[0])
  })

  it('combines the setters of every slice', () => {
    const state = useStore.getState()
    state.setCursorStatus('hover')
    state.setShowContactForm(true)
    state.setNavbarStatus(true)
    state.setNavbarVersion(2)
    state.setIntroRunning(true)
    state.setShouldMoveToStart(true)
    state.setSelectedStack(state.stacks[1])

    const next = useStore.getState()
    expect(next.cursorStatus).toBe('hover')
    expect(next.showContactForm).toBe(true)
    expect(next.navbarStatus).toBe(true)
    expect(next.navbarVersion).toBe(2)
    expect(next.introRunning).toBe(true)
    expect(next.shouldMoveToStart).toBe(true)
    expect(next.selectedStack).toEqual(state.stacks[1])
  })

  it('notifies subscribers on change', () => {
    const seen: boolean[] = []
    const unsubscribe = useStore.subscribe((state) =>
      seen.push(state.navbarStatus)
    )
    useStore.getState().setNavbarStatus(true)
    useStore.getState().setNavbarStatus(false)
    unsubscribe()
    expect(seen).toEqual([true, false])
  })
})
