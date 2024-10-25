"use client";

import React from 'react'
import { FaAward } from "react-icons/fa6";
import { MdOutlineHandshake } from "react-icons/md";
import { GiEyeShield } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
    return (
        <div name='whyus' className='h-auto pt-40 flex flex-col items-center justify-center px-4'>
            <div className='md:w-[90%] lg:w-[70%] flex flex-col lg:flex-row items-center justify-center'>
                <div className='flex flex-col lg:w-[40%] text-center lg:text-left'>
                    <h1 className='text-4xl text-sky-700 sm:text-5xl font-bold mb-5 mt-[20px] md:mt-[20px]'>Why Us</h1>
                    <hr className='border-t-[#8AB951] border-t-[3px] w-[130px] sm:w-[170px] mb-[50px] mx-auto lg:mx-0' />
                    <p className='text-xl mb-5 leading-relaxed'>
                        At Griffith Cleaning Services, we pride ourselves on our core values of reliability, integrity, and honesty. We deliver bespoke and premium cleaning solutions tailored to meet the unique needs of businesses of all sizes, from small enterprises to large corporations. Experience the difference of a cleaning partner you can trust to keep your workspace immaculate and welcoming.
                    </p>
                </div>

                <div className='lg:w-[60%] flex flex-wrap justify-center lg:justify-start md:gap-6 gap-3 mt-10 lg:mt-0 md:ml-10 ml-0'>
                    <div className='w-[90%] md:w-[45%] h-[230px] flex flex-col justify-center items-center bg-sky-700 p-6 rounded-lg'>
                        <FaAward className='text-white text-5xl mb-4' />
                        <hr className='border-t-white border-t-[3px] w-full mb-2' />
                        <p className='text-white text-lg font-semibold'>Experts</p>
                        <hr className='border-t-white border-t-[3px] w-full mt-2' />
                    </div>

                    <div className=' w-[90%] md:w-[45%] h-[230px] flex flex-col justify-center items-center bg-sky-700 p-6 rounded-lg'>
                        <MdOutlineHandshake className='text-white text-5xl mb-4' />
                        <hr className='border-t-white border-t-[3px] w-full mb-2' />
                        <p className='text-white text-lg font-semibold'>Reliable Services</p>
                        <hr className='border-t-white border-t-[3px] w-full mt-2' />
                    </div>

                    <div className=' w-[90%] md:w-[45%] h-[230px] flex flex-col justify-center items-center bg-sky-700 p-6 rounded-lg'>
                        <GiEyeShield className='text-white text-5xl mb-4' />
                        <hr className='border-t-white border-t-[3px] w-full mb-2' />
                        <p className='text-white text-lg font-semibold'>Honesty</p>
                        <hr className='border-t-white border-t-[3px] w-full mt-2' />
                    </div>

                    <div className=' w-[90%] md:w-[45%] h-[230px] flex flex-col justify-center items-center bg-sky-700 p-6 rounded-lg'>
                        <FaCalendarAlt className='text-white text-5xl mb-4' />
                        <hr className='border-t-white border-t-[3px] w-full mb-2' />
                        <p className='text-white text-lg font-semibold'>Service on Time</p>
                        <hr className='border-t-white border-t-[3px] w-full mt-2' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Experience
