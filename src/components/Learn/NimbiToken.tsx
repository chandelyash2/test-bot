import React from "react";
import { Working } from "./NimbiWorks/Working";
import { Mission } from "./NimbiWorks/Mission";
import { AboutNimbi } from "./NimbiWorks/AboutNimbi";
import { BuyNimbi } from "./NimbiWorks/BuyNimbi";
import { WhitePaper } from "./NimbiWorks/WhitePaper";

export const NimbiToken = () => {
  return (
    <div
      className="flex flex-col gap-4
    items-center justify-center"
    >
      <AboutNimbi />
      <Working />
      <Mission />
      <BuyNimbi />
      <WhitePaper />
    </div>
  );
};
