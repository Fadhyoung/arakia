"use client";

import { useRouter } from "next/navigation";
import { Navbar1 } from "../components/Navbars";
import Content from "../app/Content.json";
import { GiLindenLeaf } from "react-icons/gi";
import Image from "next/image";

interface LandingPageProps {
  t: (key: string) => string;
  scrollToTarget: () => void;
}

export const LandingPage2 = ({ t, scrollToTarget }: LandingPageProps) => {
  const router = useRouter();

  return (
    <>
      {/** TOP COVER */}
      <div className="xs:mt-0 lg:w-full xs:w-full lg:h-auto xs:h-screen relative flex justify-start items-start overflow-hidden">
        {/** CONTENT CONTAINER */}
        <div className="w-full h-full lg:py-5 xs:py-0 lg:px-0 xs:px-0 flex flex-col gap-8 justify-between top-0 items-center">
          <Navbar1 />

          {/** DESC CONTENT */}
          <div className="lg:w-2/4 lg:mt-20 xs:mt-0 xs:w-full h-full flex flex-col gap-2 justify-center items-center">
            {/** TOP SECTION */}
            <div className="lg:px-0 xs:px-5 lg:py-0 py-20 relative flex flex-col gap-4 xs:justify-between items-end overflow-hidden">
              <p className="lg:text-[40px] xs:text-[18px] lg:font-light xs:font-light text-white lg:text-center xs:text-end leading-tight">
                ACC membantu anda dalam pembuatan Konstruksi bangunan,
                Pengembangan website dan lain - lain.
              </p>
              {/** FLYING BUTTON */}
              <div className=" lg:hidden xs:flex lg:text-[16px] xs:text-[12px] lg:gap-10 xs:gap-2">
                <button
                  className="lg:px-6 lg:py-3 xs:px-3 xs:py-2 font-black text-green-3 rounded-full bg-white"
                  onClick={() => router.back()}
                >
                  BACK
                </button>
                <button className="lg:px-6 lg:py-3 xs:px-3 xs:py-2 font-black text-green-3 rounded-full bg-green-4">
                  {t("contact")}
                </button>
              </div>

              <div className="w-full h-full absolute left-0 top-0 lg:hidden xs:block -z-10 bg-cover"></div>
              <img
                className="w-full h-full lg:hidden xs:block object-cover absolute left-0 top-0 -z-20"
                src={"/arakia/images/bg-field.jpg"}
                alt="landing page background"
              />
            </div>

            {/** BOTTOM SECTION */}
            <div className="w-full h-full px-6 py-2 flex flex-col gap-2 justify-start items-center lg:bg-transparent xs:bg-white">
              <h1 className="lg:hidden xs:block font-black text-green-3">
                Our Approach
              </h1>
              {Content.CompanyFeatures.map((item, index) => (
                <button
                  key={index}
                  className="px-3 py-1 flex flex-row gap-5 items-center xs:border rounded-md border-green-3"
                >
                  <GiLindenLeaf className="size-10" />
                  <div className="w-3/4 flex flex-col xs:items-start xs:text-start">
                    <h3 className="xs:text-[12px] font-bold">{item.title}</h3>
                    <p className="xs:text-[9px] font-normal text-justify">
                      {item.desc}
                    </p>
                  </div>
                </button>
              ))}
              <button
                className="w-full p-2 lg:hidden xs:block rounded-xl text-white bg-green-3"
                onClick={scrollToTarget}
              >
                Scroll Down
              </button>
            </div>
          </div>

          {/** FLYING BUTTON */}
          <div className="mt-10 lg:flex xs:hidden gap-10">
            <button
              className="px-6 py-3 text-[16px] font-black text-green-3 rounded-full bg-white"
              onClick={() => window.open("/konsultan")}
            >
              KONSULTAN
            </button>
            <button className="px-6 py-3 text-[16px] font-black text-green-3 rounded-full bg-green-4">
              KONTAK
            </button>
          </div>
        </div>

        {/** BACKGROUND IMAGE */}
        <div className="w-full h-full absolute lg:block xs:hidden -z-10 bg-cover"></div>
        <Image
          className="lg:block xs:hidden object-cover absolute -z-30 "
          src={"/arakia/images/bg-field.jpg"}
          layout="fill"
          alt="landing page background"
        />
      </div>
    </>
  );
};

export default LandingPage2;
