import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropDownProps } from "@/constants";
import { Button } from "./ui/button";
import Image from "next/image";
import { Separator } from "./ui/separator";

export const DropDownItems = ({ id, logoUrl, label, items }: DropDownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} className="flex items-center gap-2">
          <Image src={logoUrl} alt={label} width={20} height={20} />
          {label}
          <Image src={"/chevronDown.svg"} alt={label} width={20} height={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map((item) => (
          <>
            <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
            <Separator />
          </>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
