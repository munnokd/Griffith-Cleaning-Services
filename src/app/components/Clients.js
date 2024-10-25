"use client";

import React from 'react'
import almondco from '../assests/almondco.png'
import olam from '../assests/olam.png'
import harvey from '../assests/harvey_fresh.png'
import elders from '../assests/elders.png'
import Image from 'next/image';

const Clients = () => {
    return (
        <div name='whyus' className='h-auto pt-20 flex flex-col items-center justify-center px-4 mb-20'>
            <div className=' w-[90%] flex flex-col items-center justify-center'>
                <div className='flex flex-col  text-center items-center lg:text-left'>
                    <h1 className='text-4xl text-sky-700 sm:text-5xl font-bold mb-5 mt-[20px] md:mt-[20px]'>Our Clients</h1>
                    <hr className='border-t-[#8AB951] border-t-[3px] w-[130px] sm:w-[210px] mb-[50px] mx-auto lg:mx-0' />
                </div>
                <div className='flex flex-col md:flex-row'>
                    <Image src={olam} alt="olam" className='w-[auto] h-[70px] mx-5 my-5' />
                    <Image src={almondco} alt="almondco" className='w-[auto] h-[70px] mx-5 my-5' />
                    <Image src={harvey} alt="harvey" className='w-[auto] h-[70px] mx-5 my-5' />
                    <Image src={elders} alt="elders" className='w-[auto] h-[70px] mx-5 my-5' />
                </div>
            </div>
        </div>
    )
}

export default Clients
