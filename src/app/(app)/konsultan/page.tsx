"use client";

import React from "react";

import LandingPage2 from "@/app/(app)/konsultan/components/landing_page";
import Footer from "@/components/Footer";
import Content from "@/app/Content.json";
import Image from "next/image";
import Typography from "@/components/Typography";
import Stack from "@/components/Stack";
import Button from "@/components/Button";
import LeftBorderTitle from "@/components/LeftBorderTitle";
import useKonsulatn from "./hooks";
import Card from "@/components/Card";

export default function KonsultanPage() {
  const { t, scrollToTarget, setRef, router, targetRef } = useKonsulatn();

  return (
    <>
      <div className="w-full max-w-[2024px] lg:m-auto xs:m-0 grid grid-cols-1 lg:gap-20 xs:gap-0 place-content-center place-items-center">
        <LandingPage2 t={t} scrollToTarget={scrollToTarget} />

        {/** card section */}
        <div
          ref={targetRef}
          className="w-full py-10 px-5 flex flex-wrap gap-16 justify-center"
        >
          {Content.CompanyFeatures.map((item, index) => (
            <Card
              ref={setRef(index)}
              key={index}
              radius="xl"
              type="elevated"
              className="lg:basis-[40%] xs:basis-0-[100%] xs:w-full lg:p-10 xs:p-5 relative flex flex-col gap-5 "
              body={
                <>
                  <LeftBorderTitle label={item.title} />
                  <Stack className="w-full flex gap-5">
                    <div className="w-[70%] lg:p-20 xs:p-12 h-full overflow-hidden relative">
                      <Image
                        src={`/arakia/images/${item.poster}`}
                        alt="image"
                        fill={true}
                        style={{ objectFit: "cover" }}
                        objectPosition="center"
                        className="rounded-[23px]"
                        loading="lazy"
                      />
                    </div>
                    <Stack
                      direction="col"
                      gap={2}
                      justify="between"
                      className="w-[30%] h-full"
                    >
                      <Button
                        size="lg"
                        label={t("projectList")}
                        onClick={() => router.push(item.url)}
                        variant="secondary"
                        radius="md"
                        className="w-full"
                      />
                      <Button
                        size="lg"
                        label={t("termCondition")}
                        disabled
                        radius="md"
                        className="w-full"
                      />
                      <Button
                        size="lg"
                        label={t("contact")}
                        variant="secondary"
                        radius="md"
                        className="w-full"
                      />
                    </Stack>
                  </Stack>
                  <Typography variant="lg" color="primary">
                    {item.desc}
                  </Typography>
                </>
              }
            />
          ))}
        </div>

        {/** FOOTER */}
        <Footer />
      </div>
    </>
  );
}
