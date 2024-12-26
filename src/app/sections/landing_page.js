import Button1 from "../components/buttons";

import Content from "../Content.json";

import { FaCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import Image from "next/image";

export const LandingPage1 = () => {
    return (
        <>

        {/** TOP COVER */}
        <div className='xs:mt-0 lg:w-full xs:w-full h-auto relative flex justify-start items-start overflow-hidden'>

            {/** CONTENT CONTAINER */}
            <div className='w-full h-full py-10 lg:px-10 xs:px-2 flex flex-col gap-8 justify-between top-0 place-items-center'>
                {/** NAVBAR */}
            <div className='w-full flex  justify-between self-start text-[14px] font-semibold text-white'>
                <div className='w-1/3 flex justify-start items-center gap-5'>
                    <Image className="object-cover rounded-[39px]" src={"/arakia/images/LOGO-COMPACT.png"} width={24} height={24} alt="" />  
                    <div className="flex flex-col">
                        <h4>Amanah Citra</h4>
                        <h4>Cendaka</h4>
                    </div>
                </div>

                <div className='w-1/3 px-10 py-2 lg:flex xs:hidden gap-10 text-green-3 rounded-full bg-green-4'>
                    <button>Home</button>
                    <button>About Us</button>
                    <button>Our Works</button>
                    <button>Our Partners</button>                
                </div>
                <div className="w-1/3 flex items-center justify-end"><button className=' px-4 py-2 rounded-md text-green-3 bg-white'>Tree</button></div>
                
            </div>

            {/** TRY FOR FREE */}
            <div className='lg:w-2/4 xs:w-3/4 h-full  top-1/2 flex flex-col gap-2 justify-center items-center text-[14px]'>
                <p className='text-[40px] font-light text-white text-center leading-tight'>Wujudkan Kebutuhan Anda dengan Layanan Kami: </p>
                <div className="px-5 py-2 flex gap-3 items-end rounded-md bg-white">
                    <h4 className="text-[16px] font-bold">Bersama Arakia:</h4>
                    <div className="flex gap-1 text-[14px] font-medium"><FaCheck size={20} className="text-green-3" /> Kerja Cepat</div>
                    <div className="flex gap-1 text-[14px] font-medium"><FaCheck size={20} className="text-green-3" /> Amanah</div>
                    <div className="flex gap-1 text-[14px] font-medium"><FaCheck size={20} className="text-green-3" /> Berkelanjutan</div>
                </div>
                <div className="w-1/2 px-5 py-3 flex flex-col gap-3 items-end rounded-md border border-green-3 bg-white">                
                    <div className="w-full flex justify-between items-center gap-1 text-[12px] font-medium"><div className="flex gap-3 items-center"><FaRegCircle size={15} className="text-green-3" /> Perizinan Bangunan</div> <button className="p-1 text-green-3 rounded-md bg-green-1">Details</button></div>
                    <div className="w-full flex justify-between items-center gap-1 text-[12px] font-medium"><div className="flex gap-3 items-center"><FaRegCircle size={15} className="text-green-3" /> Kajian Transportasi</div> <button className="p-1 text-green-3 rounded-md bg-green-1">Details</button></div>
                    <div className="w-full flex justify-between items-center gap-1 text-[12px] font-medium"><div className="flex gap-3 items-center"><FaRegCircle size={15} className="text-green-3" /> Persetujuan Gedung</div> <button className="p-1 text-green-3 rounded-md bg-green-1">Details</button></div>
                    <div className="w-full flex justify-between items-center gap-1 text-[12px] font-medium"><div className="flex gap-3 items-center"><FaRegCircle size={15} className="text-green-3" /> Konsultasi Jasa Transportasi</div> <button className="p-1 text-green-3 rounded-md bg-green-1">Details</button></div>
                    <div className="w-full flex justify-between items-center gap-1 text-[12px] font-medium"><div className="flex gap-3 items-center"><FaRegCircle size={15} className="text-green-3" /> Pengembangan Aplikasi</div> <button className="p-1 text-green-3 rounded-md bg-green-1">Details</button></div>
                    <div className="w-full flex justify-between items-center gap-1 text-[12px] font-medium"><div className="flex gap-3 items-center"><FaRegCircle size={15} className="text-green-3" /> Desain Arsitektur</div> <button className="p-1 text-green-3 rounded-md bg-green-1">Details</button></div>
                </div>
            </div>

            <div className="mt-10 flex gap-10">
                <button className="px-6 py-3 text-[16px] font-black text-green-3 rounded-full bg-white" onClick={() => window.open("/konsultan")}>KONSULTAN</button>
                <button className="px-6 py-3 text-[16px] font-black text-green-3 rounded-full bg-green-4">KONTAK</button>
            </div>

            </div>

            {/** BACKGROUND IMAGE */}
            <div className="w-full h-full absolute -z-10 bg-cover"></div>
            <Image className="object-cover absolute -z-20" src={"/arakia/images/bg-field.jpg"} layout="fill" alt="landing page background" />

            </div>

        </>
    );
};

export const LandingPage2 = () => {
    return (
        <>

        {/** TOP COVER */}
        <div className='xs:mt-0 lg:w-full xs:w-full h-auto relative flex justify-start items-start overflow-hidden'>

            {/** CONTENT CONTAINER */}
            <div className='w-full h-full py-5 lg:px-10 xs:px-2 flex flex-col justify-between top-0 place-items-center'>
                {/** NAVBAR */}
            <div className='w-full flex  justify-between self-start text-[14px] font-semibold text-white'>
                <div className='flex justify-center items-center gap-5'>
                    <Image className="object-cover rounded-[39px]" src={"/arakia/images/LOGO-COMPACT.png"} width={24} height={24} alt="" />  
                    <h4>Amanah Citra Cendaka</h4>
                </div>

                <div className='lg:flex xs:hidden gap-10'>
                <button>Home</button>
                <button>About Us</button>
                <button>Our Works</button>
                <button>Contact Us</button>
                <button className='px-4 py-2 rounded-md bg-green-500'>Donate</button>
                </div>
            </div>

            {/** TRY FOR FREE */}
            <div className='lg:w-1/3 xs:w-3/4 h-full mt-16 top-1/2 flex flex-col gap-4 justify-center items-center text-[14px]'>
                <p className='font-bold text-white text-center'>ACC membantu anda dalam pembuatan konstruksi bangunan, pengembangan website dan lain lain</p>
                <button className='lg:w-1/3 xs:w-full py-2 font-black text-black rounded-[9px] bg-gray-200'>Try for free</button>
            </div>

            {/** APPROACH SECTION */}
            <div className='w-full h-full lg:px-20 xs:px-0 mt-20 flex flex-col gap-5 items-center'>
                <h2 className='text-[24px] font-black text-gray-200'>Misi Kami</h2>
                <div className='w-full grid lg:grid-cols-4 xs:grid-cols-2 lg:gap-5 xs:gap-2'>
                
                {Content.Mission.map((item, index) => (
                    <Button1 title={item.title} desc={item.desc} key={index} />
                ))

                }
                </div>
            </div>

            </div>

            {/** BACKGROUND IMAGE */}
            <div className="w-full h-full absolute -z-10 bg-cover"></div>
            <Image className="object-cover absolute -z-20" src={"/arakia/images/bg-field.jpg"} layout="fill" alt="landing page background" />
            </div>

        </>
    );
};

export default LandingPage1;