import Image from "next/image";

export const Navbar1 = () => {
    return (
    <>
        {/** NAVBAR */}
        <div className='w-full lg:m-0 xs:m-2 lg:px-20 xs:px-5 fixed z-50 flex justify-between self-start lg:text-[14px] xs:text-[12px] font-semibold text-white'>
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
            <div className="w-1/3 flex items-center justify-end"><button className=' px-4 py-2 rounded-md text-green-3 bg-white'>Tree</button></div>
            
        </div>
    </>
    )
}