"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import { copyImageToClipboard, copyTxtToClipboard } from "@/lib/clipboard";
import axios from "axios";

type Props = {
  img?: string;
  text?: string;
};

const useClipboard = ({ img, text }: Props) => {
  const [clipBoardSucces, setClipBoardSucces] = useState<boolean>(false);

  const handleCopy = async () => {
    if (text) {
      const res = await copyTxtToClipboard(text);
      setClipBoardSucces(res.status);
      toast(res.message);
    }

    if (img) {
      const response = await axios.get(img, {
        responseType: "blob",
      });

      const blob = response.data;
      const res = await copyImageToClipboard(blob);
      setClipBoardSucces(res.status);
      toast(res.message);
    }
  };

  useEffect(() => {
    handleCopy();
  }, [img, text]);

  return clipBoardSucces;
};

export default useClipboard;
