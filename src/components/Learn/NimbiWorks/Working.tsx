/* eslint-disable @next/next/no-img-element */
import { Container } from "@/components/Container";
import React from "react";

export const Working = () => {
  return (
    <Container>
      <div className="relative flex flex-col items-center justify-center gap-5 capitalize text-center" >
        <img src="/Ellipse.png" alt="elip" className="absolute top-[-120px] md:top-[-200px] lg:top-[-200px]" />
        <h2 className="font-medium text-4xl">How It Works</h2>
        <div className="hidden lg:flex justify-center lg:w-[70%]">
          <img src="/Group.png" alt="group" className="w-full" />
        </div>
        <div className="lg:hidden flex justify-center">
          <img src="/Group1.png" alt="group" className="w-full " />
        </div>
      </div>
    </Container>
  );
};
