import useGsapFadeIn from "@/utils/gsapFadeIn";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function useKonsulatn() {
  const t = useTranslations("konsultant");
  const router = useRouter();
  const targetRef = useRef<HTMLDivElement>(null);

  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeInRefs = useGsapFadeIn();
  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    fadeInRefs.current[index] = el;
  };

  return {
    t,
    targetRef,
    setRef,
    scrollToTarget,
    router,
  };
}
