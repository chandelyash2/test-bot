import React from "react";
import { Navbar } from "./Navbar";
import { Header } from "./Header";

interface LayoutProp {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProp) => {
  return (
    <div className="flex flex-col justify-between h-auto bg-[#1C2327]">
      {/* <Header /> */}
      {children}
      <Navbar />
    </div>
  );
};
