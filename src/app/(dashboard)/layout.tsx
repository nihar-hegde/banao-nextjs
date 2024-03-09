import { Navbar } from "@/components/sharable/Navbar";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
