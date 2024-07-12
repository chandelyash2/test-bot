"use client";
import React, { useContext, useEffect } from "react";
import { Navbar } from "./Navbar";
import { CMSModal } from "@/context";
import axios from "axios";

interface LayoutProp {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProp) => {
  const { setUserInfo } = useContext(CMSModal);
  useEffect(() => {
    fetchUserInfo();
  }, []);
  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/userInfo`,
        {
          params: {
            _id: "66901594587f78d9e4e87bcb",
          },
        }
      );
      response.data && setUserInfo(response.data);
    } catch (error) {
      console.error("Error fetching user info:", error);
      return null;
    }
  };

  return (
    <div className="flex flex-col justify-between min-h-screen h-auto bg-[#1C2327]">
      {/* <Header /> */}
      {children}
      <Navbar />
    </div>
  );
};
