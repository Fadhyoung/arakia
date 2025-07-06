"use client";

import { useBaseProvider } from "providers/BaseProvider";
import Button from "./Button";
import Modal from "./Modal";
import { useTranslations } from "next-intl";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import { CONSULTANT, ROUTE_HOME, LIST_PROJECT } from "constants/routes";

export interface ModalResultProps {
  callback?: () => void;
}

export default function TreeModal({ callback }: ModalResultProps) {
  const t = useTranslations("treeModal");
  const router = useRouter();
  const { modalState, closeModalMessage } = useBaseProvider();

  const handleCloseModal = () => {
    if (callback) {
      callback();
    }
    closeModalMessage();
  };

  const goToPage = async (url: string) => {
    router.push(url);
    await new Promise((resolve) => setTimeout(resolve, 300));
    closeModalMessage();
  }

  return (
    <Modal
      size="sm"
      closeIcon={<IoMdClose size={30} />}
      open={modalState.isOpen}
      onClose={handleCloseModal}
      body={
        <div className="flex flex-col gap-5 text-center items-center">
          <Button
            size="lg"
            label={t("linkTree")}
            onClick={() =>
              window.open("https://linktr.ee/", "_blank", "noopener,noreferrer")
            }
            variant="tertiary"
            radius="md"
            className="w-full"
          />
          <Button
            size="lg"
            onClick={() => goToPage(ROUTE_HOME)}
            label={t("home")}
            variant="secondary"
            radius="md"
            className="w-full"
          />
          <Button
            size="lg"
            onClick={() => goToPage(CONSULTANT)}
            label={t("consultant")}
            variant="secondary"
            radius="md"
            className="w-full"
          />
          <Button
            size="lg"
            onClick={() => goToPage(LIST_PROJECT)}
            label={t("projectList")}
            variant="secondary"
            radius="md"
            className="w-full"
          />
        </div>
      }
    />
  );
}
