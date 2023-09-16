import React, { useRef, useState } from 'react'
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills'
import Sidebar from '../components/Sidebar';
import ScrollButton from '../components/ScrollButton';
import Home from './Home';

function MainPage() {

  const [open,setOpen] = useState();

  const about = useRef(null)
  const education = useRef(null);
  const skills = useRef(null);
  const contacts = useRef(null);
  const projects = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
    setOpen(false);
  }

  return (
    <div className='relative'>
      <Sidebar about={about} education={education} skills={skills} contacts={contacts} projects={projects} scrollToSection={scrollToSection} open={open} setOpen={setOpen}/>
      <Home about={about} setOpen={setOpen} open={open} contacts={contacts} scrollToSection={scrollToSection}/>
      <Education education={education}/>
      <Skills skills={skills}/>
      <Projects projects={projects}/>
      <Contact contacts={contacts}/>
      <ScrollButton />
    </div>
  )
}
export default MainPage