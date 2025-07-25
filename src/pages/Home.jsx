import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground';
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        {/* theme togge */}
          <ThemeToggle />
        {/* background effect */}
        <StarBackground />
        {/* navbar */}
        <Navbar/>
        {/* main content */}
        <main>
        <HeroSection/>
        </main>
        <AboutMe/>
        <Projects/>
        {/* footer */}
    </div>
  )
}

export default Home