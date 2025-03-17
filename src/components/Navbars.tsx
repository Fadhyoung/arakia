"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Button from "./Button";

export const Navbar1 = () => {
  const t = useTranslations("navbar");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/** NAVBAR */}
      <nav
        className={`w-full lg:mx-0 xs:mx-0 lg:px-20 xs:px-5 py-5 fixed top-0 z-50 flex justify-between self-start lg:text-[14px] xs:text-[12px] font-semibold transition-all duration-300
        ${
          isScrolled
            ? "text-black bg-white shadow-md"
            : "text-white bg-transparent"
        }`}
      >
        <div className="w-1/3 flex justify-start items-center gap-5">
          <Image
            className="object-cover rounded-[39px]"
            src={"/images/LOGO-COMPACT.png"}
            width={24}
            height={24}
            alt=""
          />
          <div className="flex lg:flex-col xs:flex-row xs:gap-1">
            <h4>Amanah Citra </h4>
            <h4>Cendaka</h4>
          </div>
        </div>

        <div className="w-fit px-10 py-2 lg:flex xs:hidden gap-10 text-green-3 rounded-full bg-green-4">
          <Button buttonType="ghost" label={t("home")} size="md" />
          <Button
            buttonType="ghost"
            label={t("aboutUs")}
            size="md"
            className="text-nowrap"
          />
          <Button
            buttonType="ghost"
            label={t("ourWorks")}
            size="md"
            className="text-nowrap"
          />
          <Button
            buttonType="ghost"
            label={t("ourPartners")}
            size="md"
            className="text-nowrap"
          />
        </div>
        <div className="w-1/3 flex items-center justify-end">
          <Button
            label={t("tree")}
            size="md"
            className="font-extrabold text-primaryGreen"
            onClick={() => window.open("https://linktr.ee/", "_blank", "noopener,noreferrer")}
          />
        </div>
      </nav>
    </>
  );
};
