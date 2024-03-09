import Link from "next/link";
import Image from "next/image";
import { SearchInput } from "../SearchInput";
import { dropDownItems } from "@/constants";
import { DropDownItems } from "../DropDownItems";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-auto w-full shadow-lg  px-6 lg:px-20 3xl:px-0 relative z-30 py-5">
      <div className="flex items-center gap-6">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={260}
            height={60}
            className="md:w-200 sm:w-160"
          />
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
      <div className="flex items-center gap-2 lg:hidden">
        <Image src={"/searchIcon.svg"} alt="bookmark" width={20} height={20} />
        <Image
          src={"/notificationLogo.svg"}
          alt="bookmark"
          width={20}
          height={20}
        />
        <Menu className="text-primarycolour" />
      </div>
    </nav>
  );
};
