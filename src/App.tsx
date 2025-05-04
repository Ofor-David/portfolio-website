import { lazy, Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import './App.css'

const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <main className="pt-16">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Certifications />
            <Contact />
          </main>
        </Suspense>
      </div>
    </ThemeProvider>
  )
}

export default App
