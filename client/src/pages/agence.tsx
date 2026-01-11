import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger);

const Agency = () => {

  const imgDivRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const comp3Ref = useRef<HTMLDivElement | null>(null)



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
     gsap.from(comp3Ref.current , {
      scrollTrigger:comp3Ref.current,
      scrub:1,
      stagger:{
        amount:0.3
      },
      onUpdate: () => {
        if(comp3Ref.current) {
          comp3Ref.current.style.backgroundColor = "black"
        }
      }
     });
    const mm = gsap.matchMedia();
    // Desktop breakpoint
    mm.add("(min-width: 1024px)", () => {
      if (!imgDivRef.current) return;
      const st = ScrollTrigger.create({
        trigger: imgDivRef.current,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        anticipatePin: 1,
        invalidateOnRefresh: true,
        start: "top 10%",
        end: "top -100%",
        onUpdate: (self) => {
          if (!imageRef.current) return;
          const progress = Math.min(Math.max(self.progress, 0), 1);
          const imageIndex = progress < 1 ? Math.floor(progress * imgArr.length) : imgArr.length - 1;
          imageRef.current.src = imgArr[imageIndex];
        }
      });

      return () => st.kill();
    });

    // Mobile & tablet breakpoint
    mm.add("(max-width: 1023px)", () => {
      if (!imgDivRef.current) return;
      const st = ScrollTrigger.create({
        trigger: imgDivRef.current,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        anticipatePin: 1,
        invalidateOnRefresh: true,
        start: 'top 26%',
        end: 'top -70%',
        onUpdate: (self) => {
          if (!imageRef.current) return;
          const progress = Math.min(Math.max(self.progress, 0), 1);
          const imageIndex = progress < 1 ? Math.floor(progress * imgArr.length) : imgArr.length - 1;
          imageRef.current.src = imgArr[imageIndex];
        }
      });

      return () => st.kill();
    });
    return () => mm.revert();
    });




  return (
    <div className="text-black overflow-hidden">
      <div className="component1 py-1">
        <div ref={imgDivRef} className="lg:h-105 h-27 lg:w-75 overflow-hidden rounded-2xl absolute lg:top-86 -top-120 left-[30vw]">
          <img ref={imageRef} className="h-full w-full object-cover" src={imgArr[0]} alt="Agency preview" />
        </div>
        <div className='relative font-[font-2]'>
          <div className='lg:mt-[57vh] mt-[27vh]'>
            <h1 className='lg:text-[20vw] text-[17vw] relative leading-[17vw] uppercase text-center '>seven7y
              two
            </h1>
          </div>
        </div>
        <div className='font-[font-2] lg:pl-[40%] overflow-hidden -mt-30 lg:p-0 px-2  h-screen'>
          <p className='lg:text-7xl text-xl lg:pt-30 pt-[35vh] lg:leading-none leading-[5vw] lg:w-[60vw] relative'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
        </div>
      </div>
      <div className="component2 h-screen grid grid-cols-6 gap-4 mx-50 mt-5  w-screen font-[font-2] text-[1.3vw]  ">
        <div className="h-30 w-full col-span-3">
            <h1>Expertise</h1>
        </div> 
        <div className="w-0 col-span-3 -mx-[16.3vw]">
          <h1 className="leading-tight">Strategy Advertising Branding Design Content</h1>
        </div>
          <div className="col-span-2">
            <p className="w-xl">Our Work_ Born in curiosity, raised by dedication and fed with a steady diet of creativity.</p>
          </div>
          <div className="w-xl col-span-2">
            <p>Our Creative_ Simmering in an environment where talent can come to a full boil. Encouraged to become the best versions of ourselves</p>
          </div>
          <div className="w-sm col-span-2">
            <p>Our Culture_ We’re open to each other. Period. The team works together to create a space that makes us proud.</p>
          </div>
      </div>
      <div ref={comp3Ref} className="component3 h-screen flex  justify-center items-center   ">
          <div className="w-2xl h-[50vw]  rounded-2xl" >
            <img className="h-full w-full object-cover rounded-2xl  " src="../../../img2.jpg" alt="" />
          </div>
      </div>
    </div>
  )
}

export default Agency
