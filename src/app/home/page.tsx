/* eslint-disable @next/next/no-img-element */
"use client";
import { Flash } from "@/components/Flash";
import { Layout } from "@/components/Layout";
import { imgs, User } from "@/lib/quest/type";
import { TelegramProvider, useTelegram } from "@/lib/TelegramProvider";
import axios from "axios";
import Image from "next/image";

import { useEffect, useState } from "react";

const array = [
  {
    id: 0,
    img: "/img/Home/Omega.png",
    name: "Sigma",
    value:"",
  },
  {
    id: 1,
    img: "/img/Home/Sigma.png",
    name: "Omega",
    value: "5M",
  },
  {
    id: 2,
    img: "/img/Home/Mid.png",
    name: "Mid Ranking",
    value: "10M",
  },
  {
    id: 3,
    img: "/img/Home/Beta.png",
    name: "Beta",
    value: "50M",
  },
  {
    id: 4,
    img: "/img/Home/Luna.png",
    name: "Luna",
    value: "100M",
  },
  {
    id: 5,
    img: "/img/Home/Nimbi.png",
    name: "Nimbi",
    value: "100M",
  },
];

export default function Home() {
  const [active, setActive] = useState(0);
  const { user, webApp } = useTelegram();
  const [userInfo, setUserInfo] = useState<User>();

  useEffect(() => {
    if (user) {
      fetchUserInfo();
    }
  }, [user]);

  const fetchUserInfo = async () => {
    if (user) {
      const data = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/userInfo`,
        {
          params: {
            userId: user.id,
          },
        }
      );
      if (data.data) {
        setUserInfo(data.data);
        const imgdata = imgs.find(
          (item) =>
            data.data.balance >= item.less && data.data.balance <= item.greater
        );
        imgdata?.rank && setActive(imgdata?.rank-1);
      }
    }
  };

  return (
    <>
      {user ? (
        <Layout>
          <div className="absolute flex flex-col items-center h-full top-0">
            <Image
              src={array[active].img}
              alt="home1"
              width={300}
              height={300}
              className="absolute top-[-40px]"
            />

            <div className="relative top-[40%]">
              <div className="bg-custom-gradient w-full h-[50px] z-30"></div>
              <div className="flex items-center justify-between p-2">
                <span
                  onClick={() => {
                    if (active > 0) {
                      setActive(active - 1);
                    }
                  }}
                >
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
                      fill-opacity="0.06"
                    />
                    <path
                      d="M19.6309 7.38226C19.8617 7.63709 19.9808 7.9369 19.988 8.28168C19.9952 8.62646 19.8762 8.92626 19.6309 9.1811L13.0732 15.9942L19.6309 22.8073C19.8617 23.0472 19.9844 23.3432 19.9988 23.6955C20.0132 24.0478 19.8978 24.3513 19.6525 24.6062C19.4217 24.861 19.1331 24.9922 18.7868 24.9997C18.4405 25.0072 18.152 24.8835 17.9211 24.6287L10.303 16.7362C10.202 16.6313 10.1262 16.5151 10.0757 16.3877C10.0253 16.2603 10 16.1291 10 15.9942C10 15.8593 10.0253 15.7281 10.0757 15.6007C10.1262 15.4733 10.202 15.3571 10.303 15.2522L17.8995 7.35977C18.1303 7.11992 18.4153 7 18.7544 7C19.0934 7 19.3856 7.12742 19.6309 7.38226Z"
                      fill="#767F84"
                    />
                  </svg>
                </span>
                {array.map((item) => (
                  <>
                    {item.id === active && (
                      <div
                        className="flex flex-col items-center gap-3 text-center"
                        key={item.id}
                      >
                        <div className="flex justify-center gap-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="31"
                            height="26"
                            viewBox="0 0 31 26"
                            fill="none"
                          >
                            <path
                              d="M30.37 14.4944L26.37 7.48494C26.2909 7.34597 26.1797 7.22799 26.0458 7.14089C25.9118 7.05378 25.759 7.00007 25.6 6.98426C25.4424 6.9693 25.2835 6.99138 25.1359 7.04875C24.9884 7.10612 24.8562 7.19719 24.75 7.31471L22.1 10.3188L16.36 0.465439C16.2665 0.322471 16.1389 0.205062 15.9888 0.123805C15.8386 0.0425479 15.6707 0 15.5 0C15.3293 0 15.1614 0.0425479 15.0112 0.123805C14.8611 0.205062 14.7335 0.322471 14.64 0.465439L8.9 10.3188L6.25 7.31471C6.14578 7.19464 6.01391 7.1018 5.86581 7.04422C5.71771 6.98665 5.55783 6.96607 5.4 6.98426C5.24105 7.00007 5.08819 7.05378 4.95423 7.14089C4.82026 7.22799 4.70908 7.34597 4.63 7.48494L0.63 14.4944C0.547447 14.645 0.502823 14.8134 0.5 14.9851V24.9986C0.5 25.2642 0.605357 25.5189 0.792893 25.7067C0.98043 25.8945 1.23478 26 1.5 26H29.5C29.7652 26 30.0196 25.8945 30.2071 25.7067C30.3946 25.5189 30.5 25.2642 30.5 24.9986V14.9851C30.4972 14.8134 30.4526 14.645 30.37 14.4944ZM10.79 18.2896C10.8823 18.1945 10.9926 18.1189 11.1146 18.0673C11.2365 18.0157 11.3676 17.9891 11.5 17.9891C11.6324 17.9891 11.7635 18.0157 11.8854 18.0673C12.0074 18.1189 12.1177 18.1945 12.21 18.2896L13.21 19.2909C13.3963 19.4785 13.5008 19.7323 13.5008 19.9969C13.5008 20.2614 13.3963 20.5152 13.21 20.7028C13.0204 20.889 12.7655 20.9933 12.5 20.9933C12.2345 20.9933 11.9796 20.889 11.79 20.7028L10.79 19.7015C10.6037 19.5139 10.4992 19.2601 10.4992 18.9955C10.4992 18.731 10.6037 18.4772 10.79 18.2896ZM20.79 16.2869L22.79 14.2841C22.977 14.0956 23.2311 13.9891 23.4965 13.9882C23.7618 13.9872 24.0167 14.0919 24.205 14.2791C24.3933 14.4664 24.4996 14.7208 24.5006 14.9866C24.5015 15.2523 24.397 15.5075 24.21 15.6961L22.21 17.6988C22.0204 17.8849 21.7655 17.9892 21.5 17.9892C21.2345 17.9892 20.9796 17.8849 20.79 17.6988C20.6038 17.5111 20.4992 17.2574 20.4992 16.9928C20.4992 16.7283 20.6038 16.4745 20.79 16.2869ZM15.5 2.95881L20.71 11.9009L15.5 17.8089L10.29 11.9009L15.5 2.95881Z"
                              fill="url(#paint0_linear_4369_3019)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_4369_3019"
                                x1="15.5"
                                y1="26"
                                x2="15.5"
                                y2="0"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#ECB5FF" />
                                <stop offset="1" stopColor="#7137ED" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <h2 className="font-istok font-bold text-2xl">
                            {item.name}
                          </h2>
                        </div>
                        <span className="text-blue-500 font-manrope font-semibold">
                          {item.value}
                        </span>
                        <p className="font-manrope w-[70%] text-sm">
                          The Luna wolf is the leader of the group, responsible
                          for protecting the pack, dealing with threats to the
                          pack’s survival, making decisions, and leading hunts.
                        </p>
                      </div>
                    )}
                  </>
                ))}
                <span
                  onClick={() => {
                    if (active < 5) {
                      setActive(active + 1);
                    }
                  }}
                >
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
                      fill-opacity="0.06"
                    />
                    <path
                      d="M12.3691 24.6177C12.1383 24.3629 12.0192 24.0631 12.012 23.7183C12.0048 23.3735 12.1238 23.0737 12.3691 22.8189L18.9268 16.0058L12.3691 9.19266C12.1383 8.95282 12.0156 8.65676 12.0012 8.30448C11.9868 7.95221 12.1022 7.64865 12.3475 7.39382C12.5783 7.13898 12.8669 7.00782 13.2132 7.00032C13.5595 6.99283 13.848 7.1165 14.0789 7.37133L21.697 15.2638C21.798 15.3687 21.8738 15.4849 21.9243 15.6123C21.9748 15.7397 22 15.8709 22 16.0058C22 16.1407 21.9748 16.2719 21.9243 16.3993C21.8738 16.5267 21.798 16.6429 21.697 16.7478L14.1005 24.6402C13.8697 24.8801 13.5847 25 13.2456 25C12.9066 25 12.6144 24.8726 12.3691 24.6177Z"
                      fill="#767F84"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Layout>
      ) : (
        <Flash />
      )}
    </>
  );
}

const WithTelegramProvider = () => {
  return (
    <TelegramProvider>
      <Home />
    </TelegramProvider>
  );
};
