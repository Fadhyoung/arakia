"use client";

import Button from "@/components/Button";
import { MenuItems, Navbar1 } from "@/components/Navbars";
import Typography from "@/components/Typography";
import { WA_NUMBER } from "constants/otherWeb";
import { ROUTE_HOME } from "constants/routes";
import * as React from "react";
import { FaHome, FaWhatsapp } from "react-icons/fa";

const menuItems: MenuItems[] = [
  { title: 'Home', icon: <FaHome />, href: ROUTE_HOME },
  { title: 'Layanan', icon: <FaHome />, href: ROUTE_HOME },
];

export default function LayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Navbar1 contents={[{group : 'Main', items: menuItems}]} />
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
