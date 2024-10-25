"use client";

import emailjs from '@emailjs/browser'
import React, { useRef,useState } from 'react'
import { useSnackbar } from 'react-simple-snackbar'
import Insta from '../assests/insta.png'
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Image from 'next/image';

const Contacts = () => {
    const form = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const successStyle = {
        position: 'top-right',
        style: {
            background: '#00cc00',
            padding: '10px',
            margin: '0px 20px',
            marginTop: '70px',
            color: 'white',
            fontSize: '20px',
            zIndex: '999',
            textAlign: 'center',
        },
        closeStyle: {
            color: 'white',
            fontSize: '16px',
        },
    }
    const errorStyle = {
        position: 'top-right',
        style: {
            background: '#ff0000',
            padding: '10px',
            margin: '0px 20px',
            marginTop: '70px',
            color: 'white',
            fontSize: '20px',
            zIndex: '999',
            textAlign: 'center',
        },
        closeStyle: {
            color: 'white',
            fontSize: '16px',
        },
    }

    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [successSnackbar] = useSnackbar(successStyle)
    const [errorSnackbar] = useSnackbar(errorStyle)

    const sendEmail = (e) => {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_fsdsyub', 'template_tmvzzhc', form.current, 'ILRKR2_pDVIHtm7U4')
            .then((result) => {
                setName("")
                setEmail("")
                setSubject("")
                setMessage("")
                successSnackbar('Email sent successfully.')
            }, (error) => {
                console.log(error.text);
                errorSnackbar('Could\'t send Email! \nPlease try again.')
            });
    }

    return (
        <div name='contact' className='h-[100%] flex md:flex-row flex-col items-center pb-0 bg-white mt-10'>
            <div className='md:w-[50%] w-[100%] flex flex-col items-center justify-start'>
                <h1 className='text-4xl sm:text-5xl font-bold mb-3 mt-[80px] md:mt-[120px] text-sky-700'>Contact Us</h1>
                <hr className='border-t-[#8AB951] border-t-[3px] w-[170px] sm:w-[200px] mb-[50px]' />
                <div className='flex flex-col'>
                    <div className='flex flex-col justify-center'>
                        <div className='flex flex-col mb-4'>
                            <div className='flex items-center font-bold text-2xl mb-1'>
                                <FaPhoneVolume className='text-sky-700' />
                                <p className='text-sky-700 ml-4'>Phone Number</p>
                            </div>
                            <a className='text-gray-500' href="tel:123-456-7890">04</a>
                        </div>
                        <div className='flex flex-col mb-4'>
                            <div className='flex items-center font-bold text-2xl mb-1'>
                                <MdOutlineMail className='text-sky-700' />
                                <p className='text-sky-700 ml-4'>Email</p>
                            </div>
                            <p className='text-gray-500'><a href="mailto:admin@griffithcleaningservices.com.au">admin@griffithcleaningservices.com.au</a>
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-6'>
                        <div>
                            <a className='mt-5 sm:mt-0 rounded-[50px] p-[15px] hover:cursor-pointer' href='s' alt="" target='_blank' rel="noreferrer">
                                <Image src={Insta} alt="Insta" className='min-w-[35px] min-h-[35px] w-[35px] h-[35px]' />
                            </a>
                        </div>
                        <div>
                            <a className='mt-5 sm:mt-0 rounded-[50px] p-[15px] hover:cursor-pointer' href='s' alt="" target='_blank' rel="noreferrer">
                                <FaFacebook className='text-[#0862F7] text-[35px] ml-[30px]'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:w-[50%] w-[100%] px-6 md:px-0 flex flex-col items-center bg-sky-700 pb-20'>
                <h1 className='text-4xl sm:text-5xl font-bold mb-3 mt-[80px] md:mt-[120px] text-white'>Get a Free Quote</h1>
                <hr className='border-t-[#8AB951] border-t-[3px] w-[230px] sm:w-[300px] mb-[50px]' />
                <form className="flex flex-col w-[100%] mx-6 md:w-[80%] lg:w-[60%] justify-center items-center box_shadow px-10 py-10" ref={form} onSubmit={sendEmail}>
                    <input type="text" name="from_name" className=" block w-[100%] text-sm text-black bg-transparent border-2 border-b-2 border-[#178bff] appearance-none placeholder-gray-800 focus:outline-none focus:ring-0 focus:border-[#178bff] peer px-3 py-3 rounded-[3px] my-4" onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter Your Name" required />
                    <input type="text" name="from_email" className="block w-[100%] text-sm text-black bg-transparent border-2 border-b-2 border-[#178bff] appearance-none placeholder-gray-800 focus:outline-none focus:ring-0 focus:border-[#178bff] peer px-3 py-3 rounded-[3px] my-4" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter Your Email" required />
                    <input type="text" name="subject" className="block w-[100%] text-sm text-black bg-transparent border-2 border-b-2 border-[#178bff] appearance-none placeholder-gray-800 focus:outline-none focus:ring-0 focus:border-[#178bff] peer px-3 py-3 rounded-[3px] my-4" onChange={(e) => setSubject(e.target.value)} value={subject} placeholder="Enter Subject" required />
                    <textarea name="message" placeholder='Enter message ' className="block w-[100%] text-sm text-black bg-transparent border-2 border-b-2 border-[#178bff] appearance-none placeholder-gray-800 focus:outline-none focus:ring-0 focus:border-[#178bff] peer px-3 py-3 rounded-[3px] my-4" onChange={(e) => setMessage(e.target.value)} value={message} required />
                    <input type="submit" value="Send" className='cursor-pointer box_shadow w-[100%] font-bold text-sky-700 my-5' />
                </form>
            </div>
        </div>
    )
}
export default Contacts
