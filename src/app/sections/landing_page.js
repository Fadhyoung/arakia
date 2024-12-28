'use client';

import { useRouter } from "next/navigation";

import { Navbar1 } from "../components/navbars";
import Content from "../Content.json";

import { FaCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { GiLindenLeaf } from "react-icons/gi";
import Image from "next/image";


export const LandingPage1 = ({scrollToTarget}) => {

    const router = useRouter();

    return (
        <>

        {/** TOP COVER */}
        <div className='xs:mt-0 lg:w-full xs:w-full lg:h-auto xs:h-screen relative flex justify-start items-start overflow-hidden'>

            {/** CONTENT CONTAINER */}
            <div className='w-full h-full lg:py-5 xs:py-0 lg:px-0 xs:px-0 flex flex-col gap-8 justify-between top-0 items-center'>                
                <Navbar1 />

                {/** DESC CONTENT */}
                <div className='lg:w-2/4 lg:mt-20 xs:mt-0 xs:w-full h-full flex flex-col gap-2 justify-center items-center'>

                    {/** TOP SECTION */}
                    <div className="lg:px-0 xs:px-5 lg:py-0 py-20 relative flex flex-col gap-4 xs:justify-between items-end overflow-hidden">
                        <p className='lg:text-[40px] xs:text-[24px] lg:font-light xs:font-light text-white lg:text-center xs:text-end leading-tight'>Wujudkan Kebutuhan Anda dengan Layanan Kami: </p>
                        {/** FLYING BUTTON */}
                        <div className=" lg:hidden xs:flex lg:text-[16px] xs:text-[12px] lg:gap-10 xs:gap-2">
                        <button className="lg:px-6 lg:py-3 xs:px-3 xs:py-2 font-black text-green-3 rounded-full bg-white" onClick={() => router.push("/konsultan")}>KONSULTAN</button>
                            <button className="lg:px-6 lg:py-3 xs:px-3 xs:py-2 font-black text-green-3 rounded-full bg-green-4">KONTAK</button>
                        </div>

                        <div className="w-full h-full absolute left-0 top-0 lg:hidden xs:block -z-10 bg-cover"></div>
                        <img className="w-full h-full lg:hidden xs:block object-cover absolute left-0 top-0 -z-20" src={"/arakia/images/bg-field.jpg"} alt="landing page background" />
                    </div>

                    {/** BOTTOM SECTION */}
                    <div className="w-full h-full px-6 py-2 flex flex-col gap-3 justify-start items-center lg:bg-transparent xs:bg-white">
                        <h1 className="lg:hidden xs:block font-black text-green-3">Our Approach</h1>
                        <div className="lg:w-auto xs:w-full px-8 py-2 flex lg:flex-row xs:flex-col lg:gap-3 xs:gap-1 lg:items-end xs:items-start rounded-lg lg:border-none xs:border border-green-3 bg-white">
                            <h4 className="text-[16px] font-bold">Bersama Arakia:</h4>
                            <div className="lg:w-auto xs:w-full lg:p-0 xs:p-1 flex gap-1 text-[14px] font-medium xs:rounded-md lg:bg-transparent xs:bg-green-1"><FaCheck size={20} className="text-green-3" /> Kerja Cepat</div>
                            <div className="lg:w-auto xs:w-full lg:p-0 xs:p-1 flex gap-1 text-[14px] font-medium xs:rounded-md lg:bg-transparent xs:bg-green-1"><FaCheck size={20} className="text-green-3" /> Amanah</div>
                            <div className="lg:w-auto xs:w-full lg:p-0 xs:p-1 flex gap-1 text-[14px] font-medium xs:rounded-md lg:bg-transparent xs:bg-green-1"><FaCheck size={20} className="text-green-3" /> Berkelanjutan</div>
                        </div>
                        <div className="lg:w-1/2 xs:w-full px-8 py-2 flex flex-col lg:gap-3 xs:gap-2 items-end rounded-lg border border-green-3 bg-white">                
                            <div className="w-full flex justify-between items-center gap-1 text-[12px] font-medium"><div className="flex gap-3 items-center"><FaRegCircle size={15} className="text-green-3" /> Perizinan Bangunan</div> <button className="p-1 text-green-3 rounded-md bg-green-1">Details</button></div>
                            <div className="w-full flex justify-between items-center gap-1 text-[12px] font-medium"><div className="flex gap-3 items-center"><FaRegCircle size={15} className="text-green-3" /> Kajian Transportasi</div> <button className="p-1 text-green-3 rounded-md bg-green-1">Details</button></div>
                            <div className="w-full flex justify-between items-center gap-1 text-[12px] font-medium"><div className="flex gap-3 items-center"><FaRegCircle size={15} className="text-green-3" /> Persetujuan Gedung</div> <button className="p-1 text-green-3 rounded-md bg-green-1">Details</button></div>
                            <div className="w-full flex justify-between items-center gap-1 text-[12px] font-medium"><div className="flex gap-3 items-center"><FaRegCircle size={15} className="text-green-3" /> Konsultasi Jasa Transportasi</div> <button className="p-1 text-green-3 rounded-md bg-green-1">Details</button></div>
                            <div className="w-full flex justify-between items-center gap-1 text-[12px] font-medium"><div className="flex gap-3 items-center"><FaRegCircle size={15} className="text-green-3" /> Pengembangan Aplikasi</div> <button className="p-1 text-green-3 rounded-md bg-green-1">Details</button></div>
                            <div className="w-full flex justify-between items-center gap-1 text-[12px] font-medium"><div className="flex gap-3 items-center"><FaRegCircle size={15} className="text-green-3" /> Desain Arsitektur</div> <button className="p-1 text-green-3 rounded-md bg-green-1">Details</button></div>
                        </div>
                        <button className="w-full p-2 lg:hidden xs:block rounded-xl text-white bg-green-3" onClick={scrollToTarget}>Scroll Down</button>
                    </div>
                </div>

                {/** FLYING BUTTON */}
                <div className="mt-10 lg:flex xs:hidden gap-10">
                <button className="lg:px-6 lg:py-3 xs:px-3 xs:py-2 font-black text-green-3 rounded-full bg-white" onClick={() => router.push("/konsultan")}>KONSULTAN</button>
                    <button className="px-6 py-3 text-[16px] font-black text-green-3 rounded-full bg-green-4">KONTAK</button>
                </div>

            </div>

            {/** BACKGROUND IMAGE */}
            <div className="w-full h-full absolute lg:block xs:hidden -z-10 bg-cover"></div>            
            <Image className="lg:block xs:hidden object-cover absolute -z-30 " src={"/arakia/images/bg-field.jpg"} layout="fill" alt="landing page background" />         

            </div>

        </>
    );
};

export const LandingPage2 = ({scrollToTarget}) => {

    const router = useRouter();
    
    return (
        <>

        {/** TOP COVER */}
        <div className='xs:mt-0 lg:w-full xs:w-full lg:h-auto xs:h-screen relative flex justify-start items-start overflow-hidden'>

            {/** CONTENT CONTAINER */}
            <div className='w-full h-full lg:py-5 xs:py-0 lg:px-0 xs:px-0 flex flex-col gap-8 justify-between top-0 items-center'>                
                <Navbar1 />

                {/** DESC CONTENT */}
                <div className='lg:w-2/4 lg:mt-20 xs:mt-0 xs:w-full h-full flex flex-col gap-2 justify-center items-center'>

                    {/** TOP SECTION */}
                    <div className="lg:px-0 xs:px-5 lg:py-0 py-20 relative flex flex-col gap-4 xs:justify-between items-end overflow-hidden">
                        <p className='lg:text-[40px] xs:text-[18px] lg:font-light xs:font-light text-white lg:text-center xs:text-end leading-tight'>ACC membantu anda dalam pembuatan Konstruksi bangunan, Pengembangan website dan lain - lain.
                        </p>
                        {/** FLYING BUTTON */}
                        <div className=" lg:hidden xs:flex lg:text-[16px] xs:text-[12px] lg:gap-10 xs:gap-2">
                            <button className="lg:px-6 lg:py-3 xs:px-3 xs:py-2 font-black text-green-3 rounded-full bg-white" onClick={() => router.back()}>BACK</button>
                            <button className="lg:px-6 lg:py-3 xs:px-3 xs:py-2 font-black text-green-3 rounded-full bg-green-4">KONTAK</button>
                        </div>

                        <div className="w-full h-full absolute left-0 top-0 lg:hidden xs:block -z-10 bg-cover"></div>
                        <img className="w-full h-full lg:hidden xs:block object-cover absolute left-0 top-0 -z-20" src={"/arakia/images/bg-field.jpg"} alt="landing page background" />
                    </div>

                    {/** BOTTOM SECTION */}
                    <div className="w-full h-full px-6 py-2 flex flex-col gap-2 justify-start items-center lg:bg-transparent xs:bg-white">
                        <h1 className="lg:hidden xs:block font-black text-green-3">Our Approach</h1>
                        {Content.CompanyFeatures.map((item,index) => (
                            <button key={index} className="px-3 py-1 flex flex-row gap-5 items-center xs:border rounded-md border-green-3">
                                <GiLindenLeaf className="size-10" />
                                {item.icon}
                                <div className="w-3/4 flex flex-col xs:items-start xs:text-start">
                                    <h3 className="xs:text-[12px] font-bold">{item.title}</h3>
                                    <p className="xs:text-[9px] font-normal text-justify">{item.desc}</p>
                                </div>
                            </button>
                        ))

                        }
                        <button className="w-full p-2 lg:hidden xs:block rounded-xl text-white bg-green-3" onClick={scrollToTarget}>Scroll Down</button>
                    </div>
                </div>

                {/** FLYING BUTTON */}
                <div className="mt-10 lg:flex xs:hidden gap-10">
                    <button className="px-6 py-3 text-[16px] font-black text-green-3 rounded-full bg-white" onClick={() => window.open("/konsultan")}>KONSULTAN</button>
                    <button className="px-6 py-3 text-[16px] font-black text-green-3 rounded-full bg-green-4">KONTAK</button>
                </div>

            </div>

            {/** BACKGROUND IMAGE */}
            <div className="w-full h-full absolute lg:block xs:hidden -z-10 bg-cover"></div>            
            <Image className="lg:block xs:hidden object-cover absolute -z-30 " src={"/arakia/images/bg-field.jpg"} layout="fill" alt="landing page background" />         

            </div>

        </>
    );
};

export default LandingPage1;