export const E2E_PORT = 3100
export const E2E_BASE_URL = `http://localhost:${E2E_PORT}`

const DESKTOP_VIEWPORT_WIDTH = 1440
const DESKTOP_VIEWPORT_HEIGHT = 900
export const DESKTOP_VIEWPORT = {
  width: DESKTOP_VIEWPORT_WIDTH,
  height: DESKTOP_VIEWPORT_HEIGHT
}

export const TEST_TIMEOUT_MS = 60_000
export const EXPECT_TIMEOUT_MS = 15_000
export const WEB_SERVER_TIMEOUT_MS = 120_000
export const CI_RETRIES = 1
export const LOCAL_RETRIES = 0

export const APP_READY_TIMEOUT_MS = 20_000
export const POLL_TIMEOUT_MS = 10_000
export const RETRY_TIMEOUT_MS = 15_000
export const QUICK_TIMEOUT_MS = 2_000
export const HYDRATION_WAIT_MS = 2_500
export const BANNER_SETTLE_MS = 1_000

export const COMPACT_NAVBAR_SCROLL_Y = 400
export const COMPACT_NAVBAR_MIN_SCROLL_Y = 50
export const SCROLL_BUTTON_SCROLL_Y = 300

export const SINGLE_ELEMENT = 1
export const NO_ELEMENTS = 0
export const LOCALE_COOKIE = 'Next-Locale'
export const NO_REDIRECTS = 0
export const MIN_IMAGE_BYTES = 100

export const HEADLINE_SAMPLING_MS = 4000
export const MIN_INTRO_FRAMES = 5
export const MIN_INTRO_OFFSET_PX = 1
export const MIN_PARTIAL_ROTATION = 0.5
export const MAX_PARTIAL_ROTATION = 5.5
export const SETTLED_OFFSET_PX = 0
export const MIN_SCROLLED_OFFSET_PX = 10
export const MIN_SCROLLED_ROTATION = 0.5
export const DEGREES_IN_HALF_TURN = 180

export const CURSOR_START_X = 400
export const CURSOR_START_Y = 300
export const MIN_CURSOR_WIDTH_PX = 40
export const CURSOR_SELECTOR = 'body > div.w-14.h-14'
export const CURSOR_REST_COLOR = 'rgb(248, 248, 248)'
export const CURSOR_HOVER_BACKGROUND = CURSOR_REST_COLOR
export const PAGE_MARGIN_X = 4
export const MIN_CAROUSEL_ARROW_WIDTH_PX = 100
export const CAROUSEL_HOVER_RATIO = 0.75
export const CAROUSEL_RIGHT_SIDE_RATIO = 0.8
export const MOUSE_MOVE_STEPS = 5

export const MISSING_SLIDE_INDEX = -1
export const FIRST_SLIDE_INDEX = 0
export const SECOND_SLIDE_INDEX = 1

export const COMPARED_OTHER_PROJECTS = 2
export const SETTLED_TOLERANCE_PX = 1
export const OTHER_PROJECTS_SETTLE_TIMEOUT_MS = 8000
export const FIRST_OTHER_PROJECT = 0
export const SECOND_OTHER_PROJECT = 1

export const MISSING_ELEMENT_OPACITY = 0
export const MISSING_ELEMENT_WIDTH = 0
export const VISIBLE_ELEMENT_OPACITY = 1

export const IGNORED_ERROR_URLS = ['/_vercel/insights/']
