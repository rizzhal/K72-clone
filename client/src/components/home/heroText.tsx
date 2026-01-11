
import Video from './video'

const HeroText = () => {
  return (
    <div className='font-[font-1] lg:leading-[9vw] leading-[11vw] lg:mt-0 mt-70 uppercase text-center pt-3'>
      <div className='lg:text-[9.5vw] text-[12vw]'>
        The spark for
      </div>
      <div className='lg:text-[9.5vw] text-[12vw] flex justify-center items-center'>
        all
        <div className='h-[7vw] w-[16vw] rounded-full lg:mb-5 mb-1 overflow-hidden'>
          <Video />
        </div>
        things
      </div>
      <div className='lg:text-[9.5vw] text-[12vw]'>
        creative
      </div>
      <div></div>
    </div>
  )
}

export default HeroText
