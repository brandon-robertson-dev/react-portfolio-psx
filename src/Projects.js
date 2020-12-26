import ruby from './media/ruby.png'
import html from './media/html.png'
import css from './media/css.png'

import ex1 from './media/title.png'
import ex2 from './media/menu.png'
import ex3 from './media/siteex1.png'
import ex4 from './media/siteex2.png'

function Projects() {
  return (
    <div>
      <h1>Skills</h1>
      <div class="skills">
        <div>
          <h2>RUBY</h2>
          <a href="https://ruby-doc.org/"><img src={ruby} alt="Ruby"/></a>
        </div>
        <div>
          <h2>HTML</h2>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src={html} alt="HTML"/></a>
        </div>
        <div>
          <h2>CSS</h2>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src={css} alt="CSS"/></a>
        </div>
      </div>
      <h1>Projects</h1>
      <div class="aboutme">
        <h2>List App</h2>
        <img src={ex1} alt="Title Page of my List Making App"/>
        <h2>My Terminal App for Coder Academy</h2>
        <p>
            Here is my List App that I had made for my Coder Academy Terminal App assignment in Term 1.
        </p>
        <img src={ex2} alt="Menu for my Terminal App"/>
        <p>
          This is the menu for my Terminal App where you can create lists and sort them.
          <strong>Link to project: </strong><a href="https://github.com/brandonrobertson23/sort_app">Terminal App</a>
        </p>
      </div>
      <div class="aboutme">
        <h2>Portfolio Website</h2>
        <img src={ex3} alt="Site Example"/>
        <h2>My Portfolio Website</h2>
        <p>
          Here is my Portfolio Website that I had made for my Coder Academy Portfolio assignment in Term 1.
          Here is an example:
        </p>
        <img src={ex4} alt="Site Example"/>
        <p>
          Here is another example of my site:
          <strong>Link to project: </strong><a href="https://github.com/brandonrobertson23/t1a3">Portfolio Website</a>
        </p>
      </div>
    </div>
  )
}

export default Projects
