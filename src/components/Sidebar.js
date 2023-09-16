import React from 'react'

export default function Sidebar({about,education, skills, contacts, projects, scrollToSection, open, setOpen}) {
    return (
        <div className={`fixed top-0 right-0 h-screen rounded-tl-sm ${open && "block sm:w-3/6 md:w-3/12 w-4/6 z-10 shadow-lg"} ${!open && "hidden"} bg-gray-200`}>
            <button className="absolute top-8 right-8 text-3xl text-green-500" onClick={() => setOpen(false)}>&times;</button>
            <div className='flex justify-center items-center h-screen'>
                <ul className='flex flex-col space-y-16'>
                    <li><button onClick={() => scrollToSection(about)} className='text-lg font-bold border border-green-500 text-green-500 p-3 rounded-3xl w-44 hover:bg-green-500 hover:text-white'>About</button></li>
                    <li><button onClick={() => scrollToSection(education)} className='text-lg font-bold border border-green-500 text-green-500 p-3 rounded-3xl w-44 hover:bg-green-500 hover:text-white'>Education</button></li>
                    <li><button onClick={() => scrollToSection(skills)} className='text-lg font-bold border border-green-500 text-green-500 p-3 rounded-3xl w-44 hover:bg-green-500 hover:text-white'>skills</button></li>
                    <li><button onClick={() => scrollToSection(projects)} className='text-lg font-bold border border-green-500 text-green-500 p-3 rounded-3xl w-44 hover:bg-green-500 hover:text-white'>Projects</button></li>
                    {/* <li><button onClick={() => scrollToSection(acheivements)} className='text-lg font-bold border border-green-500 text-green-500 p-3 rounded-3xl w-44 hover:bg-green-500 hover:text-white'>Acheivements</button></li> */}
                    <li><button onClick={() => scrollToSection(contacts)} className='text-lg font-bold border border-green-500 text-green-500 p-3 rounded-3xl w-44 hover:bg-green-500 hover:text-white'>Contact</button></li>
                </ul>
            </div>
        </div>
    )
}
