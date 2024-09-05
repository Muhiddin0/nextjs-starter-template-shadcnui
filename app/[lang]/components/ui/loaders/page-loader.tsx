import React from "react";

import LoadingSpinner from "./loading-spinder";

type Props = {
  size?: number;
};

const PageLoader = ({ size = 50 }: Props) => {
  return (
    <div className="flex min-h-[90vh] w-full items-center justify-center">
      <LoadingSpinner siz={size} />
    </div>
  );
};

export default PageLoader;
