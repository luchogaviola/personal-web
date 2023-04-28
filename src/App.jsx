import { useRef } from 'react'
import Navbar from "./components/shared/Navbar";
import Home from "./components/shared/Home";
import About from "./components/shared/About";
import Projects from "./components/shared/Projects";
import Contact from "./components/shared/Contact";
import Footer from "./components/shared/Footer";


function App() {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)
  return (
    <div>
    <Navbar homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
    <Home ref={homeRef}/>
    <About ref={aboutRef} />
    <Projects ref={projectsRef} />
    <Contact ref={contactRef} />
    <Footer />
    
    </div>
  )
}
export default App;