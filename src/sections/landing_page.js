import Button1 from "../components/buttons"

export default function LandingPage () {
    return (
        <>

        {/** TOP COVER */}
        <div className='mt-10 lg:w-3/4 xs:w-11/12 h-auto relative flex justify-start items-start'>

            {/** CONTENT CONTAINER */}
            <div className='w-full h-full py-5 px-10 flex flex-col justify-between top-0 place-items-center'>
                {/** NAVBAR */}
            <div className='w-full flex justify-between self-start text-[14px] font-semibold text-white'>
                <div className='flex justify-center items-center gap-5'>
                    <img className="object-cover w-6 rounded-[39px]" src={`${process.env.PUBLIC_URL}/images/LOGO-COMPACT.png`} alt="" />
                    <h4>Amanah Citra Cendaka</h4>
                </div>

                <div className='flex gap-10'>
                <button>Home</button>
                <button>About Us</button>
                <button>Our Works</button>
                <button>Contact Us</button>
                <button className='px-4 py-2 rounded-md bg-green-500'>Donate</button>
                </div>
            </div>

            {/** TRY FOR FREE */}
            <div className='lg:w-1/3 xs:w-1/2 h-full mt-20 top-1/2 flex flex-col gap-4 justify-center items-center text-[14px]'>
                <p className='font-bold text-white text-center'>ACC membantu anda dalam pembuatan konstruksi bangunan, pengembangan website dan lain lain</p>
                <button className='w-1/3 py-2 font-black text-black rounded-[9px] bg-gray-200'>Try for free</button>
            </div>

            {/** APPROACH SECTION */}
            <div className='w-full h-full lg:px-20 xs:p-10 mt-24 flex flex-col gap-5 items-center'>
                <h2 className='text-[24px] font-black text-gray-200'>Our Approach</h2>
                <div className='w-full flex lg:gap-14 xs:gap-5 lg:justify-center xs:justify-end'>
                <Button1 />
                <Button1 />                            
                <Button1 />
                </div>
            </div>

            </div>

            {/** BACKGROUND IMAGE */}
            <div className='w-full h-full absolute -z-10 rounded-[39px] bg-cover'></div>
            <img className="object-cover absolute -z-20 h-full w-full rounded-[39px]" src={`${process.env.PUBLIC_URL}/images/bg-field.jpg`} alt="" />

            </div>

        </>
    )
}