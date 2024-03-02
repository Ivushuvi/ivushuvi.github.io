import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutMe from './AboutMe'
import Header from './Header'
import Services from './Services'
import MyWork from './MyWork'
import Contact from './Contact'
import { ParallaxProvider } from 'react-scroll-parallax'

function App() {
  return (
    <>
      <ParallaxProvider>
        <div>
          <Header/>
          <AboutMe/>
          <Services/>
          <MyWork/>
          <Contact/>
        </div>
      </ParallaxProvider>
    </>
  )
}

export default App
