import React from 'react'
import Hero from './layouts/HeroSection/Hero'
import FooterHero from "./components/FooterHero/FooterHero";
import MainSection from "./layouts/MainSection/MainSection";
import FooterSection from "./layouts/FooterSection/FooterSection";
import FooterRights from "./components/FooterRights/FooterRights";

const App = () => {
  return (
    <div  className='container'>
      <Hero />
      <FooterHero />
      <MainSection />
      <FooterSection />
      <FooterRights />
    </div>
  )
}

export default App