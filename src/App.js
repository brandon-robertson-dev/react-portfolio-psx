// React
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Components
import Nav from './Components/Nav'
import Background from './Components/Background'
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import Animation from './Components/Animation'
import NotFound from './Components/NotFound'

// CSS
import './CSS/app.css'

// App
function App() {
  return (
    <Router>
      <Nav />
      <Background />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/loading" component={Animation} />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
          <Route component={NotFound} />
        </Switch>
      
    </Router>
  )
}

export default App
