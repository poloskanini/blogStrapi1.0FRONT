export default function VideoHero() {
  return (
    <div className="h-full w-full absolute z-0 object-cover brightness-70">
      <video className="h-[110vh] w-full object-cover wide:landscape:h-auto" autoPlay playsInline loop muted poster={'/assets/images/videoPoster3.webp'} src="/assets/videos/heroVideo-sm.mp4"></video>
    </div>
  )
}

