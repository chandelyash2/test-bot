/* eslint-disable @next/next/no-img-element */
import { Button } from "@nextui-org/react";
import React from "react";
import { Container } from "@/components/Container";

export const WhitePaper = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <img
          src="/Nimbi.png"
          width={200}
          height={200}
          alt="mission"
          className="w-[265px] h-[265px] md:hidden"
        />
        <div className="flex flex-col gap-5 capitalize text-left lg:w-[52%]">
          <h2 className="font-medium text-4xl">Whitepaper</h2>
          <p className="capitalize">
            Explore the Nimbi whitepaper and get an in-depth breakdown of the
            unique benefits, innovative features, and overall vision of the
            NIMBI ecosystem and its native token. This clear, concise, and
            expertly crafted informational report will help you understand
            exactly what sets NIMBI apart from other crypto projects.
          </p>
          <p className="capitalize">
            Dive into our educational white paper and find out why taking this
            journey with us is an absolute no-brainer!
          </p>
        </div>
        <img
          src="/Nimbi.png"
          width={200}
          height={200}
          alt="mission"
          className="hidden md:flex w-full  md:w-[265px] md:h-[265px] lg:w-[290px] lg:h-[290px]"
        />
      </div>
    </Container>
  );
};
