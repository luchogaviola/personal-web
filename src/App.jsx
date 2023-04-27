import Navbar from "./components/shared/Navbar";
import { Home } from "./components/shared/Home";
import About from "./components/shared/About";
import Projects from "./components/shared/Projects";
import Contact from "./components/shared/Contact";
import Footer from "./components/shared/Footer";


function App() {
  return (
    <div>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Contact />
    <Footer />
    
    </div>
  )
}
export default App;