
import Video from './video'

const HeroText = () => {
  return (
    <div className='font-[font-1] leading-[9vw] uppercase text-center pt-3'>
       <div className='text-[9.5vw]'>
        The spark for
       </div>
       <div className='text-[9.5vw] flex justify-center items-center'>
        all 
        <div className='h-[7vw] w-[16vw] rounded-full mb-5 overflow-hidden'>
            <Video/>
        </div>
        things
       </div>
       <div className='text-[9.5vw]'>
        creative
       </div>
    </div>
  )
}

export default HeroText
