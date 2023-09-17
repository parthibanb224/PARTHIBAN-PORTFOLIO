import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

export default function Skills({skills}) {
    return (
        <div ref={skills} className='w-screen h-screen bg-gray-200'>
            <div className='w-full h-full flex justify-center items-center'>
                <div>
                    <h1 className='mb-20 text-center font-bold sm:text-7xl text-6xl text-green-500'>SKILLS</h1>
                    <Splide
                        options={{
                            type: "loop",
                            gap: "7px",
                            drag: "free",
                            arrows: false,
                            pagination: false,
                            perPage: 6,
                            autoScroll: {
                                pauseOnHover: true,
                                pauseOnFocus: true,
                                rewind: false,
                                speed: 2
                            }
                        }}
                        extensions={{ AutoScroll }}
                    >
                        <SplideSlide>
                            <img src="Static Assets/icons8-amazon-web-services-240.png" width='150px' height='150px' alt="aws" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="Static Assets/icons8-html-logo-240.png" width='150px' height='150px' alt="html logo" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="Static Assets/icons8-css-logo-240.png" width='150px' height='150px' alt="css" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="Static Assets/icons8-javascript-240.png" width='150px' height='150px' alt="javaScript" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="Static Assets/icons8-react-240.png" width='150px' height='150px' alt="Reactjs" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="Static Assets/icons8-bootstrap-logo-240.png" width='150px' height='150px' alt="Bootstrap" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="Static Assets/icons8-nodejs-240.png" width='150px' height='150px' alt="node" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="Static Assets/icons8-mongodb-240.png" width='150px' height='150px' alt="mongodb" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="Static Assets/icons8-express-js-240.png" width='150px' height='150px' alt="express" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="Static Assets/icons8-github-240.png" width='150px' height='150px' alt="github" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="Static Assets/Netlify.png" width='150px' height='150px' alt="Netlify" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="Static Assets/icons8-visual-studio-code-240.png" width='150px' height='150px' alt="visual studio code" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="Static Assets/icons8-redux-240.png" width='150px' height='150px' alt="redux" />
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </div>
    )
}
