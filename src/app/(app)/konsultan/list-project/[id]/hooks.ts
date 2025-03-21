"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { fetchImages } from "./actions";
import useGsapFadeIn from "@/utils/gsapFadeIn";
import { useParams } from "next/navigation";
import Content from "@/app/Content.json"
import { Feature } from "types/featureTypes";

export const useDetail = () => {
  const t = useTranslations("perizinanLingkungan");
  const { id } = useParams();

  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [data, setData] = useState<Feature | null>();
  const fadeInRefs = useGsapFadeIn();
  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    fadeInRefs.current[index] = el;
  };

  useEffect(() => {
    if (typeof id === "string") {
      fetchImages(id).then(setImageUrls);
    }
  }, []);

  useEffect(() => {
    if (typeof id === "string") {
      const portfolioItem = Content.Portofolio.find((item) => item.id === Number(id)) || null;
      setData(portfolioItem);
    }
  }, [id]);

  return {
    t,
    id,
    imageUrls,
    data,
    setImageUrls,
    setRef,
  };
};
