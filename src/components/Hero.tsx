import React from "react";
import { DataComponent } from "./hero/data";
import { Inputform } from "./hero/inputform";
import { ImageComponent } from "./hero/image";

const Hero = () => {
  return (
    <>
      <section className=" hidden lg:block px-6 lg:px-20 3xl:px-0 mx-auto bg-[#F7F5F9]">
        <div className="flex itesm-center w-full">
          <div className="flex flex-col w-full">
            <DataComponent />
            <ImageComponent />
          </div>
          <div className="w-full">
            <Inputform />
          </div>
        </div>
      </section>
      <section className="lg:hidden px-6 lg:px-20 3xl:px-0 mx-auto bg-[#F7F5F9]">
        <div className="flex flex-col gap-5 itesm-center w-full">
          <DataComponent />
          <Inputform />
          <ImageComponent />
        </div>
      </section>
    </>
  );
};

export default Hero;
