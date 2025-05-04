import { Suspense, lazy } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Lazy load sections for better performance
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects.tsx'));
const Skills = lazy(() => import('./components/Skills.tsx'));
const Contact = lazy(() => import('./components/Contact.tsx'));

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </Suspense>
      </main>
    </div>
  )
}

export default App
