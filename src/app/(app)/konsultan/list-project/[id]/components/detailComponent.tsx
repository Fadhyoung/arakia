"use client";

import Footer from "@/components/Footer";
import LeftBorderTitle from "@/components/LeftBorderTitle";
import Typography from "@/components/Typography";
import Image from "next/image";
import { useDetail } from "../hooks";

export default function DetailComponent() { 
  const {t, imageUrls, data, setRef} = useDetail();

  return (
    <>
      <div className="w-full max-w-[2024px]">
        {/** GREEN BG SECTION */}
        <div className="w-full lg:pb-24 xs:pb-10 lg:pt-44 xs:pt-32 lg:px-32 xs:px-5 flex lg:flex-row xs:flex-col gap-10 justify-around items-center overflow-hidden bg-green">
          {/** left section */}
          <div className="lg:w-1/3 xs:w-full lg:p-20 xs:p-12 h-full overflow-hidden relative ">
            <Image
              src={`/arakia/images/${data?.poster}`}
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
              {data?.title}
            </Typography>
            <Typography variant="lg" color="secondary">
              {data?.desc}
            </Typography>
          </div>
        </div>

        <div className="w-full py-20 lg:px-32 xs:px-5 flex flex-wrap gap-10">
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
