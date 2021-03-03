// React


// Images
import ex11 from '../media/11.png'
import ex12 from '../media/12.png'
import ex21 from '../media/21.png'
import ex22 from '../media/22.png'
import ex31 from '../media/31.png'
import ex32 from '../media/32.png'
import ex41 from '../media/41.png'
import ex42 from '../media/42.png'
import ex51 from '../media/51.png'
import ex52 from '../media/52.png'
import ex61 from '../media/61.png'
import ex62 from '../media/62.png'
import projectsIcon from '../media/projects.png'

// Projects
function Projects() {
  return (
    <div class='projects'>
      <img src={projectsIcon} alt='projects' class='heading' />
      <div class="card">
        <h2>DevConnect</h2>
        <img src={ex61} alt="Site Example" class='hundoimage' />
        <h3>MERN Stack</h3>
        
        <p>This project was my final project at Coder Academy, we had groups of two and had to make a MERN stack App.</p>
        <p>MongoDB, Express.js, React.js and Node.js</p>
        <p>We had about 4 weeks to work on this, I mostly worked on the backend part of it building the Node/Express app and making it work with MongoDB via Mongoose</p>
        
        <img src={ex62} alt="Site Example" class='hundoimage' />
        <p>
          <strong>Link to project: </strong><a href="https://github.com/brandon-robertson-dev/MERN-Full-Stack-APP-T3A2">DevConnect</a>
        </p>
      </div>
      <div class="card">
        <h2>Dungeons and Dragons</h2>
        <img src={ex51} alt="Site Example" class='hundoimage' />
        <h3>A group finding app for Dungeons and Dragons</h3>

        <p>I made this at Coder Academy as part of a short hackathon, we had about 2.5 days to make a full Express.js/Node.js app and my coding partner and I decided to make a group/game finding forum</p>
        <p>The front end was left until last minute so it is quite rough but we were both happy with how much we actually got finished in 2 days</p>

        <img src={ex52} alt="Site Example" class='hundoimage' />
        <p>
          <strong>Link to project: </strong><a href="https://github.com/brandon-robertson-dev/hackathon_lfg">Dungeons and Dragons</a>
        </p>
      </div>
      <div class="card">
        <h2>CheeseBae</h2>
        <img src={ex41} alt="Site Example" class='hundoimage' />
        <h3>Ruby on Rails Stack</h3>
        
        <p>This was my final Ruby assignment from Coder Academy, we had to make a marketplace app using Ruby On Rails.</p>
        <p>I decided to make mine as a cheese selling platform</p>
        <p>Seeing as front end wasn't being graded I spent my entire time just building a solid back end</p>

        <img src={ex42} alt="Site Example" class='hundoimage' />
        <p>
          <strong>Link to project: </strong><a href="https://github.com/brandon-robertson-dev/BrandonRobertson_T2A2">CheeseBae</a>
        </p>
      </div>
      <div class="card">
        <h2>Music Finder</h2>
        <img src={ex31} alt="Site Example" class='hundoimage' />
        <h3>Node.js CLI app</h3>

        <p>This was a hackathon app I built at Coder Academy, we just needed to build something with Node.js, my coding partner and I decided on making a music finding app.</p>
        <p>This app will ask you how you feel and if you want to feel the same way and then direct you to a playlist with either the same emotion or opposite emotion you are feeling.</p>

        <img src={ex32} alt="Site Example" class='hundoimage' />
        <p>
          <strong>Link to project: </strong><a href="https://github.com/brandon-robertson-dev/spotify">Music Finder</a>
        </p>
      </div>
      <div class="card">
        <h2>Portfolio Website</h2>
        <img src={ex21} alt="Site Example" class='hundoimage' />
        <h3>My Portfolio Website</h3>

        <p>This was my first website building project at Coder Academy, we had to create a portfolio website using only HTML and CSS, I themed mine after the PlayStation 1 menu</p>
        <p>As you can tell I kept the same theme for my current portfolio but now my website is built using React.js and is much more responsive and simplified</p>

        <img src={ex22} alt="Site Example" class='hundoimage' />
        <p>
          <strong>Link to project: </strong><a href="https://github.com/brandon-robertson-dev/BrandonRobertson_T1A3">Portfolio Website</a>
        </p>
      </div>
      <div class="card">
        <h2>List App</h2>
        <img src={ex11} alt="Title Page of my List Making App" class='hundoimage' />
        <h3>My Terminal App for Coder Academy</h3>

        <p>This was my very first project at Coder Academy, we needed to make a Ruby CLI app and I decided to make a List creating app that can also be sorted.</p>
        <p>It was very challenging being the first app I had ever built and learning the planning stage for making apps.</p>

        <img src={ex12} alt="Menu for my Terminal App" class='hundoimage' />
        <p>
          <strong>Link to project: </strong><a href="https://github.com/brandon-robertson-dev/BrandonRobertson_T1A2">Terminal App</a>
        </p>
      </div>
    </div>
  )
}

export default Projects
