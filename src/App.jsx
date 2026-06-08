import './App.css'
import Navbar from './assets/Navbar/navbar'
import Hero from './assets/Hero/hero'
import Skills from './assets/Skills/skills'
import Stack from './assets/stack/stack'
import Projects from './assets/projects/projects'
import Contact from './assets/contact/contact'
import Footer from './assets/footer/footer'

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
        <Skills />
        <Stack />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
