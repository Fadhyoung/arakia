"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { HOME } from "constants/routes";
import Typography from "./Typography";
import Stack from "./Stack";

export const Navbar1 = () => {
  const t = useTranslations("navbar");
  const route = useRouter();
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
        className={`w-full lg:mx-0 xs:mx-0 lg:px-20 xs:px-5 py-5 fixed top-0 z-50 flex justify-between self-start transition-all duration-300
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
            alt="logo"
          />
          <Stack direction="col"gap={1}>
            <Typography variant="md" weight="700" color={isScrolled ? "primary": "secondary"}>
              {t("amanahCitra")}
            </Typography>
            <Typography variant="md" weight="700" color={isScrolled ? "primary": "secondary"}>
              {t("cendaka")}
            </Typography>
          </Stack>
        </div>

        <div className="w-fit px-10 py-2 lg:flex xs:hidden gap-10 text-green-3 rounded-full bg-green-4">
          <Button buttonType="ghost" onClick={() => route.push(HOME)} label={t("home")} size="md" />
        </div>
        <div className="w-1/3 flex items-center justify-end">
          <Button
            label={t("tree")}
            size="md"
            className="font-extrabold text-primaryGreen"
            onClick={() =>
              window.open("https://linktr.ee/", "_blank", "noopener,noreferrer")
            }
          />
        </div>
      </nav>
    </>
  );
};
