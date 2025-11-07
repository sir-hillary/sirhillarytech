import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import About from '../Components/About/About'
import Services from '../Components/Services/Services'
import Contact from '../Components/Contact/Contact'
import Portfolio from '../Components/Portfolio/Portfolio'
import Footer from '../Components/Footer/Footer'
import BackToTop from '../Components/BackToTop'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <BackToTop />
    </div>
  )
}

export default Home
