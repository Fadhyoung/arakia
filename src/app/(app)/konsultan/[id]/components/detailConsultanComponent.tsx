"use client";

import Footer from "@/components/Footer";
import LeftBorderTitle from "@/components/LeftBorderTitle";
import Typography from "@/components/Typography";
import { useDetail } from "../hooks";
import * as FaIcons from "react-icons/fa";

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

  const IconComponent = FaIcons[consultant.icon as keyof typeof FaIcons];

  return (
    <>
      <div className="w-full max-w-[2024px]">
        {/** GREEN BG SECTION */}
        <div className="w-full lg:pb-24 xs:pb-10 lg:pt-44 xs:pt-32 lg:px-32 xs:px-5 flex flex-col gap-10 justify-around items-center overflow-hidden bg-green">
          {/** left section */}
          {IconComponent ? (
            <IconComponent size={90} color="white" className="self-center" />
          ) : (
            <div className="text-red-500 self-center">Icon not found</div>
          )}

          {/** right section */}
          <div
            ref={setRef(3)}
            className="w-full flex flex-col lg:gap-10 xs:gap-2 items-center text-center"
          >
            <Typography variant="3xl" weight="1000" color="secondary">
              {consultant?.title}
            </Typography>
            <Typography variant="lg" color="secondary">
              {data?.desc}
            </Typography>
          </div>
        </div>

        <div className="w-full py-20 lg:px-32 xs:px-5 flex flex-wrap gap-10">
          {/* PHOTO GALLERY */}
          <LeftBorderTitle label={"Layanan Kami:"} />
          <div className="ml-20 flex flex-col">
            {consultant.services.map((service) => (
              <>
                <Typography variant="md" color="primary">
                  {service}
                </Typography>
              </>
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
          
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}
