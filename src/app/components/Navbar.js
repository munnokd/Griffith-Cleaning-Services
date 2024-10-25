"use client";

import Logo from '../assests/main_logo.png'
import { Link } from "react-scroll";
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [navbar, setNavBar] = useState(false)
    const handleClick = () => setNavBar(!navbar);
    const navigation = [
        { name: 'Home', href: 'home', current: false },
        { name: 'About', href: 'about', current: false },
        { name: 'Why Us', href: 'whyus', current: false },
        { name: 'Services', href: 'services', current: false },
        { name: 'Contact', href: 'contact', current: false },
    ]

    return (
        <div className="bg-white fixed w-[100%] z-[100] shadow-bottom">
            <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
                        {!navbar ? <FaBars color='black' /> : <FaTimes color='white' />}
                    </div>
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <Image
                                className="h-8 md:h-12 w-auto lg:block"
                                src={Logo}
                                alt="Griffith Cleaning Service"
                            />
                            <div className=' ml-5 font-bold cursor-pointer text-2xl md:text-3xl text-sky-700'>
                                Griffith Cleaning Services
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                        <div className="hidden md:ml-6 md:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <Link
                                        to={item.href}
                                        key={item.name}
                                        className={classNames(
                                            item.current ? 'bg-sky-700 text-black' : 'text-black hover:bg-sky-700 hover:text-white',
                                            'px-3 py-2 rounded-md text-base font-medium cursor-pointer'
                                        )}
                                        smooth={true} duration={400}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={!navbar ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f]"}>
                <div className="space-y-1 px-2 pt-5 pb-3 flex flex-col justify-center items-center">
                    {navigation.map((item) => (
                        <Link
                            to={item.href}
                            onClick={handleClick}
                            key={item.name}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'px-3 py-4 rounded-md text-sm font-medium'
                            )}
                            smooth={true} duration={400}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
