
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agency from './pages/agence'
import Navbar from './components/home/NavbarComponent/navbar'
import ScreenNav from './components/home/NavbarComponent/ScreenNav'


const App = () => {
  return (
    <div>
      <Navbar/>
      <ScreenNav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/agency' element={<Agency/>}/>
      </Routes>
    </div>
  )
}

export default App

