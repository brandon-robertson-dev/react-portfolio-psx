// React


// Images
import ex1 from '../media/title.png'
import ex2 from '../media/menu.png'
import ex3 from '../media/siteex1.png'
import ex4 from '../media/siteex2.png'
import projectsIcon from '../media/projects.png'

// Projects
function Projects() {
  return (
    <div class='projects'>
      {/* <h1>Projects</h1> */}
      <img src={projectsIcon} alt='projects' class='heading' />
      <div class="card">
        <h2>List App</h2>
        <img src={ex1} alt="Title Page of my List Making App" class='hundoimage' />
        <h3>My Terminal App for Coder Academy</h3>
        <p>
            Here is my List App that I had made for my Coder Academy Terminal App assignment in Term 1.
        </p>
        <img src={ex2} alt="Menu for my Terminal App" class='hundoimage' />
        <p>
          This is the menu for my Terminal App where you can create lists and sort them.<br />
          <strong>Link to project: </strong><a href="https://github.com/brandonrobertson23/sort_app">Terminal App</a>
        </p>
      </div>
      <div class="card">
        <h2>Portfolio Website</h2>
        <img src={ex3} alt="Site Example" class='hundoimage' />
        <h3>My Portfolio Website</h3>
        <p>
          Here is my Portfolio Website that I had made for my Coder Academy Portfolio assignment in Term 1.
          Here is an example:
        </p>
        <img src={ex4} alt="Site Example" class='hundoimage' />
        <p>
          <strong>Link to project: </strong><a href="https://github.com/brandonrobertson23/t1a3">Portfolio Website</a>
        </p>
      </div>
    </div>
  )
}

export default Projects
