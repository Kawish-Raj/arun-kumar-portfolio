import './App.css'
import HeroArea from './components/HeroArea'
import AboutMe from './components/AboutMe'
import Qualifications from './components/Qualifications'
import Work from './components/Work'
import Footer from './components/Footer'

function App() {

  return (
    <div className = "app-container">
      <HeroArea />
      <AboutMe />
      <Qualifications />
      <Work />
      <Footer />
    </div>
  )
}

export default App
