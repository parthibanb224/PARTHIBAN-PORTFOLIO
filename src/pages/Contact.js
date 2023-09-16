import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AiOutlineSend } from "react-icons/ai";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function Contact({contacts}) {

    const [message, setMessage] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        const URL = process.env.NODE_ENV === 'development' ? `${process.env.REACT_APP_DEV_URL_FOR_BACKEND}/response` : `${process.env.REACT_APP_PRO_URL_FOR_BACKEND}/response`;
        axios.post(URL, message)
            .then(response => {
                setLoading(false);
                toast(response.data.message);
            })
            .catch(err => {
                setLoading(false);
                toast("Email Send Failed")
                console.log(err);
            })
    }

    return (
        <div ref={contacts} className='w-screen h-auto sm:h-screen sm:w-screen bg-gray-200 flex justify-center items-center'>
            <div className='flex flex-col sm:flex sm:flex-row gap-4 w-full sm:h-full sm:w-full'>
                <div className='w-full h-screen sm:h-full sm:basis-4/12 flex items-center justify-center'>
                    <div className='space-y-8'>
                        <h1 className='text-7xl text-green-500 font-bold pb-6'>Contacts</h1>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                InputProps={{
                                    style: { width: '420px', height: '50px', borderColor: 'green', borderRadius: "20px", labelColor: 'green', marginBottom: '10px' }
                                }}
                                InputLabelProps={{ style: { color: 'green' } }}
                                className=''
                                id="outlined-basic"
                                label="Name"
                                variant="outlined"
                                type='text'
                                placeholder='Enter Your Name'
                                onChange={(e) => setMessage({ ...message, name: e.target.value })}
                                required
                            /><br></br>
                            <TextField
                                InputProps={{
                                    style: { width: '420px', height: '50px', borderColor: 'green', borderRadius: "20px", labelColor: 'green', marginBottom: '10px' }
                                }}
                                InputLabelProps={{ style: { color: 'green' } }}
                                className=''
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                type='email'
                                placeholder='Enter Your Email Address'
                                onChange={(e) => setMessage({ ...message, email: e.target.value })}
                                required
                            /><br></br>
                            <TextField
                                InputProps={{
                                    style: { width: '420px', borderColor: 'green', borderRadius: "20px", labelColor: 'green', textAlign: 'right', marginBottom: '10px' }
                                }}
                                InputLabelProps={{ style: { color: 'green' } }}
                                multiline
                                rows={6}
                                rowsMax={10}
                                className=''
                                id="outlined-basic"
                                label="Message"
                                variant="outlined"
                                type='text'
                                placeholder='Type Your Message...'
                                onChange={(e) => setMessage({ ...message, message: e.target.value })}
                                required
                            /><br></br>
                            <Button type='submit' variant="contained" color="success" style={{ borderRadius: '20px' }}>
                                Send
                                <AiOutlineSend style={{ marginLeft: '10px', fontSize: '25px' }} />
                            </Button>
                            {loading ? <p className=' text-red-500 mt-1'>Sending...</p> : <ToastContainer />}
                        </form>
                    </div>
                </div>
                <div className='w-full h-screen sm:h-full sm:basis-5/12 flex justify-center items-center'>
                    <div className='space-y-10 pt-36'>
                        <div className='flex items-center'>
                            <img src='Static Assets/email.png' width='50px' height='50px' alt='email'></img>
                            <h3 className=' ml-3 text-2xl'>parthibanb224@gmail.com</h3>
                        </div>
                        <div className='flex items-center'>
                            <img src='Static Assets/phone.png' width='50px' height='50px' alt='phone'></img>
                            <h3 className=' ml-3 text-2xl'>+91 9500501513</h3>
                        </div>
                        <div className='flex items-center'>
                            <img src='Static Assets/location.png' width='50px' height='50px' alt='place'></img>
                            <h3 className=' ml-3 text-2xl'>Seelayampatti,Theni(DT),Tamilnadu</h3>
                        </div>
                        <div className='flex justify-center pt-8'>
                            <a href="https://www.linkedin.com/in/parthibanb224/" target="_blank" rel="noreferrer"><img className='grayscale hover:grayscale-0' src='Static Assets/icons8-linkedin-512.png' width='65px' height='65px' alt='linkedin'></img></a>
                            <a href="https://github.com/parthibanb224" target="_blank" rel="noreferrer"><img className='grayscale hover:grayscale-0' src='Static Assets/icons8-github-512.png' width='65px' height='65px' alt='github'></img></a>
                            <a href="https://twitter.com/parthibanb224" target="_blank" rel="noreferrer"><img className='grayscale hover:grayscale-0' src='Static Assets/icons8-twitter-circled-512.png' width='65px' height='65px' alt='twitter'></img></a>
                            <a href="https://www.youtube.com/channel/UCxJwQg_SDe2XA6jYlofbcCw" target="_blank" rel="noreferrer"><img className='grayscale hover:grayscale-0' src='Static Assets/icons8-youtube-512.png' width='65px' height='65px' alt='youtube'></img></a>
                            <a href="https://www.instagram.com/parthiban__b/" target="_blank" rel="noreferrer"><img className='grayscale hover:grayscale-0' src='Static Assets/icons8-instagram-circle-512.png' width='65px' height='65px' alt='instagram'></img></a>
                        </div>
                    </div>
                </div>
                <div className='hidden sm:block sm:relative sm:w-full sm:h-full sm:basis-3/12'>
                    <img className='absolute bottom-0 right-0' src='https://ajitharunai.netlify.app/static/media/contactsGreen.808a7bb5da2c3cc90faa6cc86e5e2a44.svg' alt='contact-img'></img>
                </div>
            </div>
        </div>
    )
}
