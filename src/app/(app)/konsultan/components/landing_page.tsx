"use client";

import { useRouter } from "next/navigation";
import Content from "@/app/Content.json";
import Image from "next/image";
import Typography from "@/components/Typography";
import Button from "@/components/Button";
import { featuresIcons } from "constants/icons";
import BackgroundOverlay from "@/components/BackgroundOverlay";
import Stack from "@/components/Stack";

interface LandingPageProps {
  t: (key: string) => string;
  scrollToTarget: () => void;
}

export const LandingPage2 = ({ t, scrollToTarget }: LandingPageProps) => {
  const router = useRouter();

  return (
    <>
      {/** TOP COVER */}
      <div className="mt-0 w-full md:h-[95vh] xs:h-screen max-h-[900px] relative overflow-hidden">
        {/** CONTENT CONTAINER */}
        <div className="h-full md:py-20 xs:py-0 flex flex-col items-center">
          {/** DESC CONTENT */}
          <div className="md:w-2/4 md:mt-20 xs:mt-0 xs:w-full h-full flex flex-col gap-2 justify-center items-center">
            <Typography
              variant="3xl"
              color="secondary"
              className="text-center"
              visibleOn="desktop-only"
            >
              {t("title")}
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
                {t("title")}
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
              </Stack>
            </Stack>

            {/** BOTTOM SECTION {WEB MODE} */}
            <div className="w-full md:h-full xs:h-screen px-6 py-4 flex flex-col lg:gap-10 xs:gap-3 justify-start items-center md:bg-transparent xs:bg-white">
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
          </Stack>
        </div>

        {/** BACKGROUND IMAGE */}
        <BackgroundOverlay visibleOn="all" />
        <Image
          className="block object-cover absolute -z-30 "
          src={"/arakia/images/bg-field.jpg"}
          fill
          quality={100}
          loading="lazy"
          alt="landing page background"
        />
      </div>
    </>
  );
};

export default LandingPage2;
