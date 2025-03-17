import Button from "@/components/Button";
import Typography from "@/components/Typography";
import Image from "next/image";
import Content from "@/app/Content.json";
import { useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { socialIcons } from "constants/icons";

interface bodyProps {
  t: (key: string) => string;
}

export const Body = ({ t }: bodyProps) => {

  const portofolios = Content.Portofolio;
  const [currentPage, setCurrentPage] = useState(1);
  const contentPerPage = 2;

  const portoliosLength = portofolios.length;
  const totalPortosPages = portoliosLength / contentPerPage;

  const indexOfLastPost = currentPage * contentPerPage;
  const indexOfFirstPost = indexOfLastPost - contentPerPage;
  const currentPortofolios = portofolios.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  const handlePorto = (page: number) => {
    if (page <= 1) {
      setCurrentPage(1);
    } else if (page >= totalPortosPages) {
      setCurrentPage(totalPortosPages);
    } else {
      setCurrentPage(page);
    }
  };

  const scroll = (direction: string) => {
    if (scrollWrapperRef.current) {
      const scrollAmount = 270; // Adjust this value as needed
      if (direction === "left") {
        scrollWrapperRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else if (direction === "right") {
        scrollWrapperRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <>
      {/** CONTINUESNESS LINE AND BACKGROUND */}
      <div className="lg:w-11/12 xs:w-full lg:p-20 xs:p-5 relative flex flex-col lg:gap-20 xs:gap-12 justify-center items-center overflow-hidden border lg:rounded-[55px] xs:rounded-none lg:border-green-3 xs:border-none">
        {/** ORNAMENT 1 */}
        <div className="lg:p-32 xs:p-16 absolute -z-10 -top-20 -left-16 lg:border-[20px] xs:border-[10px] border-white rounded-full bg-green-1"></div>
        <div className="lg:p-20 xs:p-12 absolute -z-20 lg:top-40 xs:top-5 lg:-left-20 xs:-left-16 rounded-full bg-green-1"></div>

        {/** CLIENTS SECTIOON */}
        <div className="p-2 flex flex-col justify-center items-center">
          <div className="lg:w-11/12 xs:w-full lg:px-20 xs:px-0 flex flex-col gap-2 lg:text-center xs:text-justify">
            <Typography variant="3xl" weight="700" color="primary">
              {t("prologClient")}
            </Typography>
            <Typography variant="lg" color="tertiary">
              {t("clientDesc")}
            </Typography>
          </div>
          <div className="w-full lg:mt-5 xs:mt-2 flex justify-center items-center">
            <HiChevronLeft
              className="w-1/12 lg:block xs:hidden size-10 cursor-pointer hover:scale-125 duration-300"
              onClick={() => scroll("left")}
            />
            <div
              className="lg:w-10/12 xs:w-full py-5 client-scroll-wrapper flex-shrink-0 lg:gap-10 xs:gap-3 overflow-scroll "
              ref={scrollWrapperRef}
            >
              {[...Array(6)].map((_, index) => (
                <div
                  className="lg:basis-[22%] xs:basis-[38%] lg:py-5 xs:py-3 px-0 flex justify-center items-center flex-shrink-0 border lg:rounded-[20px] xs:rounded-[10px] border-green-3 box-shadow-3 "
                  key={index}
                >
                  <Image
                    className="rounded-[39px] lg:w-16 lg:h-16 xs:w-10 xs:h-10"
                    src={"/images/notion.png"}
                    width={64}
                    height={64}
                    alt="Notion logo"
                  />
                </div>
              ))}
            </div>
            <HiChevronRight
              className="w-1/12 lg:block xs:hidden size-10 cursor-pointer hover:scale-125 duration-300"
              onClick={() => scroll("right")}
            />
          </div>
        </div>

        {/** PORTOFOLIO */}
        <div className="lg:w-11/12 xs:w-full relative flex flex-col lg:gap-5 xs:gap-0">
          {/** Top title */}
          <div className="flex justify-center items-center">
            <Button
              variant="tertiary"
              radius="full"
              label=""
              icon={
                <HiChevronLeft
                  size={25}
                  onClick={() => handlePorto(currentPage - 1)}
                  className="text-black"
                />
              }
            />
            <div className="lg:px-20 xs:px-5 text-center">
              <Typography variant="lg" color="tertiary">
                {t("prologPortofolio")}
              </Typography>
              <Typography variant="3xl" weight="700" color="primary">
                {t("portofolio")}
              </Typography>
            </div>
            <Button
              variant="tertiary"
              radius="full"
              label=""
              icon={
                <HiChevronRight
                  size={25}
                  onClick={() => handlePorto(currentPage + 1)}
                  className="text-black"
                />
              }
            />
          </div>
          {/** card section */}
          <div className="w-full flex lg:flex-row xs:flex-col gap-12 justify-center">
            {currentPortofolios.map((item, index) => (
              <div
                key={index}
                className="lg:basis-[40%] xs:basis-0-[100%] flex-shrink-0 xs:w-full lg:p-10 xs:p-5 relative flex flex-col gap-3 lg:rounded-[46px] xs:rounded-[28px] box-shadow-4 bg-white"
              >
                <div className="lg:p-20 xs:p-12 text-white rounded-[23px] text-center overflow-scroll relative">
                  <Image
                    src={`/images/${item.poster}`}
                    alt="image"
                    fill={true}
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
          {/** PAGINATION SECTION */}
          <div className="w-full mt-5 flex gap-5 items-center justify-center">
            <div className="p-2 rounded-full bg-green-3"></div>
            <div className="p-1 rounded-full bg-green-3"></div>
            <div className="p-1 rounded-full bg-green-3"></div>
            <div className="p-1 rounded-full bg-green-3"></div>
          </div>
        </div>

        {/** ORNAMENT 2 */}
        <div className="absolute -z-50 top-1/2 lg:-right-72 xs:-right-32">
          <div className="lg:p-44 xs:p-16 border-[20px] border-white rounded-full bg-green-1">
            <div className="lg:p-20 xs:p-8 rounded-full border-[20px] border-white bg-green-1"></div>
          </div>
        </div>

        {/** CONTACT SECTION */}
        <div className="lg:w-1/3 xs:w-full py-5 px-5 flex flex-col gap-4 justify-center items-center text-green-3 rounded-[14px] box-shadow-4 bg-white">
          <h1 className="w-3/4 text-[24px] font-black text-center text-black">
            {t("contactUs")}
          </h1>
          {Content.SocialMedia.map((item, index) => (
            <div
              key={index}
              className="px-3 py-1 w-full flex justify-between items-center gap-1 text-[18px] font-medium border rounded-md border-green-3"
            >
              <div className="flex gap-3 items-center">
                {socialIcons[item.socialMedia]}
                {item.socialMedia}
              </div>{" "}
              <Button
                variant="secondary"
                radius="sm"
                label={t("detail")}
                onClick={() =>
                  window.open(item.link, "_blank", "noopener,noreferrer")
                }
              />
            </div>
          ))}
        </div>

        {/** ORNAMENT 3 */}
        <div className="lg:p-40 xs:p-14 absolute -z-10 lg:-bottom-64 xs:-bottom-16 lg:-left-16 xs:-left-4 rounded-full bg-green-1"></div>
      </div>
    </>
  );
};
