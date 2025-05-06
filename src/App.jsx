import './App.css'
import HeroArea from './components/HeroArea'
import AboutMe from './components/AboutMe'
import Qualifications from './components/Qualifications'
import Work from './components/Work'
import Footer from './components/Footer'
import SideBar from './components/SideBar'

function App() {

  return (
    <div className = "app-container">
      <SideBar />
      <HeroArea />
      <AboutMe />
      <Qualifications />
      <Work />
      <Footer />
    </div>
  )
}

export default App
