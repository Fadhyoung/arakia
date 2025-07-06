"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Button from "./Button";
import { useRouter } from "next/navigation";
import Typography from "./Typography";
import Stack from "./Stack";
import { useBaseProvider } from "providers/BaseProvider";
import clsx from "clsx";

export type MenuItems = {
  title: string;
  icon?: React.ReactNode;
  children?: MenuItems[];
  href?: string;
};

export type ContentProps = {
  group?: string;
  items: MenuItems[];
};

export interface SidebarProps {
  id?: string;
  style?: React.CSSProperties;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  contents: ContentProps[];
  active?: string;
  classname?: string;
}

export const Navbar1 = ({
  id,
  style,
  contents,
  classname,
}: SidebarProps) => {
  const t = useTranslations("navbar");
  const route = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const { openModalMessage } = useBaseProvider();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/** NAVBAR */}
      <nav
        id={id}
        style={style}
        className={clsx(
          `w-full lg:mx-0 xs:mx-0 lg:px-20 xs:px-5 py-5 fixed top-0 z-50 flex justify-between self-start transition-all duration-300
        ${
          isScrolled
            ? "text-black bg-white shadow-md"
            : "text-white bg-transparent"
        }`,
          classname
        )}
      >
        <div className="w-1/3 flex justify-start items-center gap-5">
          <Image
            className="object-cover rounded-[39px]"
            src={"/arakia/images/LOGO-COMPACT.png"}
            width={24}
            height={24}
            alt="logo"
          />
          <Stack direction="row" gap={1}>
            <Typography
              variant="md"
              weight="700"
              color={isScrolled ? "primary" : "secondary"}
            >
              {t("amanahCitra")}
            </Typography>
            <Typography
              variant="md"
              weight="700"
              color={isScrolled ? "primary" : "secondary"}
            >
              {t("cendaka")}
            </Typography>
          </Stack>
        </div>

        <div className="w-fit px-10 py-2 lg:flex xs:hidden gap-10 text-green-3 rounded-full bg-green-4">
          {contents.map((content, index) => (
            <ul key={index} className="space-y-1 space-x-10">
              {content.items.map((item) => (
                <Button
                  key={item.title}
                  buttonType="ghost"
                  onClick={() => route.push(item.href || "")}
                  label={item.title}
                  size="md"
                />
              ))}
            </ul>
          ))}
        </div>
        <div className="w-1/3 flex items-center justify-end">
          <Button
            label={t("tree")}
            size="md"
            className="font-extrabold text-primaryGreen"
            onClick={() => openModalMessage("yolo", true, null)}
          />
        </div>
      </nav>
    </>
  );
};
