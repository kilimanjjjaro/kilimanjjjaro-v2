import {
  MD_BREAKPOINT,
  Viewport,
  XL_BREAKPOINT
} from '@/lib/constants/breakpoints'

export default function getViewport() {
  const { innerWidth } = window

  if (innerWidth < MD_BREAKPOINT) return Viewport.Mobile
  if (innerWidth < XL_BREAKPOINT) return Viewport.Tablet

  return Viewport.Desktop
}
