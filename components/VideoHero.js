export default function VideoHero() {
  return (
    <div className="h-full w-full absolute z-0 object-cover brightness-70">
      <video className="h-[110vh] w-full object-cover wide:landscape:h-auto" autoPlay playsInline loop muted poster={'/assets/images/videoposter.png'} src="https://res.cloudinary.com/dbff7xgqx/video/upload/v1695364895/hero-video-menezes-avocat2-askvdsnv_1FBlm4ti_-_2_felifl.mp4"></video>
    </div>
  )
}