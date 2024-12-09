import './App.css';

import LandingPage from './sections/landing_page';

function App() {
  return (
    <>

      <div className='w-4/5 lg:w-full xs:w-fit max-w-[2024px] m-auto flex flex-col gap-20 justify-center items-center'>

        <LandingPage />

        {/** CONTINUESNESS LINE */}
        <div className='w-5/6 p-20 -mb-40 relative border border-b-0 rounded-[61px] border-green-3'>

          {/** GET TO KNOW SECTION */}
          <div className='relative flex flex-col gap-10 justify-center items-center'>
            {/** TITTLE SECTION */}
            <div className='lg:w-1/2 xs:w-3/4 flex flex-col gap-2 justify-center items-center text-center'>
              <h6 className='text-[16px] font-bold text-green-2'>We aiming the world with dignity and deligincy. Theres no such thing that could break aour spirit in terms of developing our client desire</h6>
              <h2 className='text-[32px] font-bold'>Get to know to our beloved</h2>
              <div className='lg:w-1/3 xs:w-1/2 py-2 px-4 text-[16px] font-black text-white rounded-[14px] bg-green-3'>Vision and Mission</div>
            </div>
            {/** VISION MISSION DIV SENTION */}
            <div className='lg:w-3/4 xs:w-full p-10 flex flex-col gap-5 rounded-[17px] bg-radial-gray'>
              <div className='flex gap-14 text-[13px] font-bold text-justify leading-loose'>
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
          <div className='lg:w-4/6 xs:w-10/12 grid grid-cols-2 gap-36'>
            {/** left section */}
            <div className='flex flex-col justify-evenly text-white-2'>
              <div>
                <p className='text-[20px] font-normal'>Our Great Features</p>
                <h1 className='text-[44px] font-black leading-tight'>Brave new world of Agricultural</h1>
              </div>              
              <p className='text-[20px] font-normal text-justify'>To create a sustainable and equitable future for underdeveloped areas, ARAKIA is committed to creating opportunities for the community through education, technology,</p>
            </div>
            {/** right section */}
            <div className='p-10 flex flex-col rounded-[21px] box-shadow-2 bg-green-4'>
              <p className='text-[14px] font-normal'>Feature</p>
              <h1 className='mb-14 text-[36px] font-black'>Terjangkau</h1>
              <p className='text-[14px] font-normal text-justify'>To create a sustainable and equitable future for underdeveloped areas, ARAKIA is committed to creating opportunities for the community through education, technology,</p>
              <div className='flex gap-3'>
                <button className='p-2 mt-6 rounded-full text-white bg-green-3'>
                  <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button className='p-2 mt-6 rounded-full text-white bg-green-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>

          </div>

        </div>     

        {/** CONTINUESNESS LINE AND BACKGROUND */}     
        <div className='w-11/12 p-20 relative flex flex-col gap-20 justify-center items-center overflow-hidden border rounded-[55px] border-green-3'>
          
          {/** ORNAMENT 1 */}
          <div className='p-32 absolute z-20 -top-20 -left-20 border-[20px] border-white rounded-full bg-green-1'></div>
          <div className='p-20 absolute z-10 top-40 -left-20 rounded-full bg-green-1'></div>

          {/** CLIENTS SECTIOON */}
          <div className='flex flex-col justify-center items-center'>
            <div className='w-2/3 text-center'>
              <h1 className='text-[36px] font-black'>Our Best Clients that Use Our Services</h1>
              <p className='text-[20px] font-normal text-green-3'>We've done many colaboration through all the barrier that we've face before. here some of our client that we've helped in the past</p>
            </div>
            <div className='mt-20 flex flex-col gap-10'>
              <div className='flex gap-10'>
                <div className='px-20 py-8 border rounded-[20px] border-green-3 box-shadow-3 '>
                  <img className="h-16 w-16 rounded-[39px]" src={`${process.env.PUBLIC_URL}/images/notion.png`} alt="" />
                </div>
                <div className='px-20 py-8 border rounded-[20px] border-green-3 box-shadow-3 '>
                  <img className="h-16 w-16 rounded-[39px]" src={`${process.env.PUBLIC_URL}/images/notion.png`} alt="" />
                </div>
                <div className='px-20 py-8 border rounded-[20px] border-green-3 box-shadow-3 '>
                  <img className="h-16 w-16 rounded-[39px]" src={`${process.env.PUBLIC_URL}/images/notion.png`} alt="" />
                </div>
                <div className='px-20 py-8 border rounded-[20px] border-green-3 box-shadow-3 '>
                  <img className="h-16 w-16 rounded-[39px]" src={`${process.env.PUBLIC_URL}/images/notion.png`} alt="" />
                </div>
              </div>
              <div className='flex gap-10'>
                <div className='px-20 py-8 border rounded-[20px] border-green-3 box-shadow-3 '>
                  <img className="h-16 w-16 rounded-[39px]" src={`${process.env.PUBLIC_URL}/images/notion.png`} alt="" />
                </div>
                <div className='px-20 py-8 border rounded-[20px] border-green-3 box-shadow-3 '>
                  <img className="h-16 w-16 rounded-[39px]" src={`${process.env.PUBLIC_URL}/images/notion.png`} alt="" />
                </div>
                <div className='px-20 py-8 border rounded-[20px] border-green-3 box-shadow-3 '>
                  <img className="h-16 w-16 rounded-[39px]" src={`${process.env.PUBLIC_URL}/images/notion.png`} alt="" />
                </div>
                <div className='px-20 py-8 border rounded-[20px] border-green-3 box-shadow-3 '>
                  <img className="h-16 w-16 rounded-[39px]" src={`${process.env.PUBLIC_URL}/images/notion.png`} alt="" />
                </div>
              </div>
              <div className='flex gap-10'>
                <div className='px-20 py-8 border rounded-[20px] border-green-3 box-shadow-3 '>
                  <img className="h-16 w-16 rounded-[39px]" src={`${process.env.PUBLIC_URL}/images/notion.png`} alt="" />
                </div>
                <div className='px-20 py-8 border rounded-[20px] border-green-3 box-shadow-3 '>
                  <img className="h-16 w-16 rounded-[39px]" src={`${process.env.PUBLIC_URL}/images/notion.png`} alt="" />
                </div>
                <div className='px-20 py-8 border rounded-[20px] border-green-3 box-shadow-3 '>
                  <img className="h-16 w-16 rounded-[39px]" src={`${process.env.PUBLIC_URL}/images/notion.png`} alt="" />
                </div>
                <div className='px-20 py-8 border rounded-[20px] border-green-3 box-shadow-3 '>
                  <img className="h-16 w-16 rounded-[39px]" src={`${process.env.PUBLIC_URL}/images/notion.png`} alt="" />
                </div>
              </div>
            </div>
          </div>          

          {/** HOW IT WORKS SECTION */}
          <div className='w-11/12 relative flex flex-col gap-10'>
            {/** Top title */}
            <div className='text-center'>
              <p className='text-[24px] font-semibold text-green-2'>learn how you work with our features</p>
              <h2 className='text-[40px] font-black'>HOW IT WORKS</h2>
            </div>
            {/** card section */}
            <div className='w-full flex gap-12'>
              <div className='w-1/2 p-10 relative rounded-[46px] box-shadow-4 bg-white'>
                <div className='p-20 text-white rounded-[23px] bg-green-3 text-center'>Pict</div>
                <h1 className='mt-5 text-[32px] font-black'>Step Here</h1>
                <p className='text-[16px] font-normal text-justify leading-tight'>To create a sustainable and equitable future for underdeveloped areas, ARAKIA is committed to creating opportunities for the community through education, technology,. mr robot mus be one of the best series i have ever watched</p>
                <h1 className='absolute bottom-0 right-8 text-[96px] font-black text-green-3-half'>#1</h1>
              </div>
              <div className='w-1/2 p-10 relative rounded-[46px] box-shadow-4 bg-white'>
                <div className='p-20 text-white rounded-[23px] bg-green-3 text-center'>Pict</div>
                <h1 className='mt-5 text-[32px] font-black'>Step Here</h1>
                <p className='text-[16px] font-normal text-justify leading-tight'>To create a sustainable and equitable future for underdeveloped areas, ARAKIA is committed to creating opportunities for the community through education, technology,. mr robot mus be one of the best series i have ever watched</p>
                <h1 className='absolute bottom-0 right-8 text-[96px] font-black text-green-3-half'>#2</h1>
              </div>
            </div>
            {/** PAGINATION SECTION */}
            <div className='w-full flex gap-5 items-center justify-center'>
              <div className='py-2 px-10 rounded-full bg-green-3'></div>
              <div className='py-1 px-10 rounded-full bg-green-3'></div>
              <div className='py-1 px-10 rounded-full bg-green-3'></div>
              <div className='py-1 px-10 rounded-full bg-green-3'></div>
            </div>
          </div>

          {/** ORNAMENT 2 */}
          <div className='absolute -z-50 top-1/2 -right-72'>
            <div className='p-44 border-[20px] border-white rounded-full bg-green-1'>
              <div className='p-20 rounded-full border-[20px] border-white bg-green-1'></div>
            </div>            
          </div>

          {/** ORDER NOW SECTION */}
          <div className='py-12 px-24 flex flex-col gap-10 justify-center items-center text-white rounded-[20px] bg-green-3'>
            <h1 className='w-3/4 text-[24px] font-semibold text-center'>Click the button down below to have affair with us</h1>
            <button className='w-1/2 py-5 px-14 text-[20px] font-black rounded-[9px] text-green-3 bg-green-4'>ORDER NOW</button>
          </div>

          {/** ORNAMENT 3 */}          
          <div className='p-40 absolute z-10 -bottom-64 -left-16 rounded-full bg-green-1'></div>

        </div>

        {/** FOOTER */}
        <div className='w-full p-20 flex flex-col gap-10 justify-center items-center bg-green-4 text-center text-green-3'>
          {/** TOP PART  */}
          <div className='w-5/6 flex gap-20 justify-between items-center'>
            <div><img className="object-cover w-80 rounded-[39px]" src={`${process.env.PUBLIC_URL}/images/LOGO_w_1.png`} alt="" /></div>
            <div className='flex flex-col gap-5 justify-end items-end text-green-3'>
              <h1 className='text-[24px] font-bold'>PT. Amanah Cirta Cendika</h1>
              <h4 className='text-[15px] font-bold'>Jl. Kepodang No.20 Sanggrahan, Ngadirojo Kidul, Ngadirojo, Wonogiri</h4>
              <ul className='flex gap-5 text-[12px] font-medium'>
                <li className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"></path>
                  </svg>
                  <p>Social Media</p>
                </li>
                <li className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"></path>
                  </svg>
                  <p>Social Media</p>
                </li>
                <li className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"></path>
                  </svg>
                  <p>Social Media</p>
                </li>
                <li className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"></path>
                  </svg>
                  <p>Social Media</p>
                </li>
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
