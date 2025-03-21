"use client";

import Footer from "@/components/Footer";
import LeftBorderTitle from "@/components/LeftBorderTitle";
import Typography from "@/components/Typography";
import useGsapFadeIn from "@/utils/gsapFadeIn";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { useEffect, useState } from "react";

const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const RANGE = "Sheet1!A:B";

const fetchImages = async (): Promise<string[]> => {
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
  );
  const data = await response.json();
  
  if (!data.values) return [];

  return (data.values as string[][])
    .slice(1)
    .filter((row: string[]) => row[0] === "1" && row.length > 1)
    .map((row: string[]) => row[1]);
};

export default function DetailPeizinanLingkunganComponent() {
  const t = useTranslations("perizinanLingkungan");
  const fadeInRefs = useGsapFadeIn();
  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    fadeInRefs.current[index] = el;
  };

  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    fetchImages().then(setImageUrls);
    console.log(imageUrls);
  }, []);

  return (
    <>
      <div className="w-full max-w-[2024px]">
        {/** GREEN BG SECTION */}
        <div className="w-full pb-24 pt-44 px-32 flex gap-10 justify-around items-center overflow-hidden bg-green">
          {/** left section */}
          <div className="w-1/3 lg:p-20 xs:p-12 h-full overflow-hidden relative ">
            <Image
              src={`https://img.playbook.com/kF7HwRfL6ws927YSp18ezfrF_DxmX0DEpR-KzY0Zgwc/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzlkOTJlZWEw/LWZhYTQtNDFkNC05/YTcyLTcwODM1Mzg1/ZTBiMg`}
              alt="image"
              fill={true}
              style={{ objectFit: "cover" }}
              objectPosition="center"
              className="rounded-[23px]"
            />
          </div>

          {/** right section */}
          <div
            ref={setRef(3)}
            className="w-full flex flex-col lg:gap-10 xs:gap-2 justify-evenly lg:text-left xs:text-center"
          >
            <Typography variant="3xl" weight="1000" color="secondary">
              {t("prologMisi1")}
            </Typography>
            <Typography variant="lg" color="secondary">
              {t("prologMisi2")}
            </Typography>
          </div>
        </div>

        <div className="w-full py-20 px-32 flex flex-wrap gap-10">
          {/* PHOTO GALLERY */}
          <LeftBorderTitle label={t("photos")} />
          {imageUrls.map((url, index) => (
            <Image
              key={index}
              src={url}
              alt={`image-${index}`}
              height={20}
              width={10}
              loading="lazy"
              className="rounded-[23px] h-72 w-auto object-cover"
            />
          ))}

          {/* TERM AND CONDITION */}
          <LeftBorderTitle label={t("termCondition")} />
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}
