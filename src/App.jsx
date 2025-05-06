import './App.css'
import HeroArea from './components/HeroArea'
import AboutMe from './components/AboutMe'
import Qualifications from './components/Qualifications'
import Work from './components/Work'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import { useState } from 'react'

function App() {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className = "app-container">
      <SideBar isVisible = {isVisible}/>
      <HeroArea />
      <AboutMe />
      <Qualifications setIsVisible={setIsVisible}/>
      <Work />
      <Footer />
    </div>
  )
}

export default App
