import { FaWhatsapp, FaGoogle, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TbLicense } from "react-icons/tb";
import { MdApproval, MdDeveloperBoard } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BsBuildingAdd } from "react-icons/bs";
import { ReactNode } from "react";

export const socialIcons: Record<string, ReactNode> = {
  Whatsapp: <FaWhatsapp size={30} />,
  Google: <FaGoogle size={30} />,
  LinkedIn: <FaLinkedin size={30} />,
  Instagram: <FaInstagram size={30} />,
};

export const featuresIcons: Record<string, ReactNode> = {
  License: <TbLicense size={30} />,
  Approval: <MdApproval size={30} />,
  Consultation: <RiCustomerService2Fill size={30} />,
  Development: <MdDeveloperBoard size={30} />,
  Architect: <BsBuildingAdd size={30} />,
};
