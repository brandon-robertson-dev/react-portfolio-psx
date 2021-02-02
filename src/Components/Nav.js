// React
import { Link } from 'react-router-dom'

// Images
import nameIcon from '../media/brtext.png'

// CSS
import '../CSS/nav.css'

// Navbar
function Nav() {
  return (
    <div class='topnav' id='myTopnav' >
      <Link to='/loading' ><img src={nameIcon} alt='Brandon Robertson' /></Link>
    </div>
  )
}

export default Nav