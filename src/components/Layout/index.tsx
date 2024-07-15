"use client";
import React, { useContext, useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { CMSModal } from "@/context";
import axios from "axios";
import { useTelegram } from "@/lib/TelegramProvider";
import { User } from "../Quest";
import { Auth, LayoutProp } from "./Auth";

export const Layout = ({ children }: LayoutProp) => {
  return (
    <div className="flex flex-col justify-between min-h-screen h-auto bg-[#1C2327]">
      {children}
      <Navbar />
    </div>
  );
};
