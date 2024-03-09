import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, Menu } from "lucide-react";
import Image from "next/image";
import { dropDownItems } from "@/constants";
import { DropDownItems } from "../DropDownItems";
import { SearchInput } from "../SearchInput";
import { Button } from "../ui/button";
export const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <div className="flex flex-col items-start gap-2">
          {dropDownItems.map((item) => (
            <DropDownItems
              key={item.id}
              id={item.id}
              logoUrl={item.logoUrl}
              label={item.label}
              items={item.items}
            />
          ))}
          <div className="flex items-center gap-4 px-4 ">
            <Image
              src={"/bookmarkLogo.svg"}
              alt="bookmark"
              width={20}
              height={20}
            />

            <Image
              src={"/cartLogo.svg"}
              alt="bookmark"
              width={20}
              height={20}
            />
          </div>
          <div className="p-4">
            <Button
              variant={"outline"}
              className="border-primarycolour text-primarycolour"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
