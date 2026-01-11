
import { Link } from 'react-router-dom'

const HeroBottomText = () => {
  return (
    <div className='font-[font-2] flex justify-center items-center gap-5 mb-5' >
      <p className='absolute lg:w-[20vw] leading-snug w-[70vw] lg:right-3 right-1 lg:bottom-50 bottom-24 font-[font-1] lg:text-xl text-xs'>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.
      </p>
     <Link to={"/projects"} className='lg:text-[7vw] uppercase text-[10vw] lg:leading-[5vw] leading-[8vw] border-3 lg:px-8 px-4 lg:pt-5 pt-1.5 rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50]'>Work</Link>
     <Link to={"/agency"} className='lg:text-[7vw] uppercase text-[10vw] lg:leading-[5vw]  leading-[8vw] border-3 lg:px-8 px-4 lg:pt-5 pt-1.5 rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50]'>Agency</Link>
    </div>
  )
}

export default HeroBottomText
