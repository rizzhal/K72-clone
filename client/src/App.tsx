
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agency from './pages/agence'
import Navbar from './components/home/NavbarComponent/navbar'
import ScreenNav from './components/home/NavbarComponent/ScreenNav'
import Work from './pages/Work'


const App = () => {
  return (
    <div>
      <Navbar/>
      <ScreenNav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Work/>}/>
        <Route path='/agency' element={<Agency/>}/>
      </Routes>
    </div>
  )
}

export default App

