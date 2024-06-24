/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { CustInput } from "@/components/CustInput";
import { Button, Input } from "@nextui-org/react";
import React from "react";

export const JoinCommuntity = () => {

  return (
    <div className="relative text-center">
      <img
        src="/Join.png"
        alt="joincommunity"
        className="hidden md:flex w-full md:h-[712px]"
      />
      <img
        src="/Join1.png"
        alt="joincommunity"
        className="w-full h-[1150px] md:hidden"
      />

      <div className="flex flex-col gap-6 absolute top-4 lg:right-6 lg:w-[55%] lg:text-left text-center p-2 md:items-center lg:items-start">
        <h2 className="text-5xl font-bold"> Join Our Community Airdrops!</h2>
        <p className="text-medium md:w-[80%] ">
          Join us as we celebrate the launch of our project by offering
          exclusive rewards to our early supporters. By participating in our
          ecosystem, you'll have the opportunity to receive free token airdrops
          and access to exciting perks. Don't miss out on this chance to be part
          of our growing community!
        </p>
        <div className="bg-black bg-opacity-20 p-4 flex flex-col gap-2 md:w-[80%]">
          <ul className="list-disc px-3 text-left">
            <li>
              Free Tokens: Get free token airdrops simply by signing up and
              connecting to community discord and telegram channels. .
            </li>
            <li>
              Exclusive Rewards: Gain access to exclusive vip rewards and
              incentives only reserved for our early supporters.
            </li>
            <li>
              Community Engagement: Become an integral part of our community and
              participate in discussions, events, and future airdrops.
            </li>
            <li>
              Early Access: Be among the first to receive updates,
              announcements, and insights about our project's development.
              simply sign up.
            </li>
            <li>
              Supporting Innovation: By participating in our airdrops, you're
              supporting innovation and the growth of our project in the
              decentralized/cryptocurrency space.
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <CustInput type="email" label="Email Address" placeholder="Email" />
          <Button className="rounded md:mt-8 md:w-[220px]" color="secondary">
            Sign up
          </Button>
        </div>
        <p className="text-xs text-[#EBECED] md:w-[50%] text-left">
          Your email addresses will only be used for airdrop notifications and
          won't be shared with third parties.
        </p>
      </div>
    </div>
  );
};
