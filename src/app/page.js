"use client"

import React, { useRef, useState } from "react";
import Image from "next/image";

import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight  } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Content from "./Content.json";
import LandingPage1 from "./sections/landing_page";

export default function Home() {

  const getInitialContentPerPage = () => {
    if (typeof window !== "undefined" && window.innerWidth <= 380) {
      return 1;
    }
    return 2;
  };

  const portofolios = Content.Portofolio
  const [currentPage, setCurrentPage] = useState(1);
  const [contentPerPage, setContentPerPage] = useState(contentPerPageInitial);
  const portoliosLength = portofolios.length
  const totalPortosPages = portoliosLength / contentPerPage

  const indexOfLastPost = currentPage * contentPerPage;
  const indexOfFirstPost = indexOfLastPost - contentPerPage;
  const currentPortofolios = portofolios.slice(indexOfFirstPost, indexOfLastPost);

  const scrollWrapperRef = useRef(null);

  const handlePorto = (page) => {
    if (page <= 1) {setCurrentPage(1)}
    else if (page >= totalPortosPages) {setCurrentPage(totalPortosPages)}
    else {setCurrentPage(page)}     
  }

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

  const targetRef = useRef(null);

  const scrollToTarget = () => {
      if (targetRef.current) {
          targetRef.current.scrollIntoView({ behavior: 'smooth' });
      }
  };

  const data = Content.Mission;
  const [activeIndex, setActiveIndex] = useState(1);

  const handleLeftClick = () => {
    setActiveIndex((prev) => (prev + 1) % data.length); // Cycle to the next card
  };

  const handleRightClick = () => {
    setActiveIndex((prev) => (prev - 1 + data.length) % data.length); // Cycle to the previous card
  };

  return (
    <>
  
      <div className='w-full max-w-[2024px] lg:m-auto xs:m-0 grid grid-cols-1 lg:gap-20 xs:gap-0 place-content-center place-items-center'>

        <LandingPage1 scrollToTarget={scrollToTarget} />

        {/** CONTINUESNESS LINE */}
        <div ref={targetRef} className='lg:w-5/6 xs:w-full lg:p-20 xs:p-5 lg:-mb-40 xs:-mb-10 relative lg:border lg:border-b-0 rounded-[61px] xs:border-collapse border-green-3'>

          {/** GET TO KNOW SECTION */}
          <div className='relative flex flex-col lg:gap-10 xs:gap-2 justify-center items-center'>
            {/** TITTLE SECTION */}
            <div className='lg:w-1/2 xs:w-full flex flex-col gap-2 justify-center lg:text-center xs:text-start'>
              <h6 className='lg:block xs:hidden lg:text-[14px] xs:text-[10px] font-bold text-green-3'>Kami membidik dunia dengan martabat dan ketekunan. Tidak ada hal yang dapat mematahkan semangat kami dalam hal mengembangkan keinginan klien kami.</h6>
              <h2 className='lg:text-[32px] xs:text-[40px] font-bold lg:text-center xs:text-start'>Kenali Misi Kami</h2>            
            </div>
            {/** VISION MISSION DIV SENTION */}
            <div className='lg:w-3/4 xs:w-full lg:p-10 xs:p-5 flex flex-col gap-5 rounded-[17px] bg-radial-gray'>
              <div className='flex lg:flex-row xs:flex-col lg:gap-14 xs:gap-5 lg:text-[13px] xs:text-[10px] font-bold text-justify leading-loose'>
                <p>Menjadi perusahaan multidisiplin yang unggul dalam memberikan solusi inovatif, berkelanjutan, dan terpercaya di bidang konsultansi, telekomunikasi, agribisnis, jasa konstruksi, dan perdagangan bebas untuk mendukung pembangunan yang inklusif dan berdaya saing tinggi.</p>                
              </div>
              <button className='w-full py-2 lg:text-[24px] xs:text-[18px] font-bold rounded-[15px] bg-green-3 text-gray-300'>Our Works</button>
            </div>
            {/** BG SHADOW */}
            <div className='w-2/4 h-10 p-2 absolute bottom-0 -z-10 box-shadow-1'></div>
          </div>  
        
        </div>      

        {/** GREEN BG SECTION */}
        <div className='w-full -mt-16 pb-10 pt-32 flex flex-col justify-center items-center bg-green-3 overflow-hidden'>
          
          {/** FEATURES SECTION */}
          <div className='lg:w-4/6 xs:w-10/12 lg:grid lg:grid-cols-2 xs:flex xs:flex-col xs:items-center lg:gap-36 xs:gap-14'>
            {/** left section */}
            <div className='w-full flex flex-col lg:gap-10 xs:gap-2 justify-evenly text-left text-white-2'>
              <div>
                <p className='text-[20px] font-normal'>Misi</p>
                <h1 className='text-[38px] font-black leading-tight'>Kenali bagaimana kami mewujudkan misi kami</h1>
              </div>              
              <p className='lg:text-[16px] xs:text-[14px] font-normal text-justify'>Mewujudkan tujuan yang besar memerlukan serangkaian strategi dan disiplin yang kuat. Arakia berkomitmen menjaga nilai-nilai berikut untuk mencapai tujuan itu.</p>
            </div>
            {/** right section */}
            <div className='w-full h-80 relative flex justify-center items-center'>
            {Content.Mission.map((item, index) =>  {

                const offset = index - activeIndex;
                const scale = 1 - Math.min(Math.abs(offset) * 0.1, 0.5); // Decrease scale for non-active cards
                const zIndex = data.length - Math.abs(offset); // Ensure the active card stays on top         
                
                return (
                <div key={index} 
                className={"lg:w-[19rem] xs:w-[15rem] h-[350px] py-5 lg:px-10 xs:px-7 absolute flex flex-col justify-between gap-5 rounded-[21px] box-shadow-2 transition-all duration-500 ease-in-out bg-green-4"}
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
        <div className='lg:w-11/12 xs:w-full lg:p-20 xs:p-5 relative flex flex-col lg:gap-20 xs:gap-12 justify-center items-center overflow-hidden border lg:rounded-[55px] xs:rounded-none lg:border-green-3 xs:border-none'>
          
          {/** ORNAMENT 1 */}
          <div className='lg:p-32 xs:p-16 absolute -z-10 -top-20 -left-16 lg:border-[20px] xs:border-[10px] border-white rounded-full bg-green-1'></div>
          <div className='lg:p-20 xs:p-12 absolute -z-20 lg:top-40 xs:top-5 lg:-left-20 xs:-left-16 rounded-full bg-green-1'></div>

          {/** CLIENTS SECTIOON */}
          <div className='p-2 flex flex-col justify-center items-center'>
            <div className='lg:w-11/12 xs:w-full lg:px-20 xs:px-0 flex flex-col gap-2 lg:text-center xs:text-justify'>
              <h1 className='lg:text-[36px] xs:text-[24px] font-black'>Klien Terbaik Kami yang Menggunakan Layanan Kami</h1>
              <p className='lg:text-[20px] xs:text-[14px] font-normal text-green-3'>Kami telah melakukan banyak kolaborasi melalui semua hambatan yang kami hadapi sebelumnya. Berikut beberapa klien kami yang telah kami bantu di masa lalu</p>
            </div>
            <div className='w-full lg:mt-5 xs:mt-2 flex justify-center items-center'>
              <HiChevronLeft className='w-1/12 lg:block xs:hidden size-10 cursor-pointer hover:scale-125 duration-300' onClick={() => scroll("left")}/>
              <div className='lg:w-10/12 xs:w-full py-5 client-scroll-wrapper flex-shrink-0 lg:gap-10 xs:gap-3 overflow-scroll ' ref={scrollWrapperRef}>              
                {[...Array(6)].map((_, index) => (
                  <div className="lg:basis-[22%] xs:basis-[38%] lg:py-5 xs:py-3 px-0 flex justify-center items-center flex-shrink-0 border lg:rounded-[20px] xs:rounded-[10px] border-green-3 box-shadow-3 " key={index}>
                    <Image
                      className="rounded-[39px] lg:w-16 lg:h-16 xs:w-10 xs:h-10"
                      src={"/arakia/images/notion.png"} width={64} height={64}
                      alt="Notion logo"
                    />
                  </div>
                ))}                
              </div>
              <HiChevronRight className='w-1/12 lg:block xs:hidden size-10 cursor-pointer hover:scale-125 duration-300' onClick={() => scroll("right")} />
            </div>
          
          </div>          

          {/** PORTOFOLIO */}
          <div className='lg:w-11/12 xs:w-full relative flex flex-col lg:gap-5 xs:gap-0'>
            {/** Top title */}
            <div className="flex justify-center items-center">
              <button className="p-2 rounded-full bg-green-1"><HiChevronLeft size={25} onClick={() => handlePorto(currentPage - 1)} /></button>
              <div className='lg:px-20 xs:px-5 text-center'>
                <p className='lg:text-[24px] xs:text-[12px] font-semibold text-green-3'>Lihat rekam jejak kami</p>
                <h2 className='lg:text-[40px] xs:text-[20px] font-black'>PORTOFOLIO</h2>
              </div>
              <button className="p-2 rounded-full bg-green-1"><HiChevronRight size={25} onClick={() => handlePorto(currentPage + 1)} /></button>
            </div>
            {/** card section */}
            <div className='w-full flex flex-row gap-12'>
              {currentPortofolios.map((item,index) => (
                <div key={index} className='lg:basis-[50%] xs:basis-0-[100%] flex-shrink-0 xs:w-full lg:p-10 xs:p-5 relative lg:rounded-[46px] xs:rounded-[28px] box-shadow-4 bg-white'>
                  <div className='lg:p-20 xs:p-12 text-white rounded-[23px] bg-green-3 text-center'>Pict</div>
                  <h1 className='mt-5 text-[32px] font-black'>{item.title}</h1>
                  <p className='lg:text-[16px] xs:text-[12px] font-normal text-justify leading-tight'>{item.desc}</p>
                  <h1 className='absolute bottom-0 right-8 lg:text-[96px] xs:text-[64px] font-black text-green-3-half'>#1</h1>
                </div> 
              ))

              }             
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
          <div className='absolute -z-50 top-1/2 lg:-right-72 xs:-right-32'>
            <div className='lg:p-44 xs:p-16 border-[20px] border-white rounded-full bg-green-1'>
              <div className='lg:p-20 xs:p-8 rounded-full border-[20px] border-white bg-green-1'></div>
            </div>            
          </div>
  
          {/** CONTACT SECTION */}
          <div className='lg:w-1/3 xs:w-full py-3 px-5 flex flex-col gap-4 justify-center items-center text-green-3 rounded-[14px] box-shadow-4 bg-white'>
            <h1 className='w-3/4 text-[24px] font-black text-center text-black'>Contact Us</h1>
            <div className="px-3 py-1 w-full flex justify-between items-center gap-1 text-[18px] font-medium border rounded-md border-green-3"><div className="flex gap-3 items-center"><FaWhatsapp size={25} className="text-green-3" /> Whatsapp</div> <button className="px-2 py-1 text-[14px] text-white rounded-md bg-green-3">Details</button></div>
            <div className="px-3 py-1 w-full flex justify-between items-center gap-1 text-[18px] font-medium border rounded-md border-green-3"><div className="flex gap-3 items-center"><FaInstagram size={25} className="text-green-3" /> Instagram</div> <button className="px-2 py-1 text-[14px] text-white rounded-md bg-green-3">Details</button></div>
            <div className="px-3 py-1 w-full flex justify-between items-center gap-1 text-[18px] font-medium border rounded-md border-green-3"><div className="flex gap-3 items-center"><FaLinkedin size={25} className="text-green-3" /> Linkedin</div> <button className="px-2 py-1 text-[14px] text-white rounded-md bg-green-3">Details</button></div>
          </div>

          {/** ORNAMENT 3 */}
          <div className='lg:p-40 xs:p-14 absolute -z-10 lg:-bottom-64 xs:-bottom-16 lg:-left-16 xs:-left-4 rounded-full bg-green-1'></div>

        </div>

        {/** FOOTER */}
        <div className='w-full lg:p-20 xs:p-5 flex flex-col lg:gap-10 xs:gap-2 justify-center items-center bg-green-4 text-center text-green-3'>
          {/** TOP PART  */}
          <div className='w-5/6 flex lg:flex-row xs:flex-col gap-10 justify-between items-center'>
            <div><Image className=" object-cover rounded-[39px]" src={"/arakia/images/LOGO_w_1.png"} width={350} height={100} layout="intrinsic" alt="" /></div>
            <div className='flex flex-col gap-2 justify-end items-end text-green-3'>
              <h1 className='text-[24px] font-bold'>PT. Amanah Cirta Cendika</h1>
              <h4 className='text-[15px] font-bold'>Jl. xx No.20 xxxxx, xxxxxxx xxxx, xxxxxxx, xxxxxxxxx</h4>
              <ul className='flex gap-5 text-[12px] font-medium'>
                            
              </ul>
            </div>
          </div>          
          {/** BOTTOM PART */}
          <div className='w-5/6 flex flex-col lg:gap-5 xs:gap-1 justify-start items-start'>
            <div className='w-full border-b border-green-3'></div>
            <h3 className='lg:text-[20px] xs:text-[10px] font-medium'>2024 @ Copyright ACC</h3>
          </div>
        </div>

      </div>
  
      </>
  );
}
