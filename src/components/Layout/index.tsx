"use client";
import React, { useContext, useEffect } from "react";
import { Navbar } from "./Navbar";
import { CMSModal } from "@/context";
import axios from "axios";

interface LayoutProp {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProp) => {
  return (
    <div className="flex flex-col justify-between min-h-screen h-auto bg-[#1C2327]">
      {/* <Header /> */}
      {children}
      <Navbar />
    </div>
  );
};
