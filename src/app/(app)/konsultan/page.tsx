"use client"

import React, { useRef } from "react";

import LandingPage2 from "@/app/(app)/konsultan/components/landing_page";
import { useTranslations } from "next-intl";
import Footer from "@/components/Footer";
import { Body } from "@/components/body";

export default function Home() {

  const t = useTranslations('konsultant')

  const targetRef = useRef<HTMLDivElement>(null);

  const scrollToTarget = () => {
      if (targetRef.current) {
          targetRef.current.scrollIntoView({ behavior: 'smooth' });
      }
  };

  return (
    <>
  
      <div className='w-full max-w-[2024px] lg:m-auto xs:m-0 grid grid-cols-1 lg:gap-20 xs:gap-0 place-content-center place-items-center'>

        <LandingPage2 t={t} scrollToTarget={scrollToTarget} />


        {/** CONTINUESNESS LINE AND BACKGROUND */}     
        <Body t={t} />

        {/** FOOTER */}
        <Footer />

      </div>
  
      </>
  );
}
