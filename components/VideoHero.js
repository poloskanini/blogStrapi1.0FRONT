export default function VideoHero() {
  return (
    <div className="h-full w-full absolute z-0 object-cover brightness-50 sm:brightness-75">
      <video className="h-full lg:h-max w-full object-cover wide:landscape:h-auto" autoPlay playsInline loop muted src="https://res.cloudinary.com/dbff7xgqx/video/upload/v1694447034/hero-video-menezes-avocat_1NESO80p_y1oarq.mp4"></video>
    </div>
  )
}