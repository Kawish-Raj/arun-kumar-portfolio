import './App.css'
import HeroArea from './components/HeroArea'
import AboutMe from './components/AboutMe'
import Qualifications from './components/Qualifications'
import Work from './components/Work'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import { useState } from 'react'

function App() {

  const [isMainContent, setIsMainContent] = useState(null);
  const [sideBarMode, setSideBarMode] = useState('light-mode');
  const [sideBarQuali, setSideBarQuali] = useState(null);

  return (
    <div className = "app-container">
      <SideBar  isMainContent = {isMainContent} sideBarMode={sideBarMode} sideBarQuali={sideBarQuali}/>
      <HeroArea />
      <AboutMe setIsMainContent = {setIsMainContent} setSideBarMode={setSideBarMode} />
      <Qualifications setIsMainContent={setIsMainContent} setSideBarQuali={setSideBarQuali}/>
      <Work setIsMainContent = {setIsMainContent}/>
      <Footer />
    </div>
  )
}

export default App
