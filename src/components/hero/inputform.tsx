import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SignIn } from "../authtab/signin";
import { Signup } from "../authtab/signup";

export const Inputform = () => {
  return (
    <div className=" flex items-start justify-center  w-full h-full lg:mt-24 lg:px-10">
      <Tabs defaultValue="signin" className="w-full">
        <TabsList>
          <TabsTrigger value="signin">Sign in</TabsTrigger>
          <TabsTrigger value="joinin">Join in</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <SignIn />
        </TabsContent>
        <TabsContent value="joinin">
          <Signup />
        </TabsContent>
      </Tabs>
    </div>
  );
};
