import { useGSAP } from "@gsap/react"
import Project from "../components/home/projects/Project.section"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"



const Work = () => {

  const Images = [{
    image1: "../../../Photo1.png",
    image2: "../../../Photo2.jpg"
  }, {
    image1: "../../../WorkPhoto1.jpg",
    image2: "../../../WorkPhoto2.jpg",
  }, {
    image1: "../../../WorkPhoto3.jpg",
    image2: "../../../WorkPhoto4.jpg",
  }, {
    image1: "../../../WorkPhoto5.jpg",
    image2: "../../../WorkPhoto6.jpg",
  }, {
    image1: "../../../WorkPhoto7.jpg",
    image2: "../../../WorkPhoto8.jpg",
  }, {
    image1: "../../../WorkPhoto9.jpg",
    image2: "../../../WorkPhoto10.jpg",
  }, {
    image1: "../../../WorkPhoto11.jpg",
    image2: "../../../WorkPhoto12.jpg",
  }, {
    image1: "../../../WorkPhoto13.jpg",
    image2: "../../../WorkPhoto14.jpg",
  }, 
  {
    image1: "../../../WorkPhoto15.jpg",
    image2: "", 
  },
  ]

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
      gsap.from('.scroll',{
        height:'100px',
        stagger: {
          amount: 0.4
        },
        scrollTrigger:{
          trigger:'.project-Animation',
          start: 'top 100%',
          end: 'top -150%',
          scrub: 1
        }
        
      })
  })
  return (
    <div className="lg:p-4">
      <div className="lg:pt-[20vw] pt-[43vh]">
        <h2 className='uppercase font-[font-2] lg:px-0 px-2 text-black lg:text-[12vw] text-[22vw]'>Work</h2>
      </div>
      <div className="project-Animation lg:-mt-27 -mt-10">
       {Images.map((elem , index) => {
        return <div className="scroll w-full lg:h-[850px] h-[700px] flex lg:flex-row flex-col gap-3 py-2">
          <Project key={index} project={elem} />
        </div>
       })}
      </div>
    </div>
  )
}

export default Work
