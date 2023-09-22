import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'


export default function Section(props) {

  return (
    <>
    <div className="m-96">
      
      <GrayscaleTransitionImage
        src={"https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.5a19c176.jpg&w=2048&q=90"}
        width={100}
        height={100}
        className="w-full"
        sizes="(min-width: 1216px) 30rem, 100vw"
        priority
      />

    </div>

    </>
    
  )
}