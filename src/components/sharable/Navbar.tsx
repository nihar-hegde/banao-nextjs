import Link from "next/link";
import Image from "next/image";
import { SearchInput } from "../SearchInput";
import { dropDownItems } from "@/constants";
import { DropDownItems } from "../DropDownItems";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { NavLinks } from "../NavLinks";
import { MobileNavbar } from "./MobileNavbar";
export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-auto w-full shadow-lg  px-6 lg:px-20 3xl:px-0 relative z-30 py-5">
      <NavLinks />
      <div className="flex items-center gap-2 lg:hidden">
        <Image src={"/searchIcon.svg"} alt="bookmark" width={20} height={20} />
        <Image
          src={"/notificationLogo.svg"}
          alt="bookmark"
          width={20}
          height={20}
        />
        <MobileNavbar />
      </div>
    </nav>
  );
};
