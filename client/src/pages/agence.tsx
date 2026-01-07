import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger);

const Agency = () => {

  const imgDivRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);



  const imgArr = [
    '/img1.jpg',
    '/img2.jpg',
    '/img3.jpg',
    '/img4.jpg',
    '/img5.jpg',
    '/img6.jpg',
    '/img7.jpg',
    '/img8.jpg',
    '/img9.jpg',
    '/img10.jpg',
    '/img11.jpg',    
  ]

  useGSAP(() => {
    gsap.to(imgDivRef.current, {
      scrollTrigger: {
        trigger: imgDivRef.current,
        scrub: 1,
        pin: true,
        pinSpacing:true,
        pinReparent:true,
        pinType:'transform',
        anticipatePin: 1,
        invalidateOnRefresh : true,
        start: 'top 5%',
        end: 'top -120%',
        onUpdate: (element) => {
          let imageIndex;
          if (element.progress < 1) {
            imageIndex = Math.floor(element.progress * imgArr.length)
          } else {
            imageIndex = imgArr.length - 1
          }

          if (!imageRef.current) return;
          imageRef.current.src = imgArr[imageIndex]

        }
      }
    })
  })
  return (
    <div className="text-black">
      <div className="component1 py-1">
        <div ref={imgDivRef} className="h-90 w-65 overflow-hidden rounded-2xl absolute top-[35vh] left-[30vw]">
          <img ref={imageRef} className="h-full w-full object-cover " src='../../../public/img1.jpg' alt="" />
        </div>
        <div className='relative font-[font-2]'>
          <div className='mt-[57vh]'>
            <h1 className='text-[20vw] relative leading-[17vw] uppercase text-center '>seven7y
              two
            </h1>
          </div>
        </div>
        <div className='font-[font-2] pl-[40%] h-screen'>
          <p className='text-6xl relative'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
        </div>
      </div>
      <div className="component2 h-screen">
        <div>

        </div>
      </div>
    </div>
  )
}

export default Agency
