"use client";

import Typography from "@/components/Typography";
import Image from "next/image";

export const WhyChooseUsPage = () => {
    
  return (
    <>
      {/** TOP COVER */}
      <div className={"lg:w-5/6 lg:p-20 max-h-[900px] flex items-center justify-evenly border rounded-[61px] xs:border-collapse border-green-3"}>
        <div className="">
          <Typography variant="2xl" color="tertiary" weight="700">
            Mengapa Memilih Kami?
          </Typography>
          <br />
          <div className="">
            <div className="">
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#1F2937' }}>
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
                    Satu-satunya Konsultan yang Memiliki Pricelist Tiap Item
                    Layanan
                  </Typography>
                </li>
                <li>
                  <Typography variant="md" color="primary">
                    <a className="mr-2 text-yellow-300" href="https://perizinanku.co.id/layanan-kami/">Harga</a>
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
                    <a className="mr-2 text-yellow-300" href="https://fadhyoung.github.io/arakia/" target="_blank">
                      Disini
                    </a>
                    Kenali Kami Lebih Dekat{" "}
                  </Typography>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
            <Image
                src={"/arakia/images/LOGO_w_1.png"}
                alt="Why Choose Us"
                className="object-cover"
                width={500} height={500}
            />
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsPage;
