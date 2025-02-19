import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </StrictMode>,
)
