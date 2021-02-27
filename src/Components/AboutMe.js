// Images
import me from '../media/me.jpg'
import resume from '../media/resume.pdf'
import aboutIcon from '../media/aboutme.png'

// CSS
import '../CSS/aboutme.css'

// About Me
function AboutMe() {
  return (
    <div class='aboutme'>  
      {/* <h1 class='gap' >About Me</h1> */}
      <img src={aboutIcon} alt='about me' class='heading gap' />
      <div class='card'>
        <img src={me} alt='ME!' width='400px' class='hundoimage rounded-border' />
        <h2>Brandon Robertson</h2>
        <p>Hi! I am Brandon Robertson and I've recently just finished a bootcamp course at Coder Academy in Melbourne.</p>
        <p>I am new to the coding and tech industry for work but I have always been an avid fan of tech</p>
        <p>This is my portfolio, it lists the skills I have and some small projects I worked on during my time at Coder Academy</p>
        <a class='resume' href={resume} target='_blank' rel="noreferrer" >Click here to see my resume!</a>
      </div>
    </div>
  )
}

export default AboutMe
