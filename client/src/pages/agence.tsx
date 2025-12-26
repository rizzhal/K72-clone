import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react"

const Agency = () => {

  gsap.registerPlugin(ScrollTrigger);

  const imgDivRef = useRef(null);
  const imageRef = useRef<HTMLImageElement | null>(null)



  const imgArr = [
    '../../../public/img1.jpg',
    '../../../public/img2.jpg',
    '../../../public/img3.jpg',
    '../../../public/img4.jpg',
    '../../../public/img5.jpg',
    '../../../public/img6.jpg',
    '../../../public/img7.jpg',
    '../../../public/img8.jpg',
    '../../../public/img9.jpg',
    '../../../public/img10.jpg',
    '../../../public/img11.jpg',    
  ]

  useGSAP(() => {
    gsap.to(imgDivRef.current, {
      scrollTrigger: {
        trigger: imgDivRef.current,
        scrub: true,
        pin: true,
        start: 'top 25%',
        end: 'top -120%',
        onUpdate: (element) => {
          let imageIndex;
          if (element.progress < 1) {
            imageIndex = Math.floor(element.progress * imgArr.length)
          } else {
            imageIndex = imgArr.length - 1
          }

          if(imageRef.current === null){
            throw new Error("ImageRef is not initialized")
          }
          imageRef.current.src = imgArr[imageIndex]

        }
      }
    })
  })
  return (
    <div>
      <div className="component1">
        <div ref={imgDivRef} className="h-75 w-57 overflow-hidden rounded-2xl absolute top-[12vw] left-[29.9vw]">
          <img ref={imageRef} className="h-full w-full object-cover " src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
        </div>
        <div className='font-[font-2]'>
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
