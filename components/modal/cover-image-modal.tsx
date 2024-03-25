"use client";

import { useCoverImage } from "@/app/hooks/use-cover-image";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";

const CoverImageModal = () => {
  const coverImage = useCoverImage();

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-center text-lg font-semibold">Cover Image</h2>
        </DialogHeader>
        <div>ToDo: Upload Image</div>
      </DialogContent>
    </Dialog>
  );
};

export default CoverImageModal;
