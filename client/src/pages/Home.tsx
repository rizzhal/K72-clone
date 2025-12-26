import Video from '../components/home/video'
import HeroText from '../components/home/heroText'
import HeroBottomText from '../components/home/heroBottomText'

const Home = () => {
  return (
    <div>
        <div className='h-screen w-screen fixed'>
            <Video/>
        </div>
        <div className=' h-screen w-screen overflow-hidden flex flex-col relative justify-between '>
            <HeroText/>
            <HeroBottomText/>
        </div>
     
    </div>
  )
}

export default Home
