import React from 'react'
import Hero from './Hero'
import Featured from './Featured'
import WhyUs from './WhyUs'
import Statistics from './Statistics'
import Testimonials from './Testimonials'
import CallToAction from './CallToAction'

function LandingPage() {
  return (
    <div>
        <Hero />
        <Featured />
        <WhyUs />
        <Statistics />
        <Testimonials />
        <CallToAction />
    </div>
  )
}

export default LandingPage