"use client";

import Footer from "@/components/Footer";
import LeftBorderTitle from "@/components/LeftBorderTitle";
import Typography from "@/components/Typography";
import { useDetail } from "../hooks";
import * as FaIcons from "react-icons/fa";
import Content from "@/app/Content.json";
import Image from "next/image";
import Button from "@/components/Button";
import { WA_NUMBER } from "constants/otherWeb";

interface Consultant {
  title: string;
  path: string;
  icon: string;
  url: string;
  services: string[];
  description: string;
}

export default function DetailConsultanComponent({
  consultant,
}: {
  consultant: Consultant;
}) {
  const { data, setRef } = useDetail();

  const portofolios = Content.Portofolio;
  const currentPage = 1;
  const contentPerPage = 2;

  const indexOfLastPost = currentPage * contentPerPage;
  const indexOfFirstPost = indexOfLastPost - contentPerPage;
  const currentPortofolios = portofolios.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const IconComponent = FaIcons[consultant.icon as keyof typeof FaIcons];

  return (
    <>
      <div className="w-full max-w-[2024px]">
        {/** GREEN BG SECTION */}
        <div className="w-full lg:pb-24 xs:pb-10 lg:pt-44 xs:pt-32 lg:px-32 xs:px-5 flex flex-col gap-10 justify-around items-center overflow-hidden bg-green">
          {IconComponent ? (
            <IconComponent size={90} color="white" className="self-center" />
          ) : (
            <div className="text-red-500 self-center">Icon not found</div>
          )}
          <div
            ref={setRef(3)}
            className="w-full flex flex-col gap-2 items-center text-center"
          >
            <Typography variant="3xl" weight="1000" color="secondary">
              {consultant?.title}
            </Typography>
            <Typography variant="lg" color="secondary">
              {data?.desc}
            </Typography>
            <Button
              onClick={() => window.open(WA_NUMBER, "_blank")}
              variant="tertiary"
              radius="xl"
              buttonType="solid"
              label={"Konsultasi Sekarang"}
              size="lg"
              className="text-xl w-fit text-black font-semibold"
            >
              Konsultasi Sekarang
            </Button>
          </div>
        </div>

        <div className="w-full py-20 lg:px-32 xs:px-5 flex flex-wrap gap-10">
          {/* PHOTO GALLERY */}
          <LeftBorderTitle label={"Layanan Kami:"} />
          <div className="ml-20 flex flex-col">
            {consultant.services.map((service, index) => (
              <div key={index}>
                <Typography variant="md" color="primary">
                  {service}
                </Typography>
              </div>
            ))}
          </div>

          {/* TERM AND CONDITION */}
          <LeftBorderTitle label={"Apa itu " + consultant.title} />
          <Typography variant="md" color="primary" className="ml-20 ">
            {consultant?.description}
          </Typography>

          {/* TERM AND CONDITION */}
          <LeftBorderTitle label={"Fungsi PBG"} />

          {/* TERM AND CONDITION */}
          <LeftBorderTitle label={"Dasar Hukum"} />

          {/* TERM AND CONDITION */}
          <LeftBorderTitle label={"Proses yang dilakukan meliputi"} />

          {/* TERM AND CONDITION */}
          <LeftBorderTitle label={"Syarat Pengurusan"} />

          {/* TERM AND CONDITION */}
          <LeftBorderTitle label={"Output"} />

          {/* TERM AND CONDITION */}
          <LeftBorderTitle label={"Alur Pelayanan"} />

          {/* TERM AND CONDITION */}
          <LeftBorderTitle label={"Riwayat Pelayanan"} />
          <div className="lg:w-11/12 xs:w-full relative flex flex-col lg:gap-5 xs:gap-0">
            {/** card section */}
            <div
              ref={setRef(2)}
              className="w-full flex lg:flex-row xs:flex-col gap-12 justify-center"
            >
              {currentPortofolios.map((item, index) => (
                <div
                  key={index}
                  className="lg:basis-[40%] xs:basis-0-[100%] flex-shrink-0 xs:w-full lg:p-10 xs:p-5 relative flex flex-col gap-3 lg:rounded-[46px] xs:rounded-[28px] box-shadow-4 bg-white"
                >
                  <div className="lg:p-20 xs:p-12 text-white rounded-[23px] text-center overflow-hidden relative">
                    <Image
                      src={`/arakia/images/${item.poster}`}
                      alt="image"
                      fill={true}
                      style={{ objectFit: "cover" }}
                      className="rounded-[23px]"
                    />
                  </div>
                  <Typography variant="3xl" weight="700" color="primary">
                    {item.title}
                  </Typography>
                  <Typography variant="lg" color="primary">
                    {item.desc}
                  </Typography>
                  <h1 className="absolute bottom-0 right-8 lg:text-[96px] xs:text-[64px] font-black text-green-3-half">
                    #{index + 1}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}
