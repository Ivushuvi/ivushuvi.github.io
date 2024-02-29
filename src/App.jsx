import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutMe from './AboutMe'
import Header from './Header'
import Services from './Services'
import MyWork from './MyWork'
import Contact from './Contact'

function App() {
  return (
    <>
      <div>
        <Header/>
        <AboutMe/>
        <Services/>
        <MyWork/>
        <Contact/>
      </div>
    </>
  )
}

export default App
