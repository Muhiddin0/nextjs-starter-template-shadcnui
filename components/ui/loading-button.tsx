import React from "react";
import { Button } from "./button";
import clsx from "clsx";

import LoadingSpinner from "@/app/[lang]/components/ui/loaders/loading-spinder";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
}

const ButtonLoading = ({
  children,
  className,
  isLoading,
  ...rest
}: ButtonProps) => {
  return (
    <Button
      {...rest}
      disabled={isLoading}
      className={clsx(
        "flex items-center justify-center gap-3 transition-all duration-300",
        className,
      )}
    >
      {isLoading && <LoadingSpinner siz={20} />}
      {children}
    </Button>
  );
};

export default ButtonLoading;
