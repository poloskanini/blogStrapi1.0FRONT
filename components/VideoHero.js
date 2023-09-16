export default function VideoHero() {
  return (
    <div className="h-full w-full absolute z-0 object-cover brightness-60">
      <video className="h-[120vh] w-full object-cover wide:landscape:h-auto" autoPlay playsInline loop muted poster={'/assets/images/videoposter.png'} src="https://res.cloudinary.com/dbff7xgqx/video/upload/v1694589070/hero-video-menezes-avocat-1neso80p_LvEPr9F3_ztjtsk.mp4"></video>
    </div>
  )
}