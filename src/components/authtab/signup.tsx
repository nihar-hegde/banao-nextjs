"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { Input } from "../ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import zxcvbn from "zxcvbn";

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    label: "",
  });

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    const result = zxcvbn(event.target.value);
    setPasswordStrength({
      score: result.score,
      label: result.feedback.warning,
    });
  };
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
        <div className="flex items-center justify-between">
          <div className="flex gap-2 mt-2">
            <div
              className={`w-12 h-1 rounded-md ${
                passwordStrength.score >= 1 ? "bg-red-500" : "bg-gray-300"
              }`}
            ></div>
            <div
              className={`w-12 h-1 rounded-md ${
                passwordStrength.score >= 2 ? "bg-yellow-400" : "bg-gray-300"
              }`}
            ></div>
            <div
              className={`w-12 h-1 rounded-md ${
                passwordStrength.score >= 3 ? "bg-green-500" : "bg-gray-300"
              }`}
            ></div>
          </div>
          <p className="text-xs text-gray-400">Password Strength</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-xs lg:text-sm">
            By continuing, you agree to our{" "}
            <span className="font-semibold">Terms of Service</span> and{" "}
            <span className="font-semibold">Privacy Policy</span>
          </p>
        </div>
        <Button className="bg-[#8064A2]">Agree and Continue</Button>
      </div>
    </div>
  );
};
