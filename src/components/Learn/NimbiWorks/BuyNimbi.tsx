/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Wallet from "../../../../public/wallet.svg";
import Eth from "../../../../public/eth.svg";
import Claim from "../../../../public/claim.svg";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import { Container } from "@/components/Container";
export const BuyNimbi = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-5 capitalize text-center">
        <h2 className="font-medium text-2xl lg:text-4xl">How to Buy Nimbi Token?</h2>
        <div className="text-[#EBECED] flex flex-col gap-5 lg:w-[70%] justify-center">
          <p>
            Nimbi token presale is your chance to secure $Nimbi before the token
            launch. You can buy with crypto or bank card, plus you can stake
            your tokens to earn rewards during the presale.
          </p>
          <p>
            Once the presale has finished, you’ll be able to claim your tokens,
            either on the claim date or 7 days later if your tokens are staked.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:w-[70%] justify-center">
          <div className="flex flex-col gap-6 py-5 px-7 rounded border-1 border-[#5C666C] text-left bg-[#2E3A41] relative z-2">
            <Image src={Wallet} alt="wallet" />
            <h2 className="text-2xl font-medium">STEP 1: Connect Wallet</h2>
            <p className="text-[#EBECED] lg:w-[348px]">
              You'll need a wallet to participate; you can download Metamask or
              Trustwallet. Open this page in the wallet's Dapp browser, then tap
              on the connect button and tap metamask.
            </p>
          </div>
          <div className="flex flex-col gap-6  py-5 px-7 rounded border-1 border-[#5C666C] text-left  bg-[#2E3A41] relative z-2">
            <Image src={Eth} alt="eth" />

            <h2 className="text-2xl font-medium">
              STEP 2: Confirm Transaction
            </h2>
            <p className="text-[#EBECED] lg:w-[348px]">
              Buy with ETH or USDT on the Ethereum Chain or BNB or USDT on the
              Binance Chain. Enter the quantity of ETH or BTCX tokens to buy and
              click the purchase button.
            </p>
          </div>
          <div className="flex flex-col gap-6  py-5 px-7 rounded border-1 border-[#5C666C] text-left  bg-[#2E3A41] relative z-2">
            <Image src={Claim} alt="claaim" />

            <h2 className="text-2xl font-medium">STEP 3: Claim Tokens</h2>
            <p className="text-[#EBECED] lg:w-[348px]">
              After the final presale round, you'll have the exclusive chance to
              claim your tokens before we launch on Uniswap and other
              centralized exchanges.
            </p>
          </div>
        </div>
   
      </div>
    </Container>
  );
};
