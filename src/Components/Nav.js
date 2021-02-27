// React
import { Link } from 'react-router-dom'

// Images
import nameIcon from '../media/brtext.png'

// Navbar
function Nav() {
  return (
    <div className='topnav' >
      <Link to='/loading'><img src={nameIcon} alt='Brandon Robertson'/></Link>
    </div>
  )
}

export default Nav