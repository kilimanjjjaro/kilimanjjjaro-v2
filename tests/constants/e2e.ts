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

export const SINGLE_ELEMENT = 1
export const NO_ELEMENTS = 0
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

export const CAROUSEL_RIGHT_SIDE_RATIO = 0.8

export const MISSING_SLIDE_INDEX = -1
export const FIRST_SLIDE_INDEX = 0
export const SECOND_SLIDE_INDEX = 1

export const IGNORED_ERROR_URLS = ['/_vercel/insights/']
