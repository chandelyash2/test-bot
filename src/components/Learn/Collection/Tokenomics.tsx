/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Container } from "@/components/Container";

export const Tokenomics = () => {
  return (
    <Container>
      <div className="flex flex-col lg:w-[1205px] gap-6 lg:gap-12">
        <h2 className="text-4xl font-medium">Tokenomics</h2>
        <p className="text-[#EBECED] capitalize lg:w-[60%]">
          every erc-404 nimbi token or supporting kazI erc-20 token from the
          nimbi ecosystem will give you access to the nimbi vip wolfpack. There
          are three tiers of rewards and perks. The nimbi wolfpack team will
          receive free access to play the web3 game Crypto Dust Runner. The
          nimbi wolfpack will also be part of the early nimbi community and will
          be rewarded with airdrops. convert your Crypto Dust to nimbi token and
          have a chance at the Decentralized Crypto Lotto.
        </p>
        <img
          src="/Token.png"
          alt="token"
          className="hidden lg:flex mt-16 w-[1204px]"
        />
        <img
          src="/Mobile.png"
          alt="token"
          className="w-full md:hidden lg:hidden"
        />
        <img
          src="/Tablet.png"
          alt="token"
          className="hidden md:flex w-full lg:hidden"
        />
      </div>
    </Container>
  );
};
