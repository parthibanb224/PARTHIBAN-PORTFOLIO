import React from 'react'

export default function AllProjects() {

    const project = [
        {
            "title": "DIARY MANAGER",
            "img": "Static Assets/diary-manager.gif",
            "code": "https://github.com/parthibanb224/Diary-Manager-FRONTEND",
            "deploy": "https://diary-managerz.netlify.app/",
            "BE" : "https://github.com/parthibanb224/Diary-Manager-BACKEND"
        },
        {
            "title": "ONLINE BOOK STORE",
            "img": "Static Assets/bendy-paying-for-online-purchases-by-card.gif",
            "code": "https://github.com/parthibanb224/ONLINE_BOOK_STORE_FE",
            "deploy": "https://online-books-stores.netlify.app/",
            "BE" : "https://github.com/parthibanb224/ONLINE_BOOK_STORE_BE"
        },
        {
            "title": "TRAVEL PLANNER",
            "img": "Static Assets/travel-planner.gif",
            "code": "https://github.com/parthibanb224/TRAVEL_PLANNER_FE",
            "deploy": "https://travel-planner-sr09.netlify.app/",
            "BE" : "https://github.com/parthibanb224/TRAVEL_PLANNER_BE"
        },
        {
            "title": "MUSIC APP",
            "img": "Static Assets/warp-dj-at-the-console.gif",
            "code": "https://github.com/parthibanb224/MUSIC_PLAYER_FRONTEND",
            "deploy": "https://music-player-sr4.netlify.app/",
            "BE" : "https://github.com/parthibanb224/MUSIC_PLAYER_BACKEND"
        },
        {
            "title": "PASSWORD-RESET",
            "img": "Static Assets/bubble-gum-otp-verification.gif",
            "code": "https://github.com/parthibanb224/password-reset-FE",
            "deploy": "https://password-resets-frontend.netlify.app/",
            "BE" : "https://github.com/parthibanb224/password-reset-BE"
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
        },
        {
            "title": "ONLINE SHOPPING",
            "img": "Static Assets/sammy-shopping.gif",
            "code": "https://github.com/parthibanb224/GUVI-DAY32-REACT-REDUX-TASK",
            "deploy": "https://reacts-redux-tasks.netlify.app/"
        },
        {
            "title": "URL SHORTENER",
            "img": "Static Assets/simplistic-web-analytics-on-computer-screen.gif",
            "code": "https://github.com/parthibanb224/urlshotener-frontend",
            "deploy": "https://urls-shortener.netlify.app/",
            "BE" : "https://github.com/parthibanb224/urlshortener-backend"
        },
        {
            "title": "TODO APP",
            "img": "Static Assets/bouncy-completed-checklist-form-on-a-clipboard-and-pencil.gif",
            "code": "https://github.com/parthibanb224?page=2&tab=repositories",
            "deploy": "https://react-todos-task.netlify.app/"
        },
        {
            "title": "WEATHER CHECKER",
            "img": "Static Assets/kingdom-unsubscribe.gif",
            "code": "https://github.com/parthibanb224/GUVI/tree/main/DAY17",
            "deploy": "https://restcountries-api-weather-report.netlify.app/"
        },
        {
            "title": "CALCULATOR",
            "img": "Static Assets/bendy-budget-planning-doing-taxes-and-accounting.gif",
            "code": "https://github.com/parthibanb224/GUVI/tree/main/DAY15/DOM%20CALCULATOR",
            "deploy": "https://gleeful-swan-d0e41d.netlify.app/"
        },
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
                            <a href={item.deploy} target='_blank' rel='noreferror noopener' style={{ cursor: "pointer" }} size="small"><img src='Static Assets/icons8-play-button-90.png' alt='play button' width='50px' height='50px'></img></a>
                            <a href={item.code} target='_blank' rel='noreferror noopener' style={{ cursor: "pointer" }} size="small"><img src='Static Assets/icons8-code-96.png' alt='code button' width='50px' height='50px'></img></a>
                            {item.BE? <a href={item.BE} target='_blank' rel='noreferror noopener' style={{ cursor: "pointer" }} size="small"><img src='Static Assets/icons8-database-100.png' alt='code button' width='50px' height='50px'></img></a> : ""}
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}