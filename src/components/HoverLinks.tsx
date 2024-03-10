import React from "react";
import { Peoplecard } from "./cards/peoplecard";

export const HoverLinks = () => {
  return (
    <div className="container mx-auto px-4 lg:px-36 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Peoplecard />
        <Peoplecard />
        <Peoplecard />
        <Peoplecard />
      </div>
    </div>
  );
};
