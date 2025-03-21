"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Footer from "@/components/Footer";
import Content from "@/app/Content.json";
import Image from "next/image";
import Typography from "@/components/Typography";
import Button from "@/components/Button";
import LeftBorderTitle from "@/components/LeftBorderTitle";
import { useRouter } from "next/navigation";
import { LIST_PROJECT } from "constants/routes";

export default function PerizinanLingkunganPage() {
  const t = useTranslations("konsultant");
  const router = useRouter();

  return (
    <>
      <div className="w-full max-w-[2024px] lg:m-auto xs:m-0 grid grid-cols-1 lg:gap-20 xs:gap-0 place-content-center place-items-center">
        {/** card section */}
        <div className="w-full mt-20 lg:p-20 xs:p-5 flex flex-col flex-wrap gap-12 justify-center">
          <LeftBorderTitle label={t("projectList")} />
          {Content.Portofolio.map((item, index) => (
            <Button
              key={index}
              onClick={() => router.push(LIST_PROJECT + `/${item.id}`)}
              className="w-full py-5 px-5 relative flex lg:flex-row xs:flex-col lg:gap-10 xs:gap-5 rounded-[28px] box-shadow-4 bg-white"
            >
              <div className="lg:w-1/2 xs:w-full p-20 h-full overflow-hidden relative">
                <Image
                  src={`/arakia/images/${item.poster}`}
                  alt="image"
                  fill={true}
                  style={{ objectFit: "cover" }}
                  objectPosition="center"
                  className="rounded-[23px]"
                />
              </div>
              <div className="lg:w-1/2 xs:w-full p-5 flex flex-col text-left gap-5">
                <Typography variant="3xl" weight="800" color="tertiary">
                  {item.title}
                </Typography>
                <Typography
                  variant="lg"
                  color="primary"
                  className="leading-relaxed"
                >
                  {item.desc}
                </Typography>
              </div>
            </Button>
          ))}
        </div>

        {/** FOOTER */}
        <Footer />
      </div>
    </>
  );
}
