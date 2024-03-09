import React from "react";
import { Input } from "./ui/input";
import Image from "next/image";
import { Button } from "./ui/button";

export const SearchInput = () => {
  return (
    <div className="hidden lg:block relative w-full max-w-[300px]">
      <Input
        type="text"
        id="search-dropdown"
        className="bg-gray-100"
        placeholder="Search here..."
        required
      />
      <Button
        type="submit"
        className="absolute top-0 end-0 text-sm font-medium h-full text-white bg-primarycolour rounded-none rounded-tr-lg rounded-br-lg border"
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </Button>
    </div>
  );
};
