"use client";

import Button from "@/components/Button";
import Typography from "@/components/Typography";
import { WA_NUMBER } from "constants/otherWeb";
import * as React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function LayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Button
        radius="md"
        size="lg"
        buttonType="elevated"
        className="gap-5 fixed right-10 bottom-10 text-green"
        onClick={() => window.open(WA_NUMBER, "_blank")}
        visibleOn="desktop-only"
      >
        <Typography variant="xl">Contact Us</Typography>
        <FaWhatsapp size={30} />
      </Button>
    </>
  );
}
