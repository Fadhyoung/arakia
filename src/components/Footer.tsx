import Image from "next/image";
import React from "react";
import Typography from "./Typography";
import { socialIcons } from "constants/icons";
import Content from "@/app/Content.json";
import { useTranslations } from "next-intl";
import Stack from "./Stack";
import useScreenType from "@/utils/widthDetector";
import { ScreenType } from "types/screenTypes";

export const Footer = () => {
  const t = useTranslations("footer");
  const screenType = useScreenType();

  return (
    <>
      {/** FOOTER */}
      <div className="w-full lg:p-20 xs:p-5 flex flex-col lg:gap-10 xs:gap-2 justify-center items-center bg-green-4 text-center text-green-3">
        {/** TOP PART  */}
        <div className="w-5/6 flex lg:flex-row xs:flex-col gap-10 justify-between items-center">
          <Image
            className=" object-cover rounded-[39px]"
            src={"/arakia/images/LOGO_w_1.png"}
            width={350}
            height={100}
            layout="intrinsic"
            alt=""
          />
          <Stack direction="col" justify="end" align="end">
            <Typography variant="2xl" weight="800" color="tertiary">
              {t("ptName")}
            </Typography>
            <Typography variant="lg" color="tertiary">
              {t("ptAddress")}
            </Typography>
            <div className="w-full py-2 flex gap-5 lg:justify-end xs:justify-center items-center text-green-3">
              {Content.SocialMedia.map((item, index) => (
                <div key={index} className="flex items-center gap-1">
                  {socialIcons(screenType === ScreenType.Desktop ? 30 : 20)[item.socialMedia]}
                  <Typography
                    variant="md"
                    color="tertiary"
                    visibleOn="desktop-only"
                  >
                    {item.socialMedia}
                  </Typography>
                </div>
              ))}
            </div>
          </Stack>
        </div>
        {/** BOTTOM PART */}
        <div className="w-5/6 flex flex-col lg:gap-5 xs:gap-1 justify-start lg:items-start xs:items-center">
          <div className="w-full border-b border-green-3"></div>
          <Typography variant="lg" color="tertiary">
            {t("copyright")}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Footer;
