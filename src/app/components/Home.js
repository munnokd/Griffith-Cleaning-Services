"use client";
import React from 'react'
import Slide from 'react-reveal/Flip';
import { FaArrowDown } from "react-icons/fa6";


const Home = () => {
    return (
        <div name='home' className={`h-[100%] px-4 w-[100%] lg:h-screen items-center flex justify-center`} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('/bg_home.png')`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", }}>
            <div className='flex w-[100%] items-center flex-col lg:flex-row justify-center mt-[130px] md:mt-[180px] mb-[80px]'>
                <div className='flex items-center justify-center '>
                    <Slide top>
                        <div className='flex flex-col items-center justify-center '>
                            <h1 className='text-[25px] text-white lg:text-5xl font-bold mb-5 '>Griffith Cleaning Services</h1>
                            <h2 className='text-2xl mt-3 md:text-3xl font-[600] text-white '>Commercial cleaning at your doorstep</h2>
                            <FaArrowDown
                                className="mt-8 text-white text-4xl animate-bounce hover: hover:scale-125 transition-all duration-300"
                            />
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    )
}

export default Home
