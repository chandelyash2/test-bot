/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container } from "@/components/Container";

export const Web3 = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-5  text-center">
        <h2 className="text-4xl font-medium">Web3 Crypto Dust Runner Game</h2>
        <p className="text-2xl font-medium capitalize lg:w-[40%]">
          Introducing Crypto Dust Runner, the web 3 game that's here to bring
          the heat to those corporate whales invading our precious crypto space!
          🌬️🐺
        </p>
        <div className="text-[#EBECED] capitalize lg:w-[50%]">
          <p>
            In this epic quest, you'll join forces with Nimbi, the fearless
            white wolf, as he races through a treacherous frozen gulch, fueled
            by the magnificent power of crypto dust! 💪✨ His mission? To
            collect as much of this precious resource as possible and transform
            into a legendary force against those pesky corporate giants. 😎🐋
          </p>
          <p>
            Picture this: you're in control of the nimble Nimbi, dodging
            obstacles, jumping over icy chasms, and racing against time ⏰ to
            reach power-up spots that will elevate your game to a whole new
            level! 💯✨ Discover abandoned crypto mines that will boost Nimbi's
            dust collection abilities, allowing him to dominate the leaderboard
            like a true crypto champ! 🏆💰
          </p>
        </div>
        <img src="/Web3.png" alt="web3" className="w-[1204px]" />
      </div>
    </Container>
  );
};
