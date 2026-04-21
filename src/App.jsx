import React from 'react'
import Hero from './Hero'
import Header from './Header'
import AboutUs from './About'
// import Services from './Services'
import Portfolio from './Portfolio'
import ContactUs from './Contact'
import Footer from './Footer'

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      {/* <Services /> */}
      <Portfolio />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App