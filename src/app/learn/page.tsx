"use client";
import { Container } from "@/components/Container";
import { Layout } from "@/components/Layout";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import Sigma from "../../../public/svg/Sigma.svg";
import Omega from "../../../public/svg/Omega.svg";
import MidRank from "../../../public/svg/MidRank.svg";
import Beta from "../../../public/svg/Beta.svg";
import Luna from "../../../public/svg/Luna.svg";
import Nimbi from "../../../public/svg/Nimbi.svg";
import Image from "next/image";
import { NimbiToken } from "@/components/Learn/NimbiToken";
import { Collection } from "@/components/Learn/Collection";

const array = [
  {
    name: "Sigma",
    icon: Sigma,
    description:
      "Sigma wolves are usually of in-pack relations as betas and alphas. They are considered wolves with a strong sense of loyalty and respect for the pack’s hierarchy. They often have a good meal after a hunt and are given more freedom to make decisions.",
    color: "#B0B5BC",
    img: "/img/Sigma.png",
    text: "25 000",
  },
  {
    name: "Omega",
    icon: Omega,
    description:
      "Sigma wolves are usually of in-pack relations as betas and alphas. They are considered wolves with a strong sense of loyalty and respect for the pack’s hierarchy. They often have a good meal after a hunt and are given more freedom to make decisions.",
    color: "#847343",
    img: "/img/Omega.png",
    text: "250 000 + 5 Active Friends",
  },
  {
    name: "Mid Ranking Wolf",
    icon: MidRank,
    description:
      "Sigma wolves are usually of in-pack relations as betas and alphas. They are considered wolves with a strong sense of loyalty and respect for the pack’s hierarchy. They often have a good meal after a hunt and are given more freedom to make decisions.",
    color: "#EBAC0B",
    img: "/img/MidRank.png",
    text: "500 000 or 15 Active Friends",
  },
  {
    name: "Beta",
    icon: Beta,
    description:
      "Sigma wolves are usually of in-pack relations as betas and alphas. They are considered wolves with a strong sense of loyalty and respect for the pack’s hierarchy. They often have a good meal after a hunt and are given more freedom to make decisions.",
    color: "#668F97",
    img: "/img/Beta.png",
    text: "+5 000 000or 25 Active Friends",
  },
];
const alphaArry = [
  {
    name: "Luna",
    icon: Luna,
    description:
      "Sigma wolves are usually of in-pack relations as betas and alphas. They are considered wolves with a strong sense of loyalty and respect for the pack’s hierarchy. They often have a good meal after a hunt and are given more freedom to make decisions.",
    color: "#8E64F1",
    img: "/img/Luna.png",
    text: "+5 000 000 + 35 Active Friends",
  },
  {
    name: "Nimbi",
    icon: Nimbi,
    description:
      "Sigma wolves are usually of in-pack relations as betas and alphas. They are considered wolves with a strong sense of loyalty and respect for the pack’s hierarchy. They often have a good meal after a hunt and are given more freedom to make decisions.",
    color: "#00ACE6",
    img: "/img/Nimbi.png",
    text: "+15 000 000 + 100 Active Friends",
  },
];
const LearnPage = () => {
  const [active, setActive] = useState("Platform Overview");
  const [accordion, setAccordion] = useState("");
  return (
    <Layout>
      <Container>
        <div className={twMerge("flex flex-col gap-4 pb-[140px] pt-4")}>
          <div className="flex items-center">
            <Button
              className={twMerge(
                "rounded bg-[#242D32] h-10 w-full flex justify-center items-center text-white font-roboto",
                active === "Platform Overview" && "bg-[#00ACE6]"
              )}
              onClick={() => setActive("Platform Overview")}
            >
              Platform Overview
            </Button>
            <Button
              className={twMerge(
                "rounded bg-[#242D32] h-10 w-full flex justify-center items-center text-white font-roboto",
                active === "Nimbi Quest" && "bg-[#00ACE6]"
              )}
              onClick={() => setActive("Nimbi Quest")}
            >
              Nimbi Quest
            </Button>
          </div>

          {active === "Platform Overview" && (
            <div className="flex flex-col gap-10">
              <NimbiToken />
              <Collection />
            </div>
          )}
          {active === "Nimbi Quest" && (
            <>
              <div className="flex items-center justify-between">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <rect
                      x="32"
                      y="32"
                      width="32"
                      height="32"
                      rx="16"
                      transform="rotate(-180 32 32)"
                      fill="white"
                      fill-opacity="0.08"
                    />
                    <path
                      d="M19.6309 7.38226C19.8617 7.63709 19.9808 7.9369 19.988 8.28168C19.9952 8.62646 19.8762 8.92626 19.6309 9.1811L13.0732 15.9942L19.6309 22.8073C19.8617 23.0472 19.9844 23.3432 19.9988 23.6955C20.0132 24.0478 19.8978 24.3513 19.6525 24.6062C19.4217 24.861 19.1331 24.9922 18.7868 24.9997C18.4405 25.0072 18.152 24.8835 17.9211 24.6287L10.303 16.7362C10.202 16.6313 10.1262 16.5151 10.0757 16.3877C10.0253 16.2603 10 16.1291 10 15.9942C10 15.8593 10.0253 15.7281 10.0757 15.6007C10.1262 15.4733 10.202 15.3571 10.303 15.2522L17.8995 7.35977C18.1303 7.11992 18.4153 7 18.7544 7C19.0934 7 19.3856 7.12742 19.6309 7.38226Z"
                      fill="#5C666C"
                    />
                  </svg>
                </span>
                <div className="text-center">
                  <h2 className="font-istok text-lg font-semibold text-center">
                    Wolfpack Ranking
                  </h2>
                  <span className="font-istok text-sm">1 of 12</span>
                </div>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <rect
                      width="32"
                      height="32"
                      rx="16"
                      fill="white"
                      fill-opacity="0.08"
                    />
                    <path
                      d="M12.3691 24.6177C12.1383 24.3629 12.0192 24.0631 12.012 23.7183C12.0048 23.3735 12.1238 23.0737 12.3691 22.8189L18.9268 16.0058L12.3691 9.19266C12.1383 8.95282 12.0156 8.65676 12.0012 8.30448C11.9868 7.95221 12.1022 7.64865 12.3475 7.39382C12.5783 7.13898 12.8669 7.00782 13.2132 7.00032C13.5595 6.99283 13.848 7.1165 14.0789 7.37133L21.697 15.2638C21.798 15.3687 21.8738 15.4849 21.9243 15.6123C21.9748 15.7397 22 15.8709 22 16.0058C22 16.1407 21.9748 16.2719 21.9243 16.3993C21.8738 16.5267 21.798 16.6429 21.697 16.7478L14.1005 24.6402C13.8697 24.8801 13.5847 25 13.2456 25C12.9066 25 12.6144 24.8726 12.3691 24.6177Z"
                      fill="#5C666C"
                    />
                  </svg>
                </span>
              </div>
              <div>
                {array.map((item) => (
                  <div
                    className=" bg-[#242D32] rounded mt-2 p-2 flex flex-col gap-2"
                    key={item.name}
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src={item.img}
                        width={66}
                        height={66}
                        alt={item.name}
                      />
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-2">
                          <Image
                            src={item.icon}
                            width={21}
                            height={18}
                            alt={item.name}
                          />

                          <h2 className="text-roboto font-bold text-sm">
                            {item.name}
                          </h2>
                        </div>
                        <div className="flex gap-2 items-center font-roboto text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="9"
                            viewBox="0 0 8 9"
                            fill="none"
                          >
                            <circle
                              cx="4"
                              cy="4.5"
                              r="4"
                              fill={`${item.color}`}
                            />
                          </svg>
                          <span>{item.text}</span>
                        </div>
                      </div>
                      {item.name !== accordion ? (
                        <span
                          className="absolute right-5"
                          onClick={() => setAccordion(item.name)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M14 8L10 12L6 8"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      ) : (
                        <span
                          className="absolute right-5"
                          onClick={() => setAccordion("")}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M6 12L10 8L14 12"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      )}
                    </div>
                    {accordion === item.name && (
                      <p className="font-roboto text-sm">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
              <div>
                <h2 className="font-istok font-bold">Alpha Family</h2>
                {alphaArry.map((item) => (
                  <div
                    className=" bg-[#242D32] rounded mt-2 p-2 flex flex-col gap-2"
                    key={item.name}
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src={item.img}
                        width={66}
                        height={66}
                        alt={item.name}
                      />
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-2">
                          <Image
                            src={item.icon}
                            width={21}
                            height={18}
                            alt={item.name}
                          />

                          <h2 className="text-roboto font-bold text-sm">
                            {item.name}
                          </h2>
                        </div>
                        <div className="flex gap-2 items-center font-roboto text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="9"
                            viewBox="0 0 8 9"
                            fill="none"
                          >
                            <circle
                              cx="4"
                              cy="4.5"
                              r="4"
                              fill={`${item.color}`}
                            />
                          </svg>
                          <span>{item.text}</span>
                        </div>
                      </div>
                      {item.name !== accordion ? (
                        <span
                          className="absolute right-5"
                          onClick={() => setAccordion(item.name)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M14 8L10 12L6 8"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      ) : (
                        <span
                          className="absolute right-5"
                          onClick={() => setAccordion("")}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M6 12L10 8L14 12"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      )}
                    </div>
                    {accordion === item.name && (
                      <p className="font-roboto text-sm">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </Container>
    </Layout>
  );
};

export default LearnPage;
