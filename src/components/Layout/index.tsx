import React from "react";
import { Navbar } from "./Navbar";
import { Header } from "./Header";

interface LayoutProp {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProp) => {
  return (
    <div className="min-h-full bg-[#1C2327]">
      <Header />
      {children}
      <Navbar />
    </div>
  );
};
