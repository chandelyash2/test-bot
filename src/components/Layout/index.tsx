"use client";
import { Navbar } from "./Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen h-auto bg-[#1C2327]">
      {children}
      <Navbar />
    </div>
  );
};
