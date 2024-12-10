import Button1 from "../components/buttons"

import Content from "../Content.json"

export default function LandingPage () {
    return (
        <>

        {/** TOP COVER */}
        <div className='lg:mt-10 xs:mt-0 lg:w-3/4 xs:w-full h-auto relative flex justify-start items-start overflow-hidden'>

            {/** CONTENT CONTAINER */}
            <div className='w-full h-full py-5 lg:px-10 xs:px-2 flex flex-col justify-between top-0 place-items-center'>
                {/** NAVBAR */}
            <div className='w-full flex  justify-between self-start text-[14px] font-semibold text-white'>
                <div className='flex justify-center items-center gap-5'>
                    <img className="object-cover w-6 rounded-[39px]" src={`${process.env.PUBLIC_URL}/images/LOGO-COMPACT.png`} alt="" />
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
            <div className='w-full h-full absolute -z-10 lg:rounded-[39px] xs:rounded-none bg-cover'></div>
            <img className="object-cover absolute -z-20 h-full w-full lg:rounded-[39px] xs:rounded-none" src={`${process.env.PUBLIC_URL}/images/bg-field.jpg`} alt="" />

            </div>

        </>
    )
}