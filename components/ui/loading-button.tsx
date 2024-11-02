import React from "react";
import { Button } from "./button";
import clsx from "clsx";

import { Loader2 } from "lucide-react";

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
      {isLoading && <Loader2 size={18} />}
      {children}
    </Button>
  );
};

export default ButtonLoading;
