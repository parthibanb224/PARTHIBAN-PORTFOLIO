import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects({projects}) {
    return (
        <div ref={projects} className='w-screen h-auto sm:h-screen bg-gray-200'>
            <h1 className='font-bold sm:text-7xl text-6xl text-green-500 text-center pt-2 mb-10'>Projects</h1>
            <div className='flex flex-col gap-4 w-4/5 mx-auto sm:flex sm:flex-row sm:h-3/5 sm:gap-5'>
                <div className='bg-green-500 p-5 w-full sm:basis-1/3 sm:p-5 sm:h-full rounded-3xl'>
                    <h1 className='font-bold text-2xl text-center'>PASSWORD-RESET</h1>
                    <img className='w-72 h-72 mx-auto' src="Static Assets/bubble-gum-otp-verification.gif" alt="green iguana"
                    />
                    <div className='flex flex-row justify-between px-5'>
                        <a href='https://github.com/parthibanb224/password-reset-FE' target='_blank' rel='noreferror noopener' style={{ cursor: "pointer" }} size="small"><img src='Static Assets/icons8-play-button-90.png' alt='play button' width='50px' height='50px'></img></a>
                        <a href='https://password-resets-frontend.netlify.app/' target='_blank' rel='noreferror noopener' style={{ cursor: "pointer" }} size="small"><img src='Static Assets/icons8-code-96.png' alt='code button' width='50px' height='50px'></img></a>
                    </div>
                </div>
                <div className='bg-green-500 p-5 w-full sm:basis-1/3 sm:p-5 sm:h-full rounded-3xl'>
                    <h1 className='font-bold text-2xl text-center'>ONLINE SHOPPING</h1>
                    <img className='w-72 h-72 mx-auto' src="Static Assets/sammy-shopping.gif" alt="green iguana"
                    />
                    <div className='flex flex-row justify-between px-5'>
                        <a href='https://github.com/parthibanb224/GUVI-DAY32-REACT-REDUX-TASK' target='_blank' rel='noreferror noopener' style={{ cursor: "pointer" }} size="small"><img src='Static Assets/icons8-play-button-90.png' alt='play button' width='50px' height='50px'></img></a>
                        <a href='https://reacts-redux-tasks.netlify.app/' target='_blank' rel='noreferror noopener' style={{ cursor: "pointer" }} size="small"><img src='Static Assets/icons8-code-96.png' alt='code button' width='50px' height='50px'></img></a>
                    </div>
                </div>
                <div className='bg-green-500 p-5 w-full sm:basis-1/3 sm:p-5 sm:h-full rounded-3xl'>
                    <h1 className='font-bold text-2xl text-center'>LIBRARY MANAGER</h1>
                    <img className='w-72 h-72 mx-auto' src="Static Assets/library.gif" alt="green iguana"
                    />
                    <div className='flex flex-row justify-between px-5'>
                        <a href='https://github.com/parthibanb224/GUVI-DAY31-REACT-FORMIK-VALIDATION-TASK' target='_blank' rel='noreferror noopener' style={{ cursor: "pointer" }} size="small"><img src='Static Assets/icons8-play-button-90.png' alt='play button' width='50px' height='50px'></img></a>
                        <a href='https://react-formik-validation-task.netlify.app/' target='_blank' rel='noreferror noopener' style={{ cursor: "pointer" }} size="small"><img src='Static Assets/icons8-code-96.png' alt='code button' width='50px' height='50px'></img></a>
                    </div>
                </div>
            </div>
            <div className='p-5 sm:mt-3 flex justify-end pr-10 sm:pr-40'>
                <Link to='/projects'><button className='border p-2 px-3 rounded-full border-green-500 flex items-center bg-green-500'>View All<img className=' ml-2 rounded-full bg-white w-9 h-9' src='Static Assets/icons8-arrow-96.png' alt='go to'></img></button></Link>
            </div>
        </div>
    )
}
