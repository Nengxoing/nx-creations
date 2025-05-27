import '../css/Skill.css'

function Skill() {
  return (
    <div className='skill-container'>
      <h1>Skill and Interests</h1>

      <div className="img-skill">
        <div className="img">
            {/* <img src="/images/programming_skill.jpg" alt="" /> */}
            <img src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div className="skill-info">
            <h1>Skill and Interests</h1>
            <p>I have a basic knowledge of HTML, CSS, and JavaScript, and I am currently studying React.</p>
            <p>I have a foundation in UX/UI design for websites using Figma and Illustrator.</p>
            <p>I enjoy playing music, singing, and playing sports.</p>
            <p>General programs: Photoshop, Illustrator, Canva, Word, PowerPoint, Excel, FL Studio</p>
        </div>
      </div>
    </div>
  )
}

export default Skill
