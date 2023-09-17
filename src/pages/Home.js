import React from 'react'
import { MdMenu } from "react-icons/md";
import { ReactComponent as Linkedin } from "../Assets/linkedin.svg"
import { ReactComponent as Github } from "../Assets/github.svg"
import { ReactComponent as Twitter } from "../Assets/twitter.svg"
import { ReactComponent as Youtube } from "../Assets/youtube.svg"
import { ReactComponent as Instagram } from "../Assets/instagram.svg"
import Resume from '../Assets/Parthiban FSD Guvi.pdf'

export default function Home({ about, setOpen, open, contacts, scrollToSection }) {

    return (
        <div ref={about} className={`relative flex flex-col w-screen sm:flex sm:flex-row ${open && "blur-md"}`}>

            <div className={`flex flex-col sm:basis-2/5 bg-green-500 h-screen`}>
                <div className='basis-3/5 flex justify-center items-center'>
                    <div>
                        <img
                            src='/Static Assets/SKMBT_C45418071908160_0001 - Copy.jpg'
                            alt='parthi'
                            className='w-64 h-72 rounded-full object-cover'
                        ></img>
                        <h1 className='text-center p-8 text-2xl font-bold text-white'>PARTHIBAN B</h1>
                    </div>
                </div>
                <div className='basis-2/5 flex justify-center items-center space-x-4'>
                    <a href="https://www.linkedin.com/in/parthibanb224/" target="_blank" rel="noreferrer"><p className='socialMedia-icon' ><Linkedin /></p></a>
                    <a href="https://github.com/parthibanb224" target="_blank" rel="noreferrer"><p className='socialMedia-icon' ><Github /></p></a>
                    <a href="https://twitter.com/parthibanb224" target="_blank" rel="noreferrer"><p className='socialMedia-icon' ><Twitter /></p></a>
                    <a href="https://www.youtube.com/channel/UCxJwQg_SDe2XA6jYlofbcCw" target="_blank" rel="noreferrer"><p className='socialMedia-icon' ><Youtube /></p></a>
                    <a href="https://www.instagram.com/parthiban__b/" target="_blank" rel="noreferrer"><p className='socialMedia-icon' ><Instagram /></p></a>
                </div>
            </div>
            <div className='sm:basis-3/5 bg-gray-200 h-screen flex justify-center items-center'>
                <div className='w-4/5 text-justify'>
                    <h1 className='sm:text-4xl text-2xl font-bold text-center sm:mb-5 mb-1'>FULL STACK DEVELOPER(MERN)</h1>
                    <h6 className='sm:text-xl text-md font-light'>I hold a Bachelor's degree in Engineering from Karpagam College of Engineering, and I recently completed a comprehensive MERN Full Stack Developer course at QUVI Institute. My educational background and hands-on training have equipped me with a strong foundation in engineering principles as well as cutting-edge skills in web development using the MERN (MongoDB, Express.js, React, Node.js) stack. I am passionate about creating dynamic and user-friendly web applications and am constantly seeking opportunities to contribute to innovative projects. Feel free to connect with me to explore collaboration and discuss the exciting possibilities at the intersection of engineering and full-stack development.</h6>
                    <div className='sm:mt-8 mt-3'>
                        <a href={Resume} download='ParthibanResume' target="_blank" rel="noreferrer">
                            <button
                                className='text-lg border border-green-500 p-2 px-3 hover:bg-green-500 hover:text-white text-green-500 rounded-3xl mr-4'>
                                Download
                            </button>
                        </a>

                        <button
                            onClick={() => scrollToSection(contacts)}
                            className='text-lg border border-green-500 p-2 px-3 hover:bg-green-500 hover:text-white text-green-500 rounded-3xl'>
                            Contact
                        </button>
                    </div>
                </div>
            </div>
            <div className={` hidden sm:block openbtn absolute top-10 right-10 text-2xl cursor-pointer`}>
                <p onClick={() => setOpen(true)}><MdMenu /></p>
            </div>
        </div>
    )
}
