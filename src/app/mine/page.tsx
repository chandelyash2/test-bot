"use client";
import { Container } from "@/components/Container";
import { Layout } from "@/components/Layout";
import { MineBox } from "@/components/Mine/MineBox";
import { SpecialMineBox } from "@/components/Mine/SpecialMineBox";
import { mineArr } from "@/lib/quest/type";
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
              {mineArr.map((mine, i) => (
                <MineBox color="text-[#00ACE6]" mine={mine} key={mine.name}  />
              ))}
            </div>
          ) : (
            <p className="font-bold text-xl flex justify-center mt-20">
              Coming Soon...
            </p>
          )}
        </div>
      </Container>
    </Layout>
  );
};

export default MinePage;
