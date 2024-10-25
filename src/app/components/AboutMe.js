"use client";

import React from 'react'
import aboutUs from '../assests/aboutus.jpeg'
import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaHouseChimney } from "react-icons/fa6";
import Image from 'next/image';

const AboutMe = () => {
    return (
        <div name='about' className='pt-20 md:h-[750px] h-[100%] flex flex-col items-center justify-start md:p-10 p-5 bg-sky-700 '>
            <div className='w-[100%] flex flex-col items-center justify-center '>
                {/* <h1 className='text-4xl text-sky-700 sm:text-5xl font-bold mb-3 divide-y mt-[80px] md:mt-[120px]'>About Us</h1>
                <hr className='border-t-[#8AB951] border-t-[3px] w-[120px] sm:w-[150px] mb-[50px]' /> */}
                <div className='md:w-[80%] w-[100%] m-0 md:p-10 p-2 flex flex-col md:flex-row items-center justify-center md:items-start'>
                    <Image src={aboutUs} alt="aboutUs" className='w-full md:w-[35%] h-[350px] rounded-[2px] md:mr-10 mb-4 md:mb-0' />
                    <div className="text-content md:w-[65%] ">
                        <p className='md:text-5xl text-3xl text-white mb-5'>
                            Professional Cleaning Services providers
                        </p>
                        <p className='text-l mb-10 mt-5 leading-relaxed text-white'>
                            For over 60 years, we’ve been delivering top-tier cleaning services for homes, offices, and commercial spaces. Whether it’s deep cleaning, commercial maintenance, window cleaning, our experienced team uses the latest techniques to ensure spotless results every time. Trust us to handle the cleaning, so you can enjoy a fresh, immaculate space without the hassle.</p>
                        <div className='flex item-start mb-10'>
                            <HiBuildingOffice2 className='text-white mr-5 text-[90px]' />
                            <div className=''>
                                <p className='text-white md:text-3xl text-2xl'>Commercial</p>
                                <p className='text-white mt-4'>Elevate your workspace with our professional commercial cleaning services. We ensure your business is spotless, sanitized, and ready for success every day.</p>
                            </div>
                        </div>
                        <div className='flex item-center'>
                            <FaHouseChimney className='text-white mr-5 text-[90px]' />
                            <div className=''>
                                <p className='text-white md:text-3xl text-2xl'>Residential</p>
                                <p className='text-white mt-4'>Transform your home or apartment with our thorough residential cleaning services. Let us handle every detail, leaving your space spotless, refreshed, and sparkling clean.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutMe
