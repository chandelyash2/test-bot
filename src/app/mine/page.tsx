"use client";
import { Container } from "@/components/Container";
import { Layout } from "@/components/Layout";
import { MineBox } from "@/components/Mine/MineBox";
import { SpecialMineBox } from "@/components/Mine/SpecialMineBox";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const MinePage = () => {
  const [userData, setUserData] = useState<any>();

  const [active, setActive] = useState("Basic");

  return (
    <Layout>
      <Container>
        <div className="flex flex-col gap-4 pb-[120px] pt-4">
          <div className="flex items-center ">
            <Button
              className={twMerge(
                "rounded bg-[#242D32] h-10 w-full flex justify-center items-center text-white font-roboto",
                active === "Basic" && "bg-[#00ACE6]"
              )}
              onClick={() => setActive("Basic")}
            >
              Basic
            </Button>
            <Button
              className={twMerge(
                "rounded bg-[#242D32] h-10 w-full flex justify-center items-center text-white font-roboto",
                active === "Specials" && "bg-[#00ACE6]"
              )}
              onClick={() => setActive("Specials")}
            >
              Specials
            </Button>
          </div>
          {active === "Basic" ? (
            <div className="grid grid-cols-2 gap-2">
              <MineBox color="text-[#00ACE6]" locked={userData?.rank === 1} />
              <MineBox color="text-[#00ACE6]" locked={userData?.rank > 1} />
              <MineBox color="text-[#9D4EDD]" locked={userData?.rank >= 2} />
              <MineBox color="text-orange-400" locked={userData?.rank >= 3} />
              <MineBox color="text-[#00ACE6]" locked={userData?.rank >= 3} />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              <SpecialMineBox
                name="Everest"
                value="+11,5"
                price="825"
                ranking="Alpha Ranking"
                locked={userData?.rank >= 4}
                img="/img/Mine1.png"
              />
              <SpecialMineBox
                name="NFT collection"
                value="+11,5"
                price="1M"
                ranking="10 Friends"
                locked={userData?.rank >= 4}
                img="/img/Mine2.png"
              />
            </div>
          )}
        </div>
      </Container>
    </Layout>
  );
};

export default MinePage;
