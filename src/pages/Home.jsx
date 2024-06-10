import React from 'react'
import ServicesSection from '../components/OurServices'
import OurFolio from '../components/OurFolio'
import HeroSection from '../components/HeroSection'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <OurFolio/>
      <ServicesSection/>
    </div>
  )
}

export default Home