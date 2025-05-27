import { useState, useEffect, useRef } from 'react';
import '../css/About.css';

function About() {

    // const [eduEffect, setEduEffect] = useState(false);

    // useEffect(() => {
    //     setEduEffect(true);
    // }, [])

    const [eduEffect, setEduEffect] = useState(false);
    const itemBoxRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setEduEffect(true);
                    observer.unobserve(entry.target); // หยุดการสังเกตหลังจากที่เห็นแล้ว
                }
            },
            {
                threshold: 0.5 // เปลี่ยนแปลงตามที่คุณต้องการ
            }
        );

        if (itemBoxRef.current) {
            observer.observe(itemBoxRef.current);
        }

        return () => {
            if (itemBoxRef.current) {
                observer.unobserve(itemBoxRef.current);
            }
        };
    });

  return (
    <div className='about-container'>
        <div className="about-info">
            <h1>About Me</h1>
            <p>I am an aspiring Front-End Web Developer with a growing proficiency in React.js. My background includes a solid understanding of HTML, 
                CSS, and JavaScript, with a focus on creating user-friendly, responsive web applications. I am passionate about continuously learning and 
                improving my skills, particularly in modern front-end technologies like React.js. My goal is to create efficient and visually appealing websites 
                that provide an exceptional user experience.
            </p>
        </div>

        <div className="work-edu">
            <div className={`item-box ${eduEffect ? 'edu-effect' : ''}`} ref={itemBoxRef}>
                <div className="text-box">
                    <h1>Work Experience</h1>
                    <p>I completed an internship as a programmer at Odienmall.
                        I have worked as a Foodpanda rider, a sales associate in 
                        a minimarket, and a hotel receptionist.</p>
                </div>
            </div>

            <div className={`item-box ${eduEffect ? 'edu-effect' : ''}`} ref={itemBoxRef}>
                <div className="text-box">
                    <h1>Education</h1>
                    <p>I graduated from Soutsaka Institute of Technology.</p>
                    <p>Field of Study: Program</p>
                    <p>Graduation Date: 07 - 2024</p>
                </div>                    
            </div>
        </div>

        <div className="about-btn">
            <button>View full Resume</button>
        </div>
    </div>
  )
}

export default About
