import React from 'react'

export default function AllProjects() {

    const project = [
        {
            "title": "PASSWORD-RESET",
            "img": "Static Assets/bubble-gum-otp-verification.gif",
            "code": "https://github.com/parthibanb224/password-reset-FE",
            "deploy": "https://password-resets-frontend.netlify.app/"
        },
        {
            "title": "ONLINE SHOPPING",
            "img": "Static Assets/sammy-shopping.gif",
            "code": "https://github.com/parthibanb224/GUVI-DAY32-REACT-REDUX-TASK",
            "deploy": "https://reacts-redux-tasks.netlify.app/"
        },
        {
            "title": "LIBRARY MANAGER",
            "img": "Static Assets/library.gif",
            "code": "https://github.com/parthibanb224/GUVI-DAY31-REACT-FORMIK-VALIDATION-TASK",
            "deploy": "https://react-formik-validation-task.netlify.app/"
        },
        {
            "title": "QR-CODE-GENERATOR",
            "img": "Static Assets/lounge-man-working-on-web-design.gif",
            "code": "https://github.com/parthibanb224/QR-CODE-GENERATOR",
            "deploy": "https://qr-codes-generates.netlify.app/"
        },
        {
            "title": "MEAL-FINDER",
            "img": "Static Assets/sammy-line-paper-map-with-geometry.gif",
            "code": "https://github.com/parthibanb224/MEAL-FINDER",
            "deploy": "https://meal-finder-store.netlify.app/"
        }
    ]

    return (
        <div className='w-screen h-auto sm:h-auto bg-gray-200'>
            <h1 className='font-bold text-7xl text-green-500 text-center pt-2 mb-10'>Projects</h1>
            <div className='flex flex-col gap-4 w-4/5 mx-auto sm:grid sm:grid-cols-3 sm:gap-5'>

                {project.map((item, index) =>
                    <div key={index} className='bg-green-500 p-5 w-full sm:basis-1/4 sm:p-5 sm:h-full rounded-3xl'>
                        <h1 className='font-bold text-2xl text-center'>{item.title}</h1>
                        <img className='w-72 h-72 mx-auto' src={item.img} alt="green iguana"
                        />
                        <div className='flex flex-row justify-between px-5'>
                            <a href={item.code} target='_blank' rel='noreferror noopener' style={{ cursor: "pointer" }} size="small"><img src='Static Assets/icons8-play-button-90.png' alt='play button' width='50px' height='50px'></img></a>
                            <a href={item.deploy} target='_blank' rel='noreferror noopener' style={{ cursor: "pointer" }} size="small"><img src='Static Assets/icons8-code-96.png' alt='code button' width='50px' height='50px'></img></a>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}