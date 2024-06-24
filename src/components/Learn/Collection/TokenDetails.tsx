"use client";
import React, { useState } from "react";
import { Container } from "@/components/Container";

export const TokenDetails = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      // Reset the copied state after a short delay
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };
  return (
    <Container>
      <div className="flex flex-col gap-5 text-center">
        <h2 className="text-4xl font-medium">TOKEN DETAILS</h2>
        <p className="text-[#EBECED] capitalize">
          Use the contract informat below to add the Nimbi token to your wallet.
        </p>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex flex-col lg:w-[600px] p-4 border-1 border-[#5C666C] gap-6 bg-[#2E3A41] text-left">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between lg:grid lg:grid-cols-3 text-sm lg:text-medium lg:gap-20 items-center bg-[#242D32] p-1">
                <span>Token Name</span>
                <span>Token Sale Stage</span>
                <span>Token Type</span>
              </div>
              <div className="flex justify-between lg:grid lg:grid-cols-3 text-sm lg:text-medium lg:gap-20 items-center text-[#C0C4C6] p-1">
                <span>NIMBI</span>
                <span>12</span>
                <span>BASE</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between lg:grid lg:grid-cols-3 text-sm lg:text-medium lg:gap-20 items-center bg-[#242D32] p-1">
                <span>Token Symbol</span>
                <span>Decimal</span>
              </div>
              <div className="flex justify-between lg:grid lg:grid-cols-3 text-sm lg:text-medium lg:gap-20 items-center text-[#C0C4C6] p-1">
                <span>NIMBI</span>
                <span>18</span>
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-1">
              <h4 className="text-[#C0C4C6] font-semibold">
                Token Contract Address
              </h4>
              <div className="flex items-center gap-6">
                <p className="text-sm text-secondary">
                0xa81d1bc934..........e372b6589e
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  className="cursor-pointer"
                  onClick={() =>
                    handleCopy("0xa81d1bc93486f9aaa394f587a9dfa7e372b6589e")
                  }
                >
                  <path
                    d="M4.71338 22.4751C4.31338 22.4751 3.96338 22.3251 3.66338 22.0251C3.36338 21.7251 3.21338 21.3751 3.21338 20.9751V5.9001H4.71338V20.9751H16.5634V22.4751H4.71338ZM7.71338 19.4751C7.31338 19.4751 6.96338 19.3251 6.66338 19.0251C6.36338 18.7251 6.21338 18.3751 6.21338 17.9751V3.9751C6.21338 3.5751 6.36338 3.2251 6.66338 2.9251C6.96338 2.6251 7.31338 2.4751 7.71338 2.4751H18.7134C19.1134 2.4751 19.4634 2.6251 19.7634 2.9251C20.0634 3.2251 20.2134 3.5751 20.2134 3.9751V17.9751C20.2134 18.3751 20.0634 18.7251 19.7634 19.0251C19.4634 19.3251 19.1134 19.4751 18.7134 19.4751H7.71338ZM7.71338 17.9751H18.7134V3.9751H7.71338V17.9751Z"
                    fill="#EBECED"
                  />
                </svg>
                {copied && (
                  <p className="flex items-center text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3.3335 8.00002L6.66683 11.3334L12.6668 4.66669"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Copied to clipboard
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:w-[486px] p-4 border-1 border-[#5C666C] gap-4 bg-[#2E3A41] text-left">
            <div className="flex flex-col gap-1">
              <div className=" bg-[#242D32] p-1">
                <span>Pre-sale Details</span>
              </div>
              <p className="text-semibold text-[#C0C4C6]">
                Token sold during the Pre-sale
              </p>
              <p className="text-sm text-[#C0C4C6]">350,000,000 NIMBI</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="bg-[#242D32] p-1 mt-4">
                <span>Current Stage Price</span>
              </div>
              <p className="text-sm text-[#C0C4C6]">1 NIMBI = $ 0.005</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="bg-[#242D32] p-1 mt-4">
                <span>Exchange Listing Price</span>
              </div>
              <p className="text-sm text-[#C0C4C6]">1 NIMBI = $0.0125</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
