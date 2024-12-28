"use client"

import { useState, useEffect } from 'react';
import Image from "next/image";

export const Navbar1 = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Change 50 to any scroll threshold
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
    <>
        {/** NAVBAR */}
        <nav className={`w-full lg:mx-0 xs:mx-0 lg:px-20 xs:px-5 py-2 fixed top-0 z-50 flex justify-between self-start lg:text-[14px] xs:text-[12px] font-semibold transition-all duration-300
        ${isScrolled ? 'text-black bg-white shadow-md' : 'text-white bg-transparent'}`}>
            <div className='w-1/3 flex justify-start items-center gap-5'>
                <Image className="object-cover rounded-[39px]" src={"/arakia/images/LOGO-COMPACT.png"} width={24} height={24} alt="" />  
                <div className="flex lg:flex-col xs:flex-row xs:gap-1">
                    <h4>Amanah Citra </h4>
                    <h4>Cendaka</h4>
                </div>
            </div>

            <div className='w-1/3 px-10 py-2 lg:flex xs:hidden gap-10 text-green-3 rounded-full bg-green-4'>
                <button>Home</button>
                <button>About Us</button>
                <button>Our Works</button>
                <button>Our Partners</button>                
            </div>
            <div className="w-1/3 flex items-center justify-end"><button className={`px-4 py-2 rounded-md ${isScrolled ? ' text-white bg-green-3' : 'text-green-3 bg-white'}`}>Tree</button></div>
            
        </nav>
    </>
    )
}