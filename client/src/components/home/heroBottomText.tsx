
import { Link } from 'react-router-dom'

const HeroBottomText = () => {
  return (
    <div className='font-[font-2] uppercase flex justify-center items-center gap-5 mb-5' >
     <Link to={"/projects"} className='text-[7vw] leading-[5vw] border-3 px-8 pt-5 rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50]'>Work</Link>
     <Link to={"/agency"} className='text-[7vw] leading-[5vw] border-3 px-8 pt-5 rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50]'>Agency</Link>
    </div>
  )
}

export default HeroBottomText
