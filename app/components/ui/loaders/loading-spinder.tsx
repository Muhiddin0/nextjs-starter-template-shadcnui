import React from "react";
import { LoaderCircle } from "lucide-react";

type Props = {
  siz: number;
};

const LoadingSpinner = ({ siz }: Props) => {
  return (
    <>
      <LoaderCircle size={siz} className="animate-spin transition-all" />
    </>
  );
};

export default LoadingSpinner;
