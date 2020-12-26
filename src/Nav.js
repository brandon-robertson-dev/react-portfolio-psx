import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Home from './Home'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Projects from './Projects'
import Animation from './Animation'
import NotFound from './NotFound'

function Nav() {
  return (
    <BrowserRouter>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/loading'>Restart</Link></li>
        <li><Link to='/about'>About Me</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/loading" component={Animation} />
        <Route exact path="/about" component={AboutMe} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Nav
