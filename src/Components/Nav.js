// React
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

// Images
import homeIcon from '../media/home.png'
import aboutIcon from '../media/aboutme.png'
import contactIcon from '../media/contact.png'
import projectsIcon from '../media/projects.png'
import nameIcon from '../media/brtext.png'

// CSS
import '../CSS/nav.css'



// Navbar
function Nav() {
  // Sets and changes icon for menu
  const [icons, setIcons] = useState(faBars)

  // Opens and Closes Navbar via Icon
  function resNav() {
    var x = document.getElementById('myTopnav')
    if (x.className === 'topnav') {
      setIcons(faTimes)
      x.className += ' responsive'
    } else {
      setIcons(faBars)
      x.className = 'topnav'
    }
  }

  // Closes Navbar
  function closeNav() {
    var x = document.getElementById('myTopnav')
    setIcons(faBars)
    x.className = 'topnav'
  }

  return (
    <div class='topnav' id='myTopnav' >
      <Link to='/loading' onClick={closeNav} ><img src={nameIcon} alt='Brandon Robertson' height='40px' /></Link>
      <Link to='/' onClick={closeNav} ><img src={homeIcon} alt='Home' height='50px' /></Link>
      <Link to='/about' onClick={closeNav} ><img src={aboutIcon} alt='About Me' height='50px' /></Link>
      <Link to='/contact' onClick={closeNav} ><img src={contactIcon} alt='Contact' height='50px' /></Link>
      <Link to='/projects' onClick={closeNav} ><img src={projectsIcon} alt='Projects' height='50px' /></Link>
      <Link to='#' class='icon' ><FontAwesomeIcon icon={icons} onClick={resNav} /></Link>
    </div>
  )
}

export default Nav