import './App.css';
import React, { useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight  } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Content from './Content.json'
import LandingPage from './sections/landing_page';

function App() {
  
  const scrollWrapperRef = useRef(null);

  const scroll = (direction) => {
    if (scrollWrapperRef.current) {
      const scrollAmount = 270; // Adjust this value as needed
      if (direction === "left") {
        scrollWrapperRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else if (direction === "right") {
        scrollWrapperRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const data = Content.CompanyFeatures
  const [activeIndex, setActiveIndex] = useState(0);

  const handleRightClick = () => {
    setActiveIndex((prev) => (prev + 1) % data.length); // Cycle to the next card
  };

  const handleLeftClick = () => {
    setActiveIndex((prev) => (prev - 1 + data.length) % data.length); // Cycle to the previous card
  };

  return (
    <>

      <div className='w-4/5 lg:w-full xs:w-fit max-w-[2024px] m-auto grid grid-cols-1 gap-20 place-content-center place-items-center'>

        <LandingPage />

        {/** CONTINUESNESS LINE */}
        <div className='w-5/6 lg:p-20 xs:p-10 -mb-40 relative border border-b-0 rounded-[61px] border-green-3'>

          {/** GET TO KNOW SECTION */}
          <div className='relative flex flex-col gap-10 justify-center items-center'>
            {/** TITTLE SECTION */}
            <div className='lg:w-1/2 xs:full flex flex-col gap-2 justify-center items-center text-center'>
              <h6 className='lg:text-[16px] xs:text-[10px] font-bold text-green-2'>We aiming the world with dignity and deligincy. Theres no such thing that could break aour spirit in terms of developing our client desire</h6>
              <h2 className='lg:text-[32px] xs:text-[20px] font-bold'>Get to know to our beloved</h2>
              <div className='lg:w-1/3 xs:w-full py-2 px-4 text-[16px] font-black text-white rounded-[14px] bg-green-3'>Vision and Mission</div>
            </div>
            {/** VISION MISSION DIV SENTION */}
            <div className='lg:w-3/4 xs:w-full p-10 flex flex-col gap-5 rounded-[17px] bg-radial-gray'>
              <div className='flex lg:flex-row xs:flex-col lg:gap-14 xs:gap-5 lg:text-[13px] xs:text-[10px] font-bold text-justify leading-loose'>
                <p>To create a sustainable and equitable future for underdeveloped areas, ARAKIA is committed to creating opportunities for the community through education, technology, and public health. </p>
                <p>To create a sustainable and equitable future for underdeveloped areas, ARAKIA is committed to creating opportunities for the community through education, technology, and public health. </p>
              </div>
              <button className='w-full py-2 text-[24px] font-bold rounded-[15px] bg-green-3 text-gray-300'>Our Works</button>
            </div>
            {/** BG SHADOW */}
            <div className='w-2/4 h-10 p-2 absolute bottom-0 -z-10 box-shadow-1'></div>
          </div>  
        
        </div>      

        {/** GREEN BG SECTION */}
        <div className='w-full -mt-16 pb-10 pt-32 flex flex-col justify-center items-center bg-green-3'>
          
          {/** FEATURES SECTION */}
          <div className='lg:w-4/6 xs:w-10/12 lg:grid lg:grid-cols-2 xs:flex xs:flex-col xs:items-center lg:gap-36 xs:gap-14'>
            {/** left section */}
            <div className='w-full flex flex-col lg:gap-0 xs:gap-2 justify-evenly lg:text-left xs:text-center text-white-2'>
              <div>
                <p className='text-[20px] font-normal'>Our Great Features</p>
                <h1 className='text-[44px] font-black leading-tight'>Brave new world of Agricultural</h1>
              </div>              
              <p className='text-[20px] font-normal text-justify'>To create a sustainable and equitable future for underdeveloped areas, ARAKIA is committed to creating opportunities for the community through education, technology,</p>
            </div>
            {/** right section */}
            <div className='w-full h-80'>
            {Content.CompanyFeatures.map((item, index) =>  {

                const offset = index - activeIndex;
                const scale = 1 - Math.min(Math.abs(offset) * 0.1, 0.5); // Decrease scale for non-active cards
                const zIndex = data.length - Math.abs(offset); // Ensure the active card stays on top         
                
                return (
                <div key={index} 
                className={`w-[20rem] h-80 py-5 px-10 absolute flex flex-col justify-between gap-5 rounded-[21px] box-shadow-2 transition-all duration-500 ease-in-out bg-green-4`}
                style={{
                  transform: `translateX(${offset * -40}px) scale(${scale})`,
                  zIndex: zIndex,
                  opacity: scale, // Reduce opacity slightly for non-active cards
                }}>
                  <div className=''>
                    <p className='text-[14px] font-normal'>Features</p>
                    <h1 className='text-[28px] font-black'>{item.title}</h1>
                  </div>                  
                  <div className='place-content-center'><p className='text-[14px] font-normal text-justify'>{item.desc}</p></div>
                  <div className='flex gap-3'>
                    <button className='p-2 rounded-full text-white bg-green-3' onClick={handleRightClick}><HiChevronLeft className='size-6' /></button>
                    <button className='p-2 rounded-full text-white bg-green-3' onClick={handleLeftClick}><HiChevronRight className='size-6' /></button>
                  </div>
                </div>      
              
              )})}
              </div>

          </div>

        </div>     

        {/** CONTINUESNESS LINE AND BACKGROUND */}     
        <div className='w-11/12 lg:p-20 xs:p-5 relative flex flex-col gap-20 justify-center items-center overflow-hidden border rounded-[55px] border-green-3'>
          
          {/** ORNAMENT 1 */}
          <div className='p-32 absolute -z-10 -top-20 -left-20 border-[20px] border-white rounded-full bg-green-1'></div>
          <div className='p-20 absolute -z-20 top-40 -left-20 rounded-full bg-green-1'></div>

          {/** CLIENTS SECTIOON */}
          <div className=' flex flex-col justify-center items-center'>
            <div className='lg:w-2/3 xs:w-full lg:px-20 xs:px-5 text-center'>
              <h1 className='lg:text-[36px] xs:text-[20px] font-black'>Our Best Clients that Use Our Services</h1>
              <p className='text-[20px] font-normal text-green-3'>We've done many colaboration through all the barrier that we've face before. here some of our client that we've helped in the past</p>
            </div>
            <div className='w-full mt-10 flex justify-center items-center'>
              <HiChevronLeft className='size-10 cursor-pointer hover:scale-125 duration-300' onClick={() => scroll("left")}/>
              <div className='client-scroll-wrapper' ref={scrollWrapperRef}>              
                {[...Array(6)].map((_, index) => (
                  <div className="lg:basis-[22%] xs:basis-[42%] py-5 flex justify-center items-center flex-shrink-0 border rounded-[20px] border-green-3 box-shadow-3 " key={index}>
                    <img
                      className="h-16 w-16 rounded-[39px]"
                      src={`${process.env.PUBLIC_URL}/images/notion.png`}
                      alt="Notion logo"
                    />
                  </div>
                ))}                
              </div>
              <HiChevronRight className='size-10 cursor-pointer hover:scale-125 duration-300' onClick={() => scroll("right")} />
            </div>
          
          </div>          

          {/** HOW IT WORKS SECTION */}
          <div className='w-11/12 relative flex flex-col gap-10'>
            {/** Top title */}
            <div className='w-full px-20 text-center'>
              <p className='lg:text-[24px] xs:text-[14px] font-semibold text-green-2'>learn how you work with our features</p>
              <h2 className='lg:text-[40px] xs:text-[20px] font-black'>HOW IT WORKS</h2>
            </div>
            {/** card section */}
            <div className='w-full flex lg:flex-row xs:flex-col gap-12'>
              <div className='lg:w-1/2 xs:w-full p-10 relative rounded-[46px] box-shadow-4 bg-white'>
                <div className='p-20 text-white rounded-[23px] bg-green-3 text-center'>Pict</div>
                <h1 className='mt-5 text-[32px] font-black'>Step Here</h1>
                <p className='text-[16px] font-normal text-justify leading-tight'>To create a sustainable and equitable future for underdeveloped areas, ARAKIA is committed to creating opportunities for the community through education, technology,. mr robot mus be one of the best series i have ever watched</p>
                <h1 className='absolute bottom-0 right-8 text-[96px] font-black text-green-3-half'>#1</h1>
              </div>
              <div className='lg:w-1/2 xs:w-full p-10 relative rounded-[46px] box-shadow-4 bg-white'>
                <div className='p-20 text-white rounded-[23px] bg-green-3 text-center'>Pict</div>
                <h1 className='mt-5 text-[32px] font-black'>Step Here</h1>
                <p className='text-[16px] font-normal text-justify leading-tight'>To create a sustainable and equitable future for underdeveloped areas, ARAKIA is committed to creating opportunities for the community through education, technology,. mr robot mus be one of the best series i have ever watched</p>
                <h1 className='absolute bottom-0 right-8 text-[96px] font-black text-green-3-half'>#2</h1>
              </div>
            </div>
            {/** PAGINATION SECTION */}
            <div className='w-full flex gap-5 items-center justify-center'>
              <div className='py-1 px-10 rounded-full bg-green-3'></div>
              <div className='py-0.5 px-5 rounded-full bg-green-3'></div>
              <div className='py-0.5 px-5 rounded-full bg-green-3'></div>
              <div className='py-0.5 px-5 rounded-full bg-green-3'></div>
            </div>
          </div>

          {/** ORNAMENT 2 */}
          <div className='absolute -z-50 top-1/2 -right-72'>
            <div className='p-44 border-[20px] border-white rounded-full bg-green-1'>
              <div className='p-20 rounded-full border-[20px] border-white bg-green-1'></div>
            </div>            
          </div>

          {/** ORDER NOW SECTION */}
          <div className='py-12 lg:px-24 xs:px-0 flex flex-col gap-10 justify-center items-center text-white rounded-[20px] bg-green-3'>
            <h1 className='w-3/4 text-[24px] font-semibold text-center'>Click the button down below to have affair with us</h1>
            <button className='w-1/2 py-5 px-14 text-[20px] font-black rounded-[9px] text-green-3 bg-green-4'>ORDER NOW</button>
          </div>

          {/** ORNAMENT 3 */}          
          <div className='p-40 absolute z-10 -bottom-64 -left-16 rounded-full bg-green-1'></div>

        </div>

        {/** FOOTER */}
        <div className='w-full p-20 flex flex-col gap-10 justify-center items-center bg-green-4 text-center text-green-3'>
          {/** TOP PART  */}
          <div className='w-5/6 flex lg:flex-row xs:flex-col gap-20 justify-between items-center'>
            <div><img className="object-cover w-80 rounded-[39px]" src={`${process.env.PUBLIC_URL}/images/LOGO_w_1.png`} alt="" /></div>
            <div className='flex flex-col gap-5 justify-end items-end text-green-3'>
              <h1 className='text-[24px] font-bold'>PT. Amanah Cirta Cendika</h1>
              <h4 className='text-[15px] font-bold'>Jl. Kepodang No.20 Sanggrahan, Ngadirojo Kidul, Ngadirojo, Wonogiri</h4>
              <ul className='flex gap-5 text-[12px] font-medium'>
                {[...Array(4)].map((_, index) => (
                    <li className='flex gap-1 justify-center items-center'>
                    <AiOutlineWhatsApp className='size-6' />
                    <p>Social Media</p>
                  </li>
                ))}               
              </ul>
            </div>
          </div>          
          {/** BOTTOM PART */}
          <div className='w-5/6 flex flex-col gap-5 justify-start items-start'>
            <div className='w-full border-b border-green-3'></div>
            <h3 className='text-[20px] font-medium'>2024 @ Copyright ACC</h3>
          </div>
        </div>

      </div>

    </>
  );
}

export default App;
