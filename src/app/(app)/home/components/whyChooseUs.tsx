"use client";

import Typography from "@/components/Typography";
import Image from "next/image";
import Content from "@/app/Content.json";
import * as FaIcons from "react-icons/fa";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { CONSULTANT } from "constants/routes";

export const WhyChooseUsPage = () => {
  const router = useRouter();
  return (
    <div
      className={
        "lg:w-5/6 lg:p-20 flex flex-col items-center justify-evenly border rounded-[61px] xs:border-collapse border-green-3"
      }
    >
      {/** why choose us */}
      <div className={"w-full flex items-center justify-evenly"}>
        {/* left side */}
        <div>
          <Typography variant="2xl" color="tertiary" weight="700">
            Mengapa Memilih Kami?
          </Typography>
          <br />
          <div className="">
            <div className="">
              <ul
                style={{
                  listStyleType: "disc",
                  paddingLeft: "20px",
                  color: "#1F2937",
                }}
              >
                <li>
                  <Typography variant="md" color="primary">
                    Profesional dan Dikerjakan oleh Tim Ahli
                  </Typography>
                </li>
                <li>
                  <Typography variant="md" color="primary">
                    Respon Cepat dan Komunikatif
                  </Typography>
                </li>
                <li>
                  <Typography variant="md" color="primary">
                    Pengerjaan Cepat dan Proses Transparan
                  </Typography>
                </li>
                <li>
                  <Typography variant="md" color="primary">
                    Memiliki Pengalaman yang Sangat Tinggi
                  </Typography>
                </li>
                <li>
                  <Typography variant="md" color="primary">
                    Satu-satunya Konsultan yang Memiliki Pricelist Tiap Item Layanan
                  </Typography>
                </li>
                <li>
                  <Typography variant="md" color="primary">
                    <a
                      className="mr-2 text-yellow-300"
                      href="https://perizinanku.co.id/layanan-kami/"
                    >
                      Harga
                    </a>
                    Terjangkau dan Bisa Menyesuaikan
                  </Typography>
                </li>
                <li>
                  <Typography variant="md" color="primary">
                    Pembiayaan Fleksibel dan Garansi Uang Kembali
                  </Typography>
                </li>
                <li>
                  <Typography variant="md" color="primary">
                    <a
                      className="mr-2 text-yellow-300"
                      href="https://fadhyoung.github.io/arakia/"
                      target="_blank"
                    >
                      Disini
                    </a>
                    Kenali Kami Lebih Dekat{" "}
                  </Typography>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* right side */}
        <div>
          <Image
            src={"/arakia/images/LOGO_w_1.png"}
            alt="Why Choose Us"
            className="object-cover"
            width={500}
            height={500}
          />
        </div>
      </div>

      <br />
      <br />

      <div>
        <Typography variant="2xl" color="tertiary" weight="700">
          Layanan Konsultasi Kami
        </Typography>
      </div>
      <br />

      {/* our consultation service */}
      <div
        className={"w-full flex flex-wrap gap-5 items-center justify-center"}
      >
        {Content.Consultations.map((item, index) => {
          const IconComponent = FaIcons[item.icon as keyof typeof FaIcons];
          return (
            <div
              key={index}
              className="w-full lg:w-1/4 xs:w-full p-5 flex flex-col text-center justify-between items-center gap-4 border rounded-2xl min-h-72"
            >
              {IconComponent ? (
                <IconComponent
                  size={90}
                  color="green"
                  className="self-center"
                />
              ) : (
                <div className="text-red-500 self-center">Icon not found</div>
              )}
              <Typography variant="lg" color="primary" weight="700">
                {item.title}
              </Typography>
              <Button
                onClick={() => router.push(CONSULTANT + '/' + item.path)}
                variant="tertiary"
                radius="xl"
                buttonType="solid"
                label={'Detail'}
                size="xl"
                className="text-xl w-full text-black font-semibold"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUsPage;
