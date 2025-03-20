"use client";

import React, { useRef, useState } from "react";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Content from "@/app/Content.json";
import LandingPage1 from "./components/entranceScreen";
import Typography from "@/components/Typography";
import { useTranslations } from "next-intl";
import Footer from "@/components/Footer";
import { Body } from "@/components/body";
import Button from "@/components/Button";
import useGsapFadeIn from "@/utils/gsapFadeIn";

export default function Home() {
  const t = useTranslations("home");

  const targetRef = useRef<HTMLDivElement>(null);

  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
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

  const fadeInRefs = useGsapFadeIn(); 
  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    fadeInRefs.current[index] = el;
  };

  return (
    <>
      <div className="w-full max-w-[2024px] lg:m-auto xs:m-0 grid grid-cols-1 lg:gap-20 xs:gap-0 place-content-center place-items-center">
        <LandingPage1 t={t} scrollToTarget={scrollToTarget} />

        {/** CONTINUESNESS LINE */}
        <div
          ref={targetRef}
          className="lg:w-5/6 xs:w-full lg:p-20 xs:p-5 lg:-mb-40 xs:-mb-10 relative lg:border lg:border-b-0 rounded-[61px] xs:border-collapse border-green-3"
        >
          {/** GET TO KNOW SECTION */}
          <div className="relative flex flex-col lg:gap-10 xs:gap-2 justify-center items-center">
            {/** TITTLE SECTION */}
            <div ref={setRef(0)} className="lg:w-3/4 xs:w-full flex flex-col gap-2 justify-center text-center">
              <Typography variant="lg" color="tertiary">
                {t("prologVisi")}
              </Typography>
              <Typography variant="4xl" color="primary" weight="800">
                {t("ourVisi")}
              </Typography>
            </div>
            {/** VISION MISSION DIV SENTION */}
            <div ref={setRef(1)} className="lg:w-3/4 xs:w-full lg:p-10 xs:p-5 flex flex-col gap-5 rounded-[17px] bg-radial-gray">
              <div className="flex lg:flex-row xs:flex-col lg:gap-14 xs:gap-5 font-bold text-justify leading-loose">
                <Typography variant="md" color="primary">
                  {t("visiDesc")}
                </Typography>
              </div>
              <Button 
                variant="secondary"
                radius="md"
                label={t('ourWork')}
              />
            </div>
            {/** BG SHADOW */}
            <div className="w-2/4 h-10 p-2 absolute bottom-0 -z-10 box-shadow-1"></div>
          </div>
        </div>

        {/** GREEN BG SECTION */}
        <div className="w-full -mt-16 pb-24 pt-40 flex flex-col justify-center items-center bg-green-3 overflow-hidden">
          {/** FEATURES SECTION */}
          <div className="lg:w-4/6 xs:w-10/12 lg:grid lg:grid-cols-2 xs:flex xs:flex-col lg:gap-36 xs:gap-14">
            {/** left section */}
            <div ref={setRef(2)} className="w-full flex flex-col lg:gap-10 xs:gap-2 justify-evenly lg:text-left xs:text-center">
              <div>
                <Typography variant="lg" color="secondary">
                  {t("misi")}
                </Typography>
                <Typography variant="3xl" weight="1000" color="secondary">
                  {t("prologMisi1")}
                </Typography>
              </div>
              <Typography variant="lg" color="secondary">
                {t("prologMisi2")}
              </Typography>
            </div>

            {/** right section */}
            <div ref={setRef(3)} className="w-full h-80 relative flex justify-center items-center">
              {Content.Mission.map((item, index) => {
                const offset = index - activeIndex;
                const scale = 1 - Math.min(Math.abs(offset) * 0.1, 0.5);
                const zIndex = data.length - Math.abs(offset);

                return (
                  <div
                    key={index}
                    className={
                      "lg:w-[19rem] xs:w-[15rem] lg:h-[400px] xs:h-[320px] py-5 lg:px-10 xs:px-7 absolute flex flex-col justify-between gap-5 rounded-[21px] box-shadow-2 transition-all duration-500 ease-in-out bg-green-4"
                    }
                    style={{
                      transform: `translateX(${offset * 40}px) scale(${scale})`,
                      zIndex: zIndex,
                      opacity: scale,
                    }}
                  >
                    <div className="flex flex-col gap-3">
                      <Typography variant="md" color="tertiary">
                        {t("features")}
                      </Typography>
                      <Typography variant="xl" weight="1000" color="primary">
                        {item.title}
                      </Typography>
                    </div>
                    <div className="place-content-center">
                      <Typography variant="lg" color="primary">
                        {item.desc}
                      </Typography>
                    </div>
                    <div className="flex gap-3">
                      <button
                        className="p-2 rounded-full text-white bg-green-3"
                        onClick={handleRightClick}
                      >
                        <HiChevronLeft className="size-6" />
                      </button>
                      <button
                        className="p-2 rounded-full text-white bg-green-3"
                        onClick={handleLeftClick}
                      >
                        <HiChevronRight className="size-6" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/** CONTINUESNESS LINE AND BACKGROUND */}
        <Body t={t} />

        {/* FOOTER */}
        <Footer />

      </div>
    </>
  );
}
