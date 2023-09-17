import React from 'react'
import { ReactComponent as Cap } from "../Assets/graduation-cap-circular-button-svgrepo-com.svg"

export default function Education({education}) {
    return (
        <div ref={education} className='w-screen flex flex-col sm:flex sm:flex-row bg-gray-200'>
            <div className='sm:h-screen h-auto w-screen sm:w-3/5 '>
                <div className=' p-16 h-full space-y-7'>
                    <h1 className='sm:text-7xl text-6xl text-green-600 font-bold'>Education</h1>

                    <div className='flex flex-row w-full sm:h-1/4 h-auto rounded-3xl bg-green-200 border border-green-500 hover:bg-green-300'>
                        <div className='w-1/5 pt-2 flex justify-center'><Cap /></div>
                        <div className='w-4/5 flex flex-col mt-2'>
                            <p className='font-bold text-green-500'>2013</p>
                            <p className='font-bold text-2xl'>Full Stack Developer</p>
                            <p className='text-xl mt-3'>Guvi Institute, Chennai</p>
                        </div>
                    </div>

                    <div className='flex flex-row w-full rounded-3xl sm:h-1/4 h-auto bg-green-200 border border-green-500 hover:bg-green-300'>
                        <div className='w-1/5 pt-2 flex justify-center'><Cap /></div>
                        <div className='w-4/5 flex flex-col mt-2'>
                            <p className='font-bold text-green-500'>2015-2019</p>
                            <p className='font-bold text-2xl'>Bachelor Of Engineering</p>
                            <p className='text-xl mt-3'>Karpagam College of Engineering, Coimbatore</p>
                        </div>
                    </div>

                    <div className='flex flex-row w-full sm:w-full sm:h-1/4 h-auto rounded-3xl bg-green-200 border border-green-500 hover:bg-green-300'>
                        <div className='w-1/5 pt-2 flex justify-center'><Cap /></div>
                        <div className='w-4/5 flex flex-col mt-2'>
                            <p className='font-bold text-green-500'>2014-2015</p>
                            <p className='font-bold text-2xl'>Higher Secondary School</p>
                            <p className='text-xl mt-3'>Nadar Saraswathi Higher Secondary School, Theni</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='sm:flex sm:justify-center sm:items-center sm:h-screen sm:w-2/5 hidden'>
            <div className='p-5'>
                <img src='https://ajitharunai.netlify.app/static/media/eduGreen.7d2ee27248c9c15b20216aa2368078d8.svg' alt='education-img'></img>
            </div>
            </div>
        </div>
    )
}
