"use client";

import { useCoverImage } from "@/app/hooks/use-cover-image";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { SingleImageDropzone } from "../single-image-dropzone";
import { useState } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";

const CoverImageModal = () => {
  const coverImage = useCoverImage();
  const { edgestore } = useEdgeStore();
  const update = useMutation(api.documents.update);
  const params = useParams();

  const [file, setFile] = useState<File>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onClose = () => {
    setFile(undefined);
    setIsSubmitting(false);
    coverImage.onClose();
  };

  // * Uploading cover image file to edge store
  const onChange = async (file?: File) => {
    if (file) {
      setIsSubmitting(true);
      setFile(file);

      const res = await edgestore.publicFiles.upload({
        file,
      });

      await update({
        id: params.documentId as Id<"documents">,
        coverImage: res.url,
      });

      onClose();
    }
  };

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-center text-lg font-semibold">Cover Image</h2>
        </DialogHeader>
        <SingleImageDropzone
          className="w-full outline-none"
          disabled={isSubmitting}
          onChange={onChange}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CoverImageModal;
