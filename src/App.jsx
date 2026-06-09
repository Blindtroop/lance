import './App.css'
import Navbar from './assets/Navbar/navbar'
import Hero from './assets/Hero/hero'
import Skills from './assets/skills/skills'
import Stack from './assets/stack/stack'
import Projects from './assets/projects/projects'
import Contact from './assets/contact/contact'
import Footer from './assets/footer/footer'
import Chat from'./assets/chat/chat'
import ReactGA from "react-ga4";
import { useEffect } from "react";

const TRACKING_ID = "G-40TF77F49R";

// Initialize Google Analytics
ReactGA.initialize(TRACKING_ID);

const TrackPageViews = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return null;
};

function App() {
  // Track button clicks (e.g. home CTA)
  useEffect(() => {
    const trackButtonClick = () => {
      ReactGA.event({
        category: 'User',
        action: 'Clicked Button',
        label: 'home',
      });
    };

    const button = document.getElementById('home');
    if (button) {
      button.addEventListener('click', trackButtonClick);
    }

    return () => {
      if (button) {
        button.removeEventListener('click', trackButtonClick);
      }
    };
  }, []);

  // Track site load
  useEffect(() => {
    ReactGA.event({
      category: 'User',
      action: 'Loaded Site',
      label: 'User Loaded Site',
    });
  }, []);

  return (
    <>
      <TrackPageViews />
      <div className="App">
        <Navbar />
        <Hero />
        <Skills />
        <Stack />
        <Projects />
        <Contact />
        <Footer />
        <Chat />
      </div>
    </>
  );
}

export default App;