import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects({projects}) {
    return (
        <div ref={projects} className='w-screen h-auto sm:h-screen bg-gray-200'>
            <h1 className='font-bold sm:text-7xl text-6xl text-green-500 text-center pt-2 mb-2'>Projects</h1>
            <h3 className='mb-10 text-center font-bold sm:text-2xl text-xl px-2 '>Common Credentials : <span className='sm:text-lg text-base font-light text-red-600'>USER : user123@gmail.com | user123 ..&&.. ADMIN : admin123@gmail.com | admin123</span></h3>
            <div className='flex flex-col gap-4 w-4/5 mx-auto sm:flex sm:flex-row sm:h-3/5 sm:gap-5'>
                <div className='bg-green-500 p-5 w-full sm:basis-1/3 sm:p-5 sm:h-full rounded-3xl'>
                    <h1 className='font-bold text-2xl text-center'>DIARY MANAGER</h1>
                    <img className='w-72 h-72 mx-auto' src="Static Assets/diary-manager.gif" alt="green iguana"
                    />
                    <div className='flex flex-row justify-between px-5'>
                        <a href='https://diary-managerz.netlify.app/' target='_blank' rel='noreferror noopener' style={{ cursor: "pointer" }} size="small"><img src='Static Assets/icons8-play-button-90.png' alt='play button' width='50px' height='50px'></img></a>
                        <a href='https://github.com/parthibanb224/Diary-Manager-FRONTEND' target='_blank' rel='noreferror noopener' style={{ cursor: "pointer" }} size="small"><img src='Static Assets/icons8-code-96.png' alt='code button' width='50px' height='50px'></img></a>
                        <a href='https://github.com/parthibanb224/Diary-Manager-BACKEND' target='_blank' rel='noreferror noopener' style={{ cursor: "pointer" }} size="small"><img src='Static Assets/icons8-database-100.png' alt='code button' width='50px' height='50px'></img></a>
                    </div>
                </div>
                <div className='bg-green-500 p-5 w-full sm:basis-1/3 sm:p-5 sm:h-full rounded-3xl'>
                    <h1 className='font-bold text-2xl text-center'>ONLINE BOOK STORE</h1>
                    <img className='w-72 h-72 mx-auto' src="Static Assets/bendy-paying-for-online-purchases-by-card.gif" alt="green iguana"
                    />
                    <div className='flex flex-row justify-between px-5'>
                        <a href='https://online-books-stores.netlify.app/' target='_blank' rel='noreferror noopener' style={{ cursor: "pointer" }} size="small"><img src='Static Assets/icons8-play-button-90.png' alt='play button' width='50px' height='50px'></img></a>
                        <a href='https://github.com/parthibanb224/ONLINE_BOOK_STORE_FE' target='_blank' rel='noreferror noopener' style={{ cursor: "pointer" }} size="small"><img src='Static Assets/icons8-code-96.png' alt='code button' width='50px' height='50px'></img></a>
                        <a href='https://github.com/parthibanb224/ONLINE_BOOK_STORE_BE' target='_blank' rel='noreferror noopener' style={{ cursor: "pointer" }} size="small"><img src='Static Assets/icons8-database-100.png' alt='code button' width='50px' height='50px'></img></a>
                    </div>
                </div>
                <div className='bg-green-500 p-5 w-full sm:basis-1/3 sm:p-5 sm:h-full rounded-3xl'>
                    <h1 className='font-bold text-2xl text-center'>TRAVEL PLANNER</h1>
                    <img className='w-72 h-72 mx-auto' src="Static Assets/travel-planner.gif" alt="green iguana"
                    />
                    <div className='flex flex-row justify-between px-5'>
                        <a href='https://travel-planner-sr09.netlify.app/' target='_blank' rel='noreferror noopener' style={{ cursor: "pointer" }} size="small"><img src='Static Assets/icons8-play-button-90.png' alt='play button' width='50px' height='50px'></img></a>
                        <a href='https://github.com/parthibanb224/TRAVEL_PLANNER_FE' target='_blank' rel='noreferror noopener' style={{ cursor: "pointer" }} size="small"><img src='Static Assets/icons8-code-96.png' alt='code button' width='50px' height='50px'></img></a>
                        <a href='https://github.com/parthibanb224/TRAVEL_PLANNER_BE' target='_blank' rel='noreferror noopener' style={{ cursor: "pointer" }} size="small"><img src='Static Assets/icons8-database-100.png' alt='code button' width='50px' height='50px'></img></a>
                    </div>
                </div>
                <div className='bg-green-500 p-5 w-full sm:basis-1/3 sm:p-5 sm:h-full rounded-3xl'>
                    <h1 className='font-bold text-2xl text-center'>MUSIC APP</h1>
                    <img className='w-72 h-72 mx-auto' src="Static Assets/warp-dj-at-the-console.gif" alt="green iguana"
                    />
                    <div className='flex flex-row justify-between px-5'>
                        <a href='https://music-player-sr4.netlify.app/' target='_blank' rel='noreferror noopener' style={{ cursor: "pointer" }} size="small"><img src='Static Assets/icons8-play-button-90.png' alt='play button' width='50px' height='50px'></img></a>
                        <a href='https://github.com/parthibanb224/MUSIC_PLAYER_FRONTEND' target='_blank' rel='noreferror noopener' style={{ cursor: "pointer" }} size="small"><img src='Static Assets/icons8-code-96.png' alt='code button' width='50px' height='50px'></img></a>
                        <a href='https://github.com/parthibanb224/MUSIC_PLAYER_BACKEND' target='_blank' rel='noreferror noopener' style={{ cursor: "pointer" }} size="small"><img src='Static Assets/icons8-database-100.png' alt='code button' width='50px' height='50px'></img></a>
                    </div>
                </div>
            </div>
            <div className='p-5 sm:mt-3 flex justify-end pr-10 sm:pr-40'>
                <Link to='/projects'><button className='border p-2 px-3 rounded-full border-green-500 flex items-center bg-green-500'>View All<img className=' ml-2 rounded-full bg-white w-9 h-9' src='Static Assets/icons8-arrow-96.png' alt='go to'></img></button></Link>
            </div>
        </div>
    )
}
