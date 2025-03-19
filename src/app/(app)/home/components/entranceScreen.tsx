"use client";

import { useRouter } from "next/navigation";

import Content from "@/app/Content.json";

import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import Typography from "@/components/Typography";
import Button from "@/components/Button";
import Stack from "@/components/Stack";
import BackgroundOverlay from "@/components/BackgroundOverlay";
import { CONSULTANT } from "constants/routes";

interface LandingPageProps {
  t: (key: string) => string;
  scrollToTarget: () => void;
}

export const LandingPage1 = ({ t, scrollToTarget }: LandingPageProps) => {
  const router = useRouter();

  return (
    <>
      {/** TOP COVER */}
      <div className="xs:mt-0 lg:w-full xs:w-full lg:h-auto xs:h-screen relative flex justify-start items-start overflow-hidden">
        {/** CONTENT CONTAINER */}
        <div className="w-full h-full lg:py-20 xs:py-0 px-0 flex flex-col gap-8 justify-between top-0 items-center">
          {/** DESC CONTENT */}
          <div className="lg:w-2/4 lg:mt-20 xs:mt-0 xs:w-full h-full flex flex-col gap-2 justify-center items-center">
            
            {/** TOP SECTION {MOBILE} */}
            <div className="px-5 lg:py-0 py-20 pb-14 relative flex flex-col gap-4 xs:justify-between items-center overflow-hidden">
              <Typography
                variant="xl"
                color="secondary"
                className="w-3/4 text-center"
              >
                {t("titleProlog")}
              </Typography>

              {/** FLYING BUTTON {MOBILE MODE} */}
              <Stack
                direction="row"
                gap={5}
                justify="center"
                className="w-full"
                visibleOn="mobile-only"
              >
                <Button
                  data-testid="vendor_list_add_button"
                  onClick={() => router.push("/konsultan")}
                  variant="primary"
                  style={{ maxWidth: "126px" }}
                  buttonType="solid"
                  radius="full"
                  label={t("konsultant")}
                  className="text-green font-semibold"
                  size="sm"
                >
                  {t("konsultant")}
                </Button>
                <Button
                  onClick={() => scrollToTarget()}
                  variant="secondary"
                  radius="full"
                  buttonType="solid"
                  label={t("contact")}
                  size="sm"
                  className="text-green font-semibold"
                />
              </Stack>

              {/* FILTER */}
              <BackgroundOverlay visibleOn="mobile-only" />
              <Image
                className="w-full h-full lg:hidden xs:block object-cover absolute left-0 top-0 -z-20"
                src={"/arakia/images/bg-field.jpg"}
                alt="landing page background"
                width={800}
                height={800}
              />
            </div>

            {/** BOTTOM SECTION {WEB MODE} */}
            <div className="w-full h-full px-6 py-2 flex flex-col lg:gap-10 xs:gap-3 justify-start items-center lg:bg-transparent xs:bg-white">
              <Typography variant="3xl" visibleOn="mobile-only">
                {t("ourApproach")}
              </Typography>
              <div className="lg:w-auto xs:w-full lg:px-8 xs:px-2 py-2 flex flex-col lg:gap-3 xs:gap-1 items-center rounded-lg lg:border-none xs:border border-green-3 bg-white">
                <Typography variant="lg" color="primary">
                  {t("withArakia")}
                </Typography>
                <Stack className="w-full" justify="center" gap={2}>
                {Content.CompanyValue.map((item, index) => (
                  <Stack
                    key={index}                    
                    gap={3}
                  >
                    <FaCheck size={20} className="text-green-3" />
                    <Typography variant="md" color="primary" className="text-nowrap">
                      {item}
                    </Typography>
                  </Stack>
                ))}
                </Stack>
              </div>
              <div className="lg:w-3/4 xs:w-full px-8 py-5 flex flex-col gap-3 items-end rounded-lg border border-green-3 bg-white">
                {Content.CompanyFeatures.map((item, index) => (
                  <div
                    key={index}
                    className="w-full flex justify-between items-center gap-1"
                  >
                    <Typography variant="md" color="primary">
                      {item.title}
                    </Typography>
                    <Button
                      onClick={() => router.push(CONSULTANT)}
                      variant="tertiary"
                      radius="md"
                      buttonType="subtle"
                      label={t("detail")}
                      size="md"
                      className="text-green font-semibold"
                    />
                  </div>
                ))}
              </div>
              {/* MOBILE MODE */}
              <Button
                onClick={() => scrollToTarget()}
                variant="secondary"
                radius="md"
                buttonType="solid"
                label={t("scrollDown")}
                size="md"
                visibleOn="mobile-only"
                className="w-full text-green font-semibold"
              />
            </div>
          </div>

          {/** FLYING BUTTON */}
          <div className="mt-10 lg:flex xs:hidden gap-10">
            <Button
              onClick={() => router.push(CONSULTANT)}
              variant="primary"
              radius="xl"
              buttonType="solid"
              label={t("konsultant")}
              size="xl"
              className="text-xl text-green font-semibold"
            />
            <Button
              onClick={() => router.push(CONSULTANT)}
              variant="tertiary"
              radius="xl"
              buttonType="solid"
              label={t("contact")}
              size="xl"
              className="text-xl text-black font-semibold"
            />
          </div>
        </div>

        {/** BACKGROUND IMAGE */}
        <BackgroundOverlay visibleOn="desktop-only" />
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

export default LandingPage1;
