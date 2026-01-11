import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext, useRef } from "react";
import { NavbarContext } from "../../../context/NavContext";


const ScreenNav = () => {

  const context = useContext(NavbarContext);
  const setNavOpen = context?.[1];
  const navOpen = context?.[0];

  const fullScreenRef = useRef<HTMLDivElement | null>(null);
  const navlinksRef = useRef<HTMLDivElement | null>(null);
  const closebtn = useRef<HTMLDivElement | null>(null);

  

   

    function gsapAnimation () {
       if (!navlinksRef.current) return;
      const timeline = gsap.timeline();
      timeline.to('.fullscreenNav',{
        display: 'block'
      })
      
      timeline.to('.stairAnimation', {
            delay:0.1,
            height:'100%',
            stagger: {
                amount: -0.3
            }
        });

        timeline.to('.navlink', {
        opacity: 1
      });

        timeline.to(".link", {
          opacity: 1,
          rotateX: 0,
          stagger: {
            amount: 0.3
          },
        });
    }
    function gsapReverseAnimation(){
      const timeline = gsap.timeline();

      timeline.to('.link' , {
        rotateX : 90,
        stagger: {
          amount: 0.2
        }

      });

      timeline.to('.navlink', {
      opacity:0
      });

      timeline.to('.stairAnimation', {
      height: 0,
      stagger: {
        amount: 0.1
      },  
     
    });
      timeline.to(".fullscreenNav", {
        display: 'none'
      });

     

     
    }
    useGSAP(() => {
      if(navOpen) gsapAnimation();
      else gsapReverseAnimation();
    },[navOpen])

  return (
    <div ref={fullScreenRef} className="fullscreenNav hidden h-screen text-white w-full absolute overflow-hidden z-50 ">
      <div className="h-screen w-full fixed">
        <div className='h-full w-full flex'>
          <div className='stairAnimation h-full w-1/2 bg-black'></div>
          <div className='stairAnimation h-full w-1/2 bg-black'></div>
          <div className='stairAnimation h-full w-1/2 bg-black'></div>
          <div className='stairAnimation h-full w-1/2 bg-black'></div>
          <div className='stairAnimation h-full w-1/2 bg-black'></div>
        </div>
      </div>
      <div ref={navlinksRef} className="relative">
        <div className="navlink flex justify-between items-start p-2 w-full">
          <div className="lg:p-2">
            <div className="lg:w-40 w-28">
              <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                <path fill="white" fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
              </svg>
            </div>
          </div>
          <div ref={closebtn} onClick={() => {
            setNavOpen?.(false)
          }} className="closeAnimation  lg:h-35 h-20 lg:w-35 w-20 relative cursor-pointer">
            <div className="lg:h-48 h-28 w-0.5 bg-white -rotate-45 origin-top absolute "></div>
            <div className="lg:h-48 h-28 w-0.5 bg-white right-0 rotate-45 origin-top absolute "></div>
          </div>
        </div>
        <div className="font-[font-2] relative cursor-pointer overflow-hidden lg:mt-0 mt-[30vw]">
          <div className="link border-y origin-top relative lg:pt-5 pt-1 ">
            <h1 className="lg:text-[8vw] text-[14vw] uppercase lg:leading-[1vw] leading-0 lg:py-18 py-7 text-center">Work</h1>
            <div className=" moveX-hover flex absolute top-0 bottom-0 bg-[#D3FD50] ">
              <div className="moveAnim flex items-center leading-[1vw] pt-5 ">
                <h1 className="text-center uppercase whitespace-nowrap text-[8vw] text-black ">see everything</h1>
                <img className="h-[6vw] w-[14vw] rounded-full pb-3 object-cover shrink-0" src="../../../Photo1.png" alt="" />
                <h1 className="text-center uppercase text-[8vw] whitespace-nowrap text-black">see everything</h1>
                <img className="h-[6vw] w-[14vw] rounded-full pb-3 object-cover shrink-0" src="../../../Photo2.jpg" alt="" />
              </div>
              <div className="moveAnim flex items-center leading-[1vw] pt-5  ">
                <h1 className="text-center uppercase whitespace-nowrap text-[8vw] text-black ">see everything</h1>
                <img className="h-[6vw] w-[14vw] rounded-full pb-3 object-cover shrink-0" src="../../../Photo1.png" alt="" />
                <h1 className="text-center uppercase text-[8vw] whitespace-nowrap text-black">see everything</h1>
                <img className="h-[6vw] w-[14vw] rounded-full pb-3 object-cover shrink-0" src="../../../Photo2.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="link border-t border-t-white origin-top relative lg:pt-5 pt-1">
            <h1 className="lg:text-[8vw] text-[14vw] uppercase lg:leading-[1vw] leading-0 lg:py-18 py-7 text-center">Agency</h1>
            <div className="moveX-hover flex absolute top-0 bottom-0 bg-[#D3FD50] ">
              <div className="moveAnim flex items-center  leading-[1vw] pt-5 ">
                <h1 className="text-center uppercase whitespace-nowrap text-[8vw] text-black ">know us</h1>
                <img className="h-[6vw] w-[14vw] rounded-full pb-3 object-cover shrink-0" src="../../../Photo3.jpg" alt="" />
                <h1 className="text-center uppercase text-[8vw] whitespace-nowrap text-black">know us</h1>
                <img className="h-[6vw] w-[14vw] rounded-full pb-3 object-cover shrink-0" src="../../../Photo4.jpg" alt="" />
              </div>
              <div className="moveAnim flex items-center leading-[1vw] py-8  ">
                <h1 className="text-center uppercase whitespace-nowrap text-[8vw] text-black ">know us</h1>
                <img className="h-[6vw] w-[14vw] rounded-full pb-3 object-cover shrink-0" src="../../../Photo3.jpg" alt="" />
                <h1 className="text-center uppercase text-[8vw] whitespace-nowrap text-black">know us</h1>
                <img className="h-[6vw] w-[14vw] rounded-full pb-3 object-cover shrink-0" src="../../../Photo4.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="link border-t border-t-white origin-top relative lg:pt-5 pt-1">
            <h1 className="lg:text-[8vw] text-[14vw] uppercase lg:leading-[1vw] leading-0 lg:py-18 py-7 text-center">contact</h1>
            <div className=" moveX-hover flex absolute top-0 bottom-0  bg-[#D3FD50] ">
              <div className="moveAnim flex items-center  leading-[1vw] pt-5 ">
                <h1 className="text-center uppercase whitespace-nowrap text-[8vw] text-black ">Send us a fax</h1>
                <img className="h-[6vw] w-[14vw] rounded-full pb-3 object-cover shrink-0" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h1 className="text-center uppercase text-[8vw] whitespace-nowrap text-black">Send us a fax</h1>
                <img className="h-[6vw] w-[14vw] rounded-full pb-3 object-cover shrink-0" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
              </div>
              <div className="moveAnim flex items-center leading-[1vw]  pt-5 ">
                <h1 className="text-center uppercase whitespace-nowrap text-[8vw] text-black ">Send us a fax</h1>
                <img className="h-[6vw] w-[14vw] rounded-full pb-3 object-cover shrink-0" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h1 className="text-center uppercase text-[8vw] whitespace-nowrap text-black">Send us a fax</h1>
                <img className="h-[6vw] w-[14vw] rounded-full pb-3 object-cover shrink-0" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className=" link border-y border-white origin-top relative lg:pt-5 p-2 ">
            <h1 className="lg:text-[8vw] text-[14vw] uppercase leading-[1vw] lg:py-18 py-5  text-center">blog</h1>
            <div className=" moveX-hover flex absolute top-0 bottom-0 bg-[#D3FD50] ">
              <div className="moveAnim flex items-center  leading-[1vw] pt-5 ">
                <h1 className="text-center uppercase whitespace-nowrap text-[8vw] text-black ">read articles</h1>
                <img className="h-[6vw] w-[14vw] rounded-full pb-3 object-cover shrink-0" src="../../../Gif1.gif" alt="" />
                <h1 className="text-center uppercase text-[8vw] whitespace-nowrap text-black">read articles</h1>
                <img className="h-[6vw] w-[14vw] rounded-full pb-3 object-cover shrink-0" src="../../../Photo5.jpg" alt="" />
              </div>
              <div className="moveAnim flex items-center leading-[1vw] pt-5  ">
                <h1 className="text-center uppercase whitespace-nowrap text-[8vw] text-black ">read articles</h1>
                <img className="h-[6vw] w-[14vw] rounded-full pb-3 object-cover shrink-0" src="../../../Gif1.gif" alt="" />
                <h1 className="text-center uppercase text-[8vw] whitespace-nowrap text-black">read articles</h1>
                <img className="h-[6vw] w-[14vw] rounded-full pb-3 object-cover shrink-0" src="../../../Photo5.jpg" alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ScreenNav
