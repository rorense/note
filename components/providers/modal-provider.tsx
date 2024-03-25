"use client";

import { useEffect, useState } from "react";
import SettingsModal from "../modal/settings-modal";
import CoverImageModal from "../modal/cover-image-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  // * Prevent hydration error for all modals
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <SettingsModal />
      <CoverImageModal />
    </>
  );
};
