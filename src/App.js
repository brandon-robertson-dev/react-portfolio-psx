// React
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import Nav from './Components/Nav'
import Background from './Components/Background'
import AboutMe from './Components/AboutMe'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import Animation from './Components/Animation'
import Skills from './Components/Skills'

// CSS
import './CSS/app.css'

// App
function App() {
  return (
    <Router>
      <Nav />
      <Background />
      <Route exact path="/loading" component={Animation} />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </Router>
  )
}

export default App
