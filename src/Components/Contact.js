// React

// Images
import contactIcon from '../media/contact.png'
import twitter from '../media/twitter.png'
import linkedin from '../media/linkedin.png'

// Contact
function Contact() {
  return (
    <div class='contact'>
      {/* <h1>Contact</h1> */}
      <img src={contactIcon} alt='contact' class='heading' />
      <div class='list card social-card'>
        <div class='each-item-list'>
          <h2>Twitter</h2>
          <a href='https://twitter.com/nobrandonsclub' target='_blank' rel="noreferrer" ><img src={twitter} alt='Twitter' class='social-icons left-icon' /></a>
        </div>
        <div>
          <h2>LinkedIn</h2>
          <a href='https://www.linkedin.com/in/brandon-robertson-dev/' target='_blank' rel="noreferrer" ><img src={linkedin} alt='LinkedIn' class='social-icons' /></a>
        </div>
      </div>
    </div>
  )
}

export default Contact
