import EducationCards from "../components/education-cards/EducationCards";
import './about.css'
import AboutMe from "../components/aboutme/AboutMe"


function About() {
    return (
      <div className="about-container">
        <div className='about-section'>
          <h1>About Me</h1>
          <AboutMe />
        </div>
        <h1>Education History</h1>
        <EducationCards />
      </div>
    )
  }
  
  export default About;
  