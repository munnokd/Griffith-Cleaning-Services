"use client";

import React, { useState } from 'react'
import ovenCleaning from '../assests/oven_cleaning.png'
import glassCleaning from '../assests/glass_cleaning.png'
import generalCleaning from '../assests/general_cleaning.png'
import carpetCleaning from '../assests/carpet_cleaning.png'
import houseCleaning from '../assests/house_cleaning.png'
import officeCleaning from '../assests/office_cleaning.png'
import Image from 'next/image';

const Projects = () => {

    return (
        <div name='services' className='h-[100%] flex flex-col items-center bg-sky-700 mt-40 pb-20'>
            <div className='md:w-[90%] lg:w-[70%] flex flex-col items-center'>
                <h1 className='text-4xl sm:text-5xl font-bold mb-5 mt-[80px] md:mt-[120px] text-white'>Cleaning Services</h1>
                <hr className='border-t-[#8AB951] border-t-[3px] w-[210px] sm:w-[210px] mb-[50px]' />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-dols-4  gap-6 px-5 lg:px-20'>
                <div className='bg-white px-3 py-6 box_shadow cursor-pointer'>
                    <Image src={ovenCleaning} alt="Oven/BBQ Cleaning" className='w-[100%] h-[180px]'/>
                    <p className='font-semibold text-2xl my-2'>Oven / BBQ Cleaning</p>
                    <p className='text-gray-600 mt-2'>Restore your oven to its prime with our expert oven cleaning services. Our team specializes in deep cleaning, eliminating built-up grease and grime to leave your oven spotless and ready for action. Reach out for a free quote and schedule your cleaning today.</p>
                </div>
                <div className='bg-white white px-3 py-6 box_shadow cursor-pointer'>
                    <Image src={glassCleaning} alt="Windows Cleaning" className='w-[100%] h-[180px]'/>
                    <p className='font-semibold text-2xl my-2'>Window Cleaning</p>
                    <p className='text-gray-600 mt-2'>Brighten your space with our expert window cleaning services. We’ll eliminate dirt, streaks, and smudges, leaving your windows crystal clear and gleaming. Reach out today for a free quote and let the sunlight in.</p>
                </div>
                <div className='bg-white white px-3 py-6 box_shadow cursor-pointer'>
                    <Image src={generalCleaning} alt="General Cleaning" className='w-[100%] h-[180px]'/>
                    <p className='font-semibold text-2xl my-2'>General Cleaning</p>
                    <p className='text-gray-600 mt-2'>Keep your home or office pristine with our comprehensive cleaning services. From dusting and vacuuming to laundry and dishes, our experienced team handles it all. Reach out today for a personalized quote and schedule your next cleaning session.</p>
                </div>
                <div className='bg-white white px-3 py-6 box_shadow cursor-pointer'>
                    <Image src={carpetCleaning} alt="Carpet Cleaning" className='w-[100%] h-[180px]'/>
                    <p className='font-semibold text-2xl my-2'>Carpet Cleaning</p>
                    <p className='text-gray-600 mt-2'>Give your carpets a new lease on life with our expert carpet cleaning services. Our team will deep clean and revitalize your carpets, eliminating dirt, stains, and odors for a fresh, like-new look. Reach out to us today for a personalized quote and to schedule your service.</p>
                </div>
                <div className='bg-white white px-3 py-6 box_shadow cursor-pointer'>
                    <Image src={houseCleaning} alt="House Cleaning" className='w-[100%] h-[180px]'/>
                    <p className='font-semibold text-2xl my-2'>House Cleaning</p>
                    <p className='text-gray-600 mt-2'>Enjoy the comfort of returning to a spotless, organized home with our residential cleaning services. From dusting to laundry, our expert team handles every detail, ensuring your space is clean, fresh, and ready for you to relax.</p>
                </div>
                <div className='bg-white white px-3 py-6 box_shadow cursor-pointer'>
                    <Image src={officeCleaning} alt="Office and Commercial Cleaning" className='w-[100%] h-[180px]'/>
                    <p className='font-semibold text-2xl my-2'>Office and Commercial Cleaning</p>
                    <p className='text-gray-600 mt-2'>Transform your business environment with our exceptional commercial cleaning services. Our dedicated team of professionals is here to take care of all your cleaning requirements, from office areas to restrooms. Reach out to us for a personalized quote and to schedule your cleaning service today.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Projects
