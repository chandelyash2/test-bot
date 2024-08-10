/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container } from "@/components/Container";

export const Mission = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center">
      <div className="absolute right-0">
        <img
          src="./New1.png"
          alt="eth"
          className="w-[250px] h-[1060px] relative z-1"
        />
      </div>

      <div className="capitalize flex flex-col lg:flex-row gap-8 mt-4 lg:w-[70%] p-4 md:p-6">
        <img
          src="/Mission.png"
          width={200}
          height={200}
          alt="mission"
          className="w-full lg:w-[460px] lg:h-[392px] relative z-2 "
        />
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl lg:text-4xl font-medium">Mission</h2>
          <p className="text-[#EBECED]">
            Nimbi's mission is to keep everything decentralized, transparent and
            immutable. corporations have become way too powerful and nimbi
            knows---now is the time to unity against their greed and power.
            let's all collect our crypto dust and stand up to their tyranny.
          </p>
          <p className="text-xl lg:text-2xl font-medium">
            We make participating in airdrops very easy.
          </p>
        </div>
      </div>
    </div>
  );
};
