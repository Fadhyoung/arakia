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
import { WA_NUMBER } from "constants/otherWeb";

interface LandingPageProps {
  t: (key: string) => string;
  scrollToTarget: () => void;
}

export const LandingPage1 = ({ t, scrollToTarget }: LandingPageProps) => {
  const router = useRouter();

  return (
    <>
      {/** TOP COVER */}
      <div className="mt-0 w-full md:h-[95vh] xs:h-screen max-h-[900px] relative overflow-hidden">
        {/** CONTENT CONTAINER */}
        <div className="h-full md:py-20 xs:py-0 flex flex-col items-center">
          {/** DESC CONTENT */}
          <div className="md:w-2/4 md:mt-20 xs:mt-0 xs:w-full h-full flex flex-col gap-2 justify-center items-center">
            <Typography variant="3xl" color="secondary" className="text-center" visibleOn="desktop-only">
              {t("titleProlog")}
            </Typography>

            {/** TOP SECTION {MOBILE} */}
            <Stack
              direction="col"
              align="center"
              gap={5}
              className="px-10 pt-20 pb-5"
              visibleOn="mobile-only"
            >
              <Typography
                variant="xl"
                color="secondary"
                className="w-3/4 text-center"
                visibleOn="mobile-only"
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
                  radius="md"
                  label={t("konsultant")}
                  className="text-green font-semibold"
                  size="md"
                  hidden
                >
                  {t("konsultant")}
                </Button>
                <Button
                  onClick={() => scrollToTarget()}
                  variant="tertiary"
                  radius="md"
                  buttonType="solid"
                  label={t("contact")}
                  size="md"
                  className="text-green font-semibold"
                />
              </Stack>
            </Stack>

            {/** BOTTOM SECTION {WEB MODE} */}
            <div className="w-full md:h-full xs:h-screen px-6 py-4 flex flex-col lg:gap-10 xs:gap-3 justify-start items-center md:bg-transparent xs:bg-white">
              <div className="md:w-auto xs:w-full md:px-8 xs:px-2 py-2 flex flex-col md:gap-3 xs:gap-1 items-center rounded-lg md:border-none xs:border border-green-3 bg-white">
                <Typography variant="lg" color="primary">
                  {t("withArakia")}
                </Typography>
                <Stack className="w-full" justify="center" gap={2}>
                  {Content.CompanyValue.map((item, index) => (
                    <Stack key={index} gap={3}>
                      <FaCheck size={20} className="text-green-3" />
                      <Typography
                        variant="md"
                        color="primary"
                        className="text-nowrap"
                      >
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </div>
              <div className="md:w-auto xs:w-full px-8 py-5 flex flex-col gap-3 items-end rounded-lg border border-green-3 bg-white">
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
          <Stack
            gap={10}
            justify="center"
            className="mt-10"
            visibleOn="desktop-only"
          >
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
              onClick={() => router.push(WA_NUMBER)}
              variant="tertiary"
              radius="xl"
              buttonType="solid"
              label={t("contact")}
              size="xl"
              className="text-xl text-black font-semibold"
            />
          </Stack>
        </div>

        {/** BACKGROUND IMAGE */}
        <BackgroundOverlay visibleOn="all" />
        <Image
          className="block object-cover absolute -z-30 "
          src={"/arakia/images/bg-field.jpg"}
          fill
          loading="lazy"
          quality={100}
          alt="landing page background"
        />
      </div>
    </>
  );
};

export default LandingPage1;
