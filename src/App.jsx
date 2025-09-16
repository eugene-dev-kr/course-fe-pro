import { useState } from 'react';
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="bg-dark text-light text-center py-3">
        © 2025 Martynenko Eugene. All Rights Reserved.
    </footer>
    </>
  )
}

export default App
