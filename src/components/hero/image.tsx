import Image from "next/image";
import React from "react";

export const ImageComponent = () => {
  return (
    <div className="mt-20">
      <Image src={"/heroImage.svg"} alt="hero image" width={600} height={200} />
    </div>
  );
};
