"use client"

import React, { useRef, useState } from "react";
import Image from "next/image";

import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight  } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Content from "./Content.json";
import LandingPage1 from "./sections/landing_page";

export default function Home() {

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

  const data = Content.CompanyFeatures;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleLeftClick = () => {
    setActiveIndex((prev) => (prev + 1) % data.length); // Cycle to the next card
  };

  const handleRightClick = () => {
    setActiveIndex((prev) => (prev - 1 + data.length) % data.length); // Cycle to the previous card
  };

  return (
    <>
  
      <div className='w-4/5 lg:w-full xs:w-fit max-w-[2024px] m-auto grid grid-cols-1 gap-20 place-content-center place-items-center'>

        <LandingPage1 />

        {/** CONTINUESNESS LINE */}
        <div className='w-5/6 lg:p-20 xs:p-10 -mb-40 relative border border-b-0 rounded-[61px] border-green-3'>

          {/** GET TO KNOW SECTION */}
          <div className='relative flex flex-col gap-10 justify-center items-center'>
            {/** TITTLE SECTION */}
            <div className='lg:w-1/2 xs:full flex flex-col gap-2 justify-center items-center text-center'>
              <h6 className='lg:text-[14px] xs:text-[10px] font-bold text-green-3'>Kami membidik dunia dengan martabat dan ketekunan. Tidak ada hal yang dapat mematahkan semangat kami dalam hal mengembangkan keinginan klien kami.</h6>
              <h2 className='lg:text-[32px] xs:text-[20px] font-bold'>Kenali Misi Kami</h2>            
            </div>
            {/** VISION MISSION DIV SENTION */}
            <div className='lg:w-3/4 xs:w-full p-10 flex flex-col gap-5 rounded-[17px] bg-radial-gray'>
              <div className='flex lg:flex-row xs:flex-col lg:gap-14 xs:gap-5 lg:text-[13px] xs:text-[10px] font-bold text-justify leading-loose'>
                <p>Menjadi perusahaan multidisiplin yang unggul dalam memberikan solusi inovatif, berkelanjutan, dan terpercaya di bidang konsultansi, telekomunikasi, agribisnis, jasa konstruksi, dan perdagangan bebas untuk mendukung pembangunan yang inklusif dan berdaya saing tinggi.</p>                
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
            <div className='w-full flex flex-col lg:gap-10 xs:gap-2 justify-evenly lg:text-left xs:text-center text-white-2'>
              <div>
                <p className='text-[20px] font-normal'>Misi</p>
                <h1 className='text-[38px] font-black leading-tight'>Kenali bagaimana kami mewujudkan misi kami</h1>
              </div>              
              <p className='text-[16px] font-normal text-justify'>Mewujudkan tujuan yang besar memerlukan serangkaian strategi dan disiplin yang kuat. Arakia berkomitmen menjaga nilai-nilai berikut untuk mencapai tujuan itu.</p>
            </div>
            {/** right section */}
            <div className='w-full h-80'>
            {Content.CompanyFeatures.map((item, index) =>  {

                const offset = index - activeIndex;
                const scale = 1 - Math.min(Math.abs(offset) * 0.1, 0.5); // Decrease scale for non-active cards
                const zIndex = data.length - Math.abs(offset); // Ensure the active card stays on top         
                
                return (
                <div key={index} 
                className={"w-[20rem] h-80 py-5 px-10 absolute flex flex-col justify-between gap-5 rounded-[21px] box-shadow-2 transition-all duration-500 ease-in-out bg-green-4"}
                style={{
                  transform: `translateX(${offset * 40}px) scale(${scale})`,
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
              
              );})}
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
            <div className='lg:w-11/12 xs:w-full lg:px-20 xs:px-5 text-center'>
              <h1 className='lg:text-[36px] xs:text-[20px] font-black'>Klien Terbaik Kami yang Menggunakan Layanan Kami</h1>
              <p className='text-[20px] font-normal text-green-3'>Kami telah melakukan banyak kolaborasi melalui semua hambatan yang kami hadapi sebelumnya. Berikut beberapa klien kami yang telah kami bantu di masa lalu</p>
            </div>
            <div className='w-full mt-5 flex justify-center items-center'>
              <HiChevronLeft className='size-10 cursor-pointer hover:scale-125 duration-300' onClick={() => scroll("left")}/>
              <div className='client-scroll-wrapper' ref={scrollWrapperRef}>              
                {[...Array(6)].map((_, index) => (
                  <div className="lg:basis-[22%] xs:basis-[42%] py-5 flex justify-center items-center flex-shrink-0 border rounded-[20px] border-green-3 box-shadow-3 " key={index}>
                    <Image
                      className="rounded-[39px]"
                      src={"/arakia/images/notion.png"} width={64} height={64}
                      alt="Notion logo"
                    />
                  </div>
                ))}                
              </div>
              <HiChevronRight className='size-10 cursor-pointer hover:scale-125 duration-300' onClick={() => scroll("right")} />
            </div>
          
          </div>          

          {/** PORTOFOLIO */}
          <div className='w-11/12 relative flex flex-col gap-5'>
            {/** Top title */}
            <div className="flex justify-center items-center">
              <button className="p-2 rounded-full bg-green-1"><HiChevronLeft size={25} /></button>
              <div className='px-20 text-center'>
                <p className='lg:text-[24px] xs:text-[12px] font-semibold text-green-3'>Lihat rekam jejak kami</p>
                <h2 className='lg:text-[40px] xs:text-[20px] font-black'>PORTOFOLIO</h2>
              </div>
              <button className="p-2 rounded-full bg-green-1"><HiChevronRight size={25} /></button>
            </div>
            {/** card section */}
            <div className='w-full flex lg:flex-row xs:flex-col gap-12'>
              <div className='lg:w-1/2 xs:w-full p-10 relative rounded-[46px] box-shadow-4 bg-white'>
                <div className='p-20 text-white rounded-[23px] bg-green-3 text-center'>Pict</div>
                <h1 className='mt-5 text-[32px] font-black'>Nama Portofolio</h1>
                <p className='text-[16px] font-normal text-justify leading-tight'>To create a sustainable and equitable future for underdeveloped areas, ARAKIA is committed to creating opportunities for the community through education, technology,. mr robot mus be one of the best series i have ever watched</p>
                <h1 className='absolute bottom-0 right-8 text-[96px] font-black text-green-3-half'>#1</h1>
              </div>
              <div className='lg:w-1/2 xs:w-full p-10 relative rounded-[46px] box-shadow-4 bg-white'>
                <div className='p-20 text-white rounded-[23px] bg-green-3 text-center'>Pict</div>
                <h1 className='mt-5 text-[32px] font-black'>Nama Portofolio</h1>
                <p className='text-[16px] font-normal text-justify leading-tight'>To create a sustainable and equitable future for underdeveloped areas, ARAKIA is committed to creating opportunities for the community through education, technology,. mr robot mus be one of the best series i have ever watched</p>
                <h1 className='absolute bottom-0 right-8 text-[96px] font-black text-green-3-half'>#2</h1>
              </div>
            </div>
            {/** PAGINATION SECTION */}
            <div className='w-full mt-5 flex gap-5 items-center justify-center'>
              <div className='p-2 rounded-full bg-green-3'></div>
              <div className='p-1 rounded-full bg-green-3'></div>
              <div className='p-1 rounded-full bg-green-3'></div>
              <div className='p-1 rounded-full bg-green-3'></div>
            </div>
          </div>

          {/** ORNAMENT 2 */}
          <div className='absolute -z-50 top-1/2 -right-72'>
            <div className='p-44 border-[20px] border-white rounded-full bg-green-1'>
              <div className='p-20 rounded-full border-[20px] border-white bg-green-1'></div>
            </div>            
          </div>

          {/** ORDER NOW SECTION */}
          <div className='py-3 lg:px-5 xs:px-0 w-1/3 flex flex-col gap-4 justify-center items-center text-green-3 rounded-[14px] box-shadow-4 bg-white'>
            <h1 className='w-3/4 text-[24px] font-black text-center text-black'>Contact Us</h1>
            <div className="px-3 py-1 w-full flex justify-between items-center gap-1 text-[20px] font-medium border rounded-md border-green-3"><div className="flex gap-3 items-center"><FaWhatsapp size={25} className="text-green-3" /> Whatsapp</div> <button className="px-2 py-0.5 text-white rounded-md bg-green-3">Details</button></div>
            <div className="px-3 py-1 w-full flex justify-between items-center gap-1 text-[20px] font-medium border rounded-md border-green-3"><div className="flex gap-3 items-center"><FaInstagram size={25} className="text-green-3" /> Instagram</div> <button className="px-2 py-0.5 text-white rounded-md bg-green-3">Details</button></div>
            <div className="px-3 py-1 w-full flex justify-between items-center gap-1 text-[20px] font-medium border rounded-md border-green-3"><div className="flex gap-3 items-center"><FaLinkedin size={25} className="text-green-3" /> Linkedin</div> <button className="px-2 py-0.5 text-white rounded-md bg-green-3">Details</button></div>
          </div>

          {/** ORNAMENT 3 */}          ``
          <div className='p-40 absolute z-10 -bottom-64 -left-16 rounded-full bg-green-1'></div>

        </div>

        {/** FOOTER */}
        <div className='w-full p-20 flex flex-col gap-10 justify-center items-center bg-green-4 text-center text-green-3'>
          {/** TOP PART  */}
          <div className='w-5/6 flex lg:flex-row xs:flex-col gap-20 justify-between items-center'>
            <div><Image className=" object-cover rounded-[39px]" src={"/arakia/images/LOGO_w_1.png"} width={350} height={100} layout="intrinsic" alt="" /></div>
            <div className='flex flex-col gap-5 justify-end items-end text-green-3'>
              <h1 className='text-[24px] font-bold'>PT. Amanah Cirta Cendika</h1>
              <h4 className='text-[15px] font-bold'>Jl. Kepodang No.20 Sanggrahan, Ngadirojo Kidul, Ngadirojo, Wonogiri</h4>
              <ul className='flex gap-5 text-[12px] font-medium'>
                {[...Array(4)].map((_, index) => (
                    <li key={index} className='flex gap-1 justify-center items-center'>
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
