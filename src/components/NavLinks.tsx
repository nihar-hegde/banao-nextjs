import Link from "next/link";
import React from "react";
import Image from "next/image";
import { SearchInput } from "./SearchInput";
import { dropDownItems } from "@/constants";
import { DropDownItems } from "./DropDownItems";
import { Button } from "./ui/button";
export const NavLinks = () => {
  return (
    <>
      <div className="flex items-center gap-6">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={180} height={60} />
        </Link>
        <SearchInput />
      </div>
      <div className="hidden lg:flex items-center gap-2">
        {dropDownItems.map((item) => (
          <DropDownItems
            key={item.id}
            id={item.id}
            logoUrl={item.logoUrl}
            label={item.label}
            items={item.items}
          />
        ))}
        <div className="flex gap-4 ">
          <Image
            src={"/bookmarkLogo.svg"}
            alt="bookmark"
            width={20}
            height={20}
          />
          <Image
            src={"/notificationLogo.svg"}
            alt="bookmark"
            width={20}
            height={20}
          />
          <Image src={"/cartLogo.svg"} alt="bookmark" width={20} height={20} />
          <Button
            variant={"outline"}
            className="border-primarycolour text-primarycolour"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </>
  );
};
