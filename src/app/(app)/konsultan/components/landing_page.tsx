"use client";

import { useRouter } from "next/navigation";
import Content from "@/app/Content.json"
import Image from "next/image";
import Typography from "@/components/Typography";
import Button from "@/components/Button";
import { featuresIcons } from "constants/icons";
import BackgroundOverlay from "@/components/BackgroundOverlay";

interface LandingPageProps {
  t: (key: string) => string;
  scrollToTarget: () => void;
}

export const LandingPage2 = ({ t, scrollToTarget }: LandingPageProps) => {
  const router = useRouter();

  return (
    <>
      {/** TOP COVER */}
      <div className="xs:mt-0 lg:w-full xs:w-full lg:h-auto xs:h-screen relative flex justify-start items-start overflow-hidden">
        {/** CONTENT CONTAINER */}
        <div className="w-full h-full lg:py-20 xs:py-0 lg:px-0 xs:px-0 flex flex-col gap-20 justify-between top-0 items-center">
          {/** DESC CONTENT */}
          <div className="lg:w-2/4 lg:mt-20 xs:mt-0 xs:w-full h-full flex flex-col gap-2 justify-center items-center">
            {/** TOP SECTION */}
            <div className="lg:px-0 xs:px-5 lg:py-0 py-20 relative flex flex-col gap-4 xs:justify-between items-end overflow-hidden">
              <Typography
                variant="3xl"
                color="secondary"
                className="text-center"
              >
                {t("title")}
              </Typography>
              {/** FLYING BUTTON */}
              <div className=" lg:hidden xs:flex lg:text-[16px] xs:text-[12px] lg:gap-10 xs:gap-2">
                <Button
                  onClick={() => router.back()}
                  variant="primary"
                  radius="md"
                  buttonType="solid"
                  label={t("back")}
                  size="md"
                  className="text-green font-semibold"
                />
                <Button
                  onClick={() => router.push("/konsultan")}
                  variant="tertiary"
                  radius="md"
                  buttonType="solid"
                  label={t("contact")}
                  size="md"
                  className="text-black font-semibold"
                />
              </div>

              <BackgroundOverlay visibleOn="mobile-only"/>
              <img
                className="w-full h-full lg:hidden xs:block object-cover absolute left-0 top-0 -z-20"
                src={"/arakia/images/bg-field.jpg"}
                alt="landing page background"
              />
            </div>

            {/** BOTTOM SECTION */}
            <div className="w-full h-full px-6 py-6 flex flex-col gap-5 justify-start items-center lg:bg-transparent xs:bg-white">
              <Typography variant="3xl" visibleOn="mobile-only">
                {t("ourApproach")}
              </Typography>
              <div className="flex flex-col gap-3 items-start">
                {Content.CompanyFeatures.map((item, index) => (
                  <Button
                    key={index}
                    radius="md"
                    size="md"
                    className="w-full flex !justify-start gap-3 text-left"
                  >
                    {featuresIcons[item.icon]}
                    <span>{item.title}</span>
                  </Button>
                ))}
              </div>

              <button
                className="w-full p-2 lg:hidden xs:block rounded-xl text-white bg-green-3"
                onClick={scrollToTarget}
              >
                Scroll Down
              </button>
            </div>
          </div>

          {/** FLYING BUTTON */}
          <div className="mt-10 lg:flex xs:hidden gap-10">
            <Button
              onClick={() => router.back()}
              variant="primary"
              radius="md"
              buttonType="solid"
              label={t("back")}
              size="xl"
              className="text-xl text-green font-semibold"
            />
            <Button
              onClick={() => router.push("/konsultan")}
              variant="tertiary"
              radius="md"
              buttonType="solid"
              label={t("contact")}
              size="xl"
              className="text-xl text-black font-semibold"
            />
          </div>
        </div>

        {/** BACKGROUND IMAGE */}
        <BackgroundOverlay visibleOn="desktop-only"/>
        <Image
          className="lg:block xs:hidden object-cover absolute -z-30 "
          src={"/arakia/images/bg-field.jpg"}
          layout="fill"
          alt="landing page background"
        />
      </div>
    </>
  );
};

export default LandingPage2;
