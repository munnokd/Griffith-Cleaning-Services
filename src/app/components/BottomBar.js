"use client";

import React from 'react'
import bg from '../assests/main_logo.png'
import Image from 'next/image';

const BottomBar = () => {
    return (
        <div className='bg-black p-[20px] sm:p-[40px] w-[100%] flex items-center justify-between lg:px-[250px] '>
                <Image src={bg} alt="bg" className='min-w-[35px] min-h-[35px] w-[75px] h-[75px] rounded-sm' />
                <h1 className='font-[600] mx-5 text-white'> All rights reserved © Griffith Cleaning Service | {new Date().getFullYear()}</h1>
        </div>
    )
}

export default BottomBar
