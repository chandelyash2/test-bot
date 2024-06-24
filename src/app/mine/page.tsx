"use client";
import { Container } from "@/components/Container";
import { Layout } from "@/components/Layout";
import { MineBox } from "@/components/Mine/MineBox";
import { SpecialMineBox } from "@/components/Mine/SpecialMineBox";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const MinePage = () => {
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
              <MineBox
                color="text-[#00ACE6]"
                value={10}
                price={25}
                ranking="Unlocked"
                locked={false}
              />
              <MineBox
                color="text-[#9D4EDD]"
                value={20}
                price={55}
                ranking="Mid Ranking"
                locked={false}
              />
              <MineBox
                color="text-orange-400"
                value={20}
                price={55}
                ranking="Mid Ranking"
                locked={false}
              />
              <MineBox
                color="text-[#00ACE6]"
                value={20}
                price={55}
                ranking="Mid Ranking"
                locked={true}
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              <SpecialMineBox
                name="Everest"
                value="+11,5"
                price="825"
                ranking="Alpha Ranking"
                locked={false}
                img="/img/Mine1.png"
              />
              <SpecialMineBox
                name="NFT collection"
                value="+11,5"
                price="1M"
                ranking="10 Friends"
                locked={true}
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
