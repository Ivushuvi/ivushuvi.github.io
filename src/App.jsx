import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutMe from './AboutMe'
import Header from './Header'
import Services from './Services'

function App() {
  return (
    <>
      <div>
        <Header/>
        <AboutMe/>
        <Services/>
      </div>
    </>
  )
}

export default App
