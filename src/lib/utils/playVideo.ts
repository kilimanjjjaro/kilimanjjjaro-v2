export default function playVideo(video: HTMLVideoElement | null) {
  video?.play().catch(() => undefined)
}
