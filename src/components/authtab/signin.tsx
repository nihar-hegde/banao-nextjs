"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { Input } from "../ui/input";
import { EyeIcon, EyeOffIcon, LockKeyhole } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import zxcvbn from "zxcvbn";

export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-cente p-2 gap-2">
      <div className="flex flex-col w-full gap-4">
        <Button
          variant={"outline"}
          className="flex items-center justify-start bg-transparent border border-[#8064A2]"
        >
          <FcGoogle size={20} />
          <span className="ml-12 lg:ml-36">Continue With Gooogle</span>
        </Button>
        <Button
          variant={"outline"}
          className="flex items-center justify-start p-4 bg-transparent border border-[#8064A2]"
        >
          <Image src={"/facebook.svg"} alt="facebook" width={20} height={20} />
          <span className="ml-12 lg:ml-36">Continue With Facebook</span>
        </Button>
      </div>
      <div className="flex items-center justify-center my-8">
        <hr className="flex-1 border-[#CED4DA] " />
        <span className="mx-4 text-gray-800 font-semibold">
          or continue with
        </span>
        <hr className="flex-1 border-[#CED4DA]" />
      </div>
      <div className="flex flex-col gap-4 ">
        <Input type="text" placeholder="Email" />
        <div className="relative">
          <Input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
          />
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
          </button>
        </div>
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <Checkbox /> <p>Remeber Me</p>
          </div>
          <div className="flex items-center gap-2">
            <LockKeyhole size={20} />{" "}
            <p className="text-sm">Forgot Passowrd?</p>
          </div>
        </div>
        <Button
          variant={"outline"}
          className="bg-transparent border border-[#8064A2]"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
