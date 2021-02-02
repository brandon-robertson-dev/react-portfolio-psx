// Images
import ruby from '../media/ruby.png'
import html from '../media/html.svg'
import css from '../media/css.png'
import js from '../media/js800.png'
import mongo from '../media/mongo.png'
import postgres from '../media/postgres.png'
import rails from '../media/rails.png'
import react from '../media/reactlarge.png'
// import skillsIcon from '../media/skills.png'

// Array for skills
let skills = [
  {name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", image: html},
  {name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", image: css},
  {name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", image: js},
  {name: "React", link: "https://reactjs.org/docs/getting-started.html", image: react},
  {name: "Ruby", link: "https://ruby-doc.org/", image: ruby},
  {name: "Ruby on Rails", link: "https://guides.rubyonrails.org/getting_started.html", image: rails},
  {name: "MongoDB", link: "https://docs.mongodb.com/", image: mongo},
  {name: "PostgreSQL", link: "https://www.postgresql.org/docs/", image: postgres}
]

function Skills() {
  return (
    <div class='skills'>
      <h1>Skills</h1>
      <div class='list card' >
      {
        skills.map((eachSkill, index) => {
          return(
            <div>
              <h2 key={index}>{eachSkill.name}</h2><br />
              <a href={eachSkill.link} ><img class={eachSkill.name} src={eachSkill.image} alt={eachSkill.name} /></a>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Skills