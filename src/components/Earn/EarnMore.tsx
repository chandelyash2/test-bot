import { Button } from "@nextui-org/react";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useTelegram } from "@/lib/TelegramProvider";
import toast, { Toaster } from "react-hot-toast";
import Gif from "../../../public/img/Quest/Animation - 1721320428710.json";
import Image from "next/image";
interface EarnMoreProp {
  setEarnmore: (value: boolean) => void;
  userStreak: Streak;
  fetchStreakInfo: () => void;
}

const array = [
  {
    name: "Day1",
    value: 500,
    day: 1,
  },
  {
    name: "Day2",
    value: 1000,
    day: 2,
  },
  {
    name: "Day3",
    value: 1500,
    day: 3,
  },
  {
    name: "Day4",
    value: 5000,
    day: 4,
  },
  {
    name: "Day5",
    value: 10000,
    day: 5,
  },
  {
    name: "Day6",
    value: 100000,
    day: 6,
  },
  {
    name: "Day7",
    value: 500000,
    day: 7,
  },
];
export interface Streak {
  _id: string;
  day: number;
  upcoming: number;
  user: string;
  updatedAt: string;
}
export const EarnMore = ({
  setEarnmore,
  userStreak,
  fetchStreakInfo,

}: EarnMoreProp) => {
  const { user } = useTelegram();
  const [userData, setUserData] = useState<any>();
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    // Add a Tailwind CSS class to the body
    document.body.classList.add("overflow-hidden");

    // Optional: Clean up by removing the class when the component is unmounted
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
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
        setUserData(data.data);
      }
    }
  };
  const updateStreak = async (value: number) => {
    if (userStreak) {
      const output = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/updateStreak`,
        {
          _id: userStreak._id,
          day: userStreak.day + 1,
          upcoming: userStreak.upcoming + 1,
        }
      );
      if (output.data) {
        setShowIframe(true);

        toast.success("Reward Collected");
        await updateUser(userData.balance + value);
        fetchStreakInfo();
        setTimeout(() => {
          setShowIframe(false);
        }, 2000);
      }
    }
  };
  const updateUser = async (value: number) => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/updateUser`, {
      userId: userData.userId,
      balance: value,
    });
  };

  const parsedDatetime = moment(userStreak?.updatedAt);

  // Add 24 hours to the parsed datetime
  const expirationDatetime = parsedDatetime.add(24, "hours");
  const currentDatetime = moment();
  const disabled =
    userStreak?.day == 0 ? true : currentDatetime.isAfter(expirationDatetime);

  return (
    <div className="fixed h-screen w-full top-0 left-0 bg-black bg-opacity-25 backdrop-blur-sm z-[8] overflow-hidden">
      <div className="fixed bottom-0 z-[8] min-h-[300px] w-full left-0 bg-[#1C2327] flex flex-col items-center border-t border-[#54C7EE] rounded-t p-2 gap-6 overflow-hidden">
        <span
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setEarnmore(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M14.1666 5.83337L5.83331 14.1667M14.1666 14.1667L5.83331 5.83337"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <h2 className="font-istok font-bold text-3xl">Daily Rewards</h2>
        <p className="font-manrope text-[14px]">
          Play every day and receive Daily Rewards
        </p>
        <div className="grid grid-cols-3 gap-4">
        {showIframe && (
          <iframe
            src="https://giphy.com/embed/MCuCYXkXaSHIhA0t4L"
            frameBorder="0"
            className="giphy-embed absolute top-0 z-10 left-10 w-[300px] h-[300px]"
            allowFullScreen
          ></iframe>
        )}
          {array.map((item) => (
            <Button
              className={twMerge(
                "font-istok w-20 flex flex-col gap-1 h-20 items-center text-xs rounded z-8",
                item.day <= userStreak.day
                  ? "bg-[#334047] border border-[#00ACE6]"
                  : "bg-[#242D32]",
                disabled &&
                  item.day === userStreak?.upcoming &&
                  "border border-yellow-400"
              )}
              key={item.name}
              isDisabled={item.day > userStreak.upcoming || !disabled}
              onClick={() => updateStreak(item.value)}
            >
              <h4>{item.name}</h4>
              {item.day === userStreak?.day ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_4348_1502)">
                    <path
                      d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                      fill="#F0D64D"
                    />
                    <path
                      opacity="0.2"
                      d="M13.9699 0.820312L0.542603 13.2562C0.829746 14.0902 1.22645 14.8823 1.72229 15.6117L16.2278 2.17422C15.5381 1.62536 14.7789 1.17011 13.9699 0.820312ZM16.9067 2.76875L2.26135 16.3332C2.47307 16.5918 2.69703 16.8392 2.93323 17.0754L17.5949 3.49531C17.3778 3.24166 17.1481 2.99903 16.9067 2.76836V2.76875ZM18.3008 4.42188L3.80393 17.8492C4.45147 18.3612 5.16001 18.7909 5.91331 19.1285L19.4141 6.62227C19.1356 5.84552 18.7616 5.10639 18.3008 4.42188Z"
                      fill="white"
                    />
                    <path
                      d="M15.9176 15.9197C19.1869 12.6504 19.1869 7.34964 15.9176 4.08026C12.6482 0.810872 7.34745 0.810872 4.07807 4.08026C0.808685 7.34964 0.808685 12.6504 4.07807 15.9197C7.34745 19.1891 12.6482 19.1891 15.9176 15.9197Z"
                      fill="#FFFA89"
                    />
                    <path
                      d="M15.6566 15.6588C18.7818 12.5335 18.7818 7.46649 15.6566 4.34124C12.5313 1.21599 7.46431 1.21599 4.33906 4.34124C1.21381 7.46649 1.21381 12.5335 4.33906 15.6588C7.46431 18.784 12.5313 18.784 15.6566 15.6588Z"
                      fill="#DFBF4F"
                    />
                    <path
                      opacity="0.18"
                      d="M12.3277 2.341L2.1875 11.734C2.38336 12.6195 2.7291 13.465 3.20977 14.234L14.7418 3.55233C14.0118 3.01423 13.1954 2.60458 12.3277 2.341ZM15.4379 4.12889L3.73047 14.9726C3.93802 15.2343 4.16163 15.4828 4.4 15.7168L16.1285 4.8535C15.9136 4.59781 15.683 4.3558 15.4379 4.12889ZM16.8133 5.7996L5.28984 16.4711C5.97515 16.9705 6.73575 17.3574 7.54297 17.6172L17.7832 8.13358C17.5864 7.30886 17.2589 6.52092 16.8133 5.7996Z"
                      fill="#C8C8C8"
                    />
                    <path
                      d="M16.5625 3.43749C14.8111 1.75078 12.4677 0.818664 10.0362 0.841556C7.60476 0.864448 5.27935 1.84051 3.55996 3.5599C1.84057 5.27929 0.864509 7.6047 0.841617 10.0362C0.818725 12.4677 1.75084 14.811 3.43755 16.5625C5.18901 18.2492 7.53238 19.1813 9.96386 19.1584C12.3953 19.1355 14.7207 18.1595 16.4401 16.4401C18.1595 14.7207 19.1356 12.3953 19.1585 9.9638C19.1814 7.53232 18.2493 5.18894 16.5625 3.43749ZM10 19.1648C4.94653 19.1648 0.835205 15.0535 0.835205 9.99999C0.835205 4.94647 4.94653 0.835144 10 0.835144C15.0536 0.835144 19.1649 4.94647 19.1649 9.99999C19.1649 15.0535 15.0536 19.1648 10 19.1648Z"
                      fill="#F2C341"
                    />
                    <path
                      d="M9.25781 14.7981V13.9281C9.16693 13.911 9.0776 13.8905 8.98984 13.8668C8.67773 13.7823 8.37938 13.6533 8.10391 13.484C7.82229 13.3083 7.56489 13.0965 7.33828 12.8539L7.14844 12.6535L8.24453 11.3254L8.48555 11.6168C8.67313 11.8521 8.90819 12.0452 9.17539 12.1836C9.42615 12.3068 9.70227 12.3695 9.98164 12.3668C10.3766 12.3668 10.6652 12.2969 10.8391 12.159C10.9934 12.0371 11.0684 11.8438 11.0684 11.568V11.5625C11.0684 11.3988 11.0348 11.2746 10.9691 11.1934C10.8884 11.0954 10.7832 11.0206 10.6641 10.9766C10.4594 10.9021 10.2486 10.8459 10.034 10.8086H10.0266C10.0056 10.8065 9.98481 10.8027 9.96445 10.7973L9.92969 10.7906L9.87422 10.7801C9.49124 10.7143 9.11441 10.6167 8.74766 10.4883C8.41563 10.3645 8.13047 10.1399 7.89922 9.82032C7.66797 9.50079 7.54766 9.04962 7.54766 8.48868V8.48361C7.54766 7.94962 7.64922 7.49415 7.84922 7.13009C8.0574 6.75164 8.384 6.45194 8.77891 6.27697C8.93348 6.20693 9.09436 6.15174 9.25937 6.11212V5.20197H10.8965V6.06915L10.9746 6.08439C11.2267 6.13848 11.4725 6.21833 11.7082 6.32267C11.9548 6.43224 12.1915 6.56294 12.4156 6.71329L12.6863 6.89376L11.707 8.23986L11.457 8.07072C11.2573 7.93255 11.0407 7.82056 10.8125 7.73751C10.6231 7.67005 10.4237 7.6348 10.2227 7.63322C9.86289 7.63322 9.59766 7.70001 9.44141 7.83204C9.29727 7.94923 9.22734 8.13751 9.22734 8.40236V8.40743C9.22734 8.57501 9.26406 8.70118 9.33633 8.78204C9.42945 8.88497 9.54779 8.96185 9.67969 9.00509C9.92445 9.08524 10.1735 9.15149 10.4258 9.20353L10.4727 9.21525L10.5031 9.22189L10.557 9.23322L10.5961 9.24181H10.6035C10.9635 9.3157 11.3143 9.42888 11.6496 9.57931C11.9747 9.73666 12.2479 9.98393 12.4367 10.2918C12.6441 10.616 12.7492 11.05 12.7492 11.5809V11.5906C12.7492 12.1113 12.643 12.5563 12.4332 12.9129C12.2176 13.2797 11.8938 13.5567 11.4699 13.7367C11.2857 13.8134 11.0943 13.8712 10.8984 13.9094V14.7961L9.25781 14.7981Z"
                      fill="#FFFA89"
                    />
                    <path
                      d="M9.07222 13.5652C8.78896 13.4887 8.51821 13.3717 8.26831 13.218C8.00948 13.0571 7.77305 12.8627 7.56519 12.6399L8.24487 11.816C8.4601 12.0853 8.72979 12.306 9.03628 12.4637C9.33019 12.6085 9.65396 12.6823 9.98159 12.6793C10.4503 12.6793 10.8009 12.5882 11.0332 12.4059C11.2654 12.2236 11.3813 11.9449 11.3808 11.5699V11.5625C11.3808 11.3248 11.3246 11.1362 11.2121 10.9969C11.0966 10.856 10.9459 10.7482 10.7753 10.6844C10.553 10.6029 10.3239 10.5414 10.0906 10.5008C10.0818 10.4977 10.0726 10.496 10.0632 10.4957C10.0539 10.4955 10.0447 10.4939 10.0359 10.491L9.98394 10.4809L9.93159 10.4711C9.48888 10.3883 9.13003 10.2956 8.85503 10.193C8.58003 10.0904 8.34565 9.90431 8.1519 9.63478C7.95685 9.36525 7.85933 8.98243 7.85933 8.48634V8.48126C7.85933 7.99845 7.94696 7.59741 8.12222 7.27814C8.29819 6.95844 8.57452 6.70558 8.90854 6.55861C9.25776 6.39819 9.69526 6.31798 10.221 6.31798C10.4521 6.31787 10.6825 6.34196 10.9085 6.38986C11.1395 6.43938 11.3648 6.51255 11.5808 6.60822C11.8109 6.71054 12.0316 6.83261 12.2406 6.97306L11.63 7.81251C11.4079 7.65899 11.1668 7.53478 10.9128 7.44298C10.6906 7.36394 10.4566 7.32287 10.2207 7.3215C9.78394 7.3215 9.45646 7.4116 9.23823 7.59181C9.02 7.77202 8.91089 8.04246 8.91089 8.40314V8.40822C8.91089 8.65639 8.97378 8.85066 9.09956 8.99103C9.22801 9.13366 9.39127 9.24053 9.57339 9.30118C9.82968 9.38521 10.0905 9.45473 10.3546 9.50939L10.3937 9.51954C10.407 9.52267 10.4218 9.52618 10.4382 9.52931L10.4855 9.53947L10.5328 9.54923C10.87 9.61785 11.1985 9.72357 11.5125 9.86447C11.7843 9.99656 12.0125 10.204 12.1699 10.4621C12.3454 10.7366 12.433 11.1104 12.4328 11.5836V11.5934C12.4328 12.0598 12.3416 12.4477 12.1593 12.757C11.977 13.0664 11.7049 13.2981 11.3429 13.452C10.9807 13.6054 10.5268 13.6822 9.9812 13.6824C9.67435 13.6839 9.36867 13.6445 9.07222 13.5652ZM9.57026 5.51447H10.5828V6.64728H9.57026V5.51447ZM9.57026 13.2899H10.5828V14.4856H9.57026V13.2899Z"
                      fill="#F0D64D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4348_1502">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_4348_1578)">
                    <path
                      d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                      fill="#C8C8C8"
                    />
                    <path
                      opacity="0.2"
                      d="M13.9699 0.820312L0.542603 13.2562C0.829746 14.0902 1.22645 14.8823 1.72229 15.6117L16.2278 2.17422C15.5381 1.62536 14.7789 1.17011 13.9699 0.820312ZM16.9067 2.76875L2.26135 16.3332C2.47307 16.5918 2.69703 16.8392 2.93323 17.0754L17.5949 3.49531C17.3778 3.24166 17.1481 2.99903 16.9067 2.76836V2.76875ZM18.3008 4.42188L3.80393 17.8492C4.45147 18.3612 5.16001 18.7909 5.91331 19.1285L19.4141 6.62227C19.1356 5.84552 18.7616 5.10639 18.3008 4.42188Z"
                      fill="white"
                    />
                    <path
                      d="M15.9176 15.9197C19.1869 12.6504 19.1869 7.34964 15.9176 4.08026C12.6482 0.810872 7.34745 0.810872 4.07807 4.08026C0.808685 7.34964 0.808685 12.6504 4.07807 15.9197C7.34745 19.1891 12.6482 19.1891 15.9176 15.9197Z"
                      fill="#7A7A7A"
                    />
                    <path
                      d="M15.6566 15.6588C18.7818 12.5335 18.7818 7.46649 15.6566 4.34124C12.5313 1.21599 7.46431 1.21599 4.33906 4.34124C1.21381 7.46649 1.21381 12.5335 4.33906 15.6588C7.46431 18.784 12.5313 18.784 15.6566 15.6588Z"
                      fill="#888888"
                    />
                    <path
                      opacity="0.18"
                      d="M12.3277 2.341L2.1875 11.734C2.38336 12.6195 2.7291 13.465 3.20977 14.234L14.7418 3.55233C14.0118 3.01423 13.1954 2.60458 12.3277 2.341ZM15.4379 4.12889L3.73047 14.9726C3.93802 15.2343 4.16163 15.4828 4.4 15.7168L16.1285 4.8535C15.9136 4.59781 15.683 4.3558 15.4379 4.12889ZM16.8133 5.7996L5.28984 16.4711C5.97515 16.9705 6.73575 17.3574 7.54297 17.6172L17.7832 8.13358C17.5864 7.30886 17.2589 6.52092 16.8133 5.7996Z"
                      fill="#C8C8C8"
                    />
                    <path
                      d="M16.5625 3.43749C14.8111 1.75078 12.4677 0.818664 10.0362 0.841556C7.60476 0.864448 5.27935 1.84051 3.55996 3.5599C1.84057 5.27929 0.864509 7.6047 0.841617 10.0362C0.818725 12.4677 1.75084 14.811 3.43755 16.5625C5.18901 18.2492 7.53238 19.1813 9.96386 19.1584C12.3953 19.1355 14.7207 18.1595 16.4401 16.4401C18.1595 14.7207 19.1356 12.3953 19.1585 9.9638C19.1814 7.53232 18.2493 5.18894 16.5625 3.43749ZM10 19.1648C4.94653 19.1648 0.835205 15.0535 0.835205 9.99999C0.835205 4.94647 4.94653 0.835144 10 0.835144C15.0536 0.835144 19.1649 4.94647 19.1649 9.99999C19.1649 15.0535 15.0536 19.1648 10 19.1648Z"
                      fill="#F2C341"
                    />
                    <path
                      d="M9.25781 14.7981V13.9281C9.16693 13.911 9.0776 13.8905 8.98984 13.8668C8.67773 13.7823 8.37938 13.6533 8.10391 13.484C7.82229 13.3083 7.56489 13.0965 7.33828 12.8539L7.14844 12.6535L8.24453 11.3254L8.48555 11.6168C8.67313 11.8521 8.90819 12.0452 9.17539 12.1836C9.42615 12.3068 9.70227 12.3695 9.98164 12.3668C10.3766 12.3668 10.6652 12.2969 10.8391 12.159C10.9934 12.0371 11.0684 11.8438 11.0684 11.568V11.5625C11.0684 11.3988 11.0348 11.2746 10.9691 11.1934C10.8884 11.0954 10.7832 11.0206 10.6641 10.9766C10.4594 10.9021 10.2486 10.8459 10.034 10.8086H10.0266C10.0056 10.8065 9.98481 10.8027 9.96445 10.7973L9.92969 10.7906L9.87422 10.7801C9.49124 10.7143 9.11441 10.6167 8.74766 10.4883C8.41563 10.3645 8.13047 10.1399 7.89922 9.82032C7.66797 9.50079 7.54766 9.04962 7.54766 8.48868V8.48361C7.54766 7.94962 7.64922 7.49415 7.84922 7.13009C8.0574 6.75164 8.384 6.45194 8.77891 6.27697C8.93348 6.20693 9.09436 6.15174 9.25937 6.11212V5.20197H10.8965V6.06915L10.9746 6.08439C11.2267 6.13848 11.4725 6.21833 11.7082 6.32267C11.9548 6.43224 12.1915 6.56294 12.4156 6.71329L12.6863 6.89376L11.707 8.23986L11.457 8.07072C11.2573 7.93255 11.0407 7.82056 10.8125 7.73751C10.6231 7.67005 10.4237 7.6348 10.2227 7.63322C9.86289 7.63322 9.59766 7.70001 9.44141 7.83204C9.29727 7.94923 9.22734 8.13751 9.22734 8.40236V8.40743C9.22734 8.57501 9.26406 8.70118 9.33633 8.78204C9.42945 8.88497 9.54779 8.96185 9.67969 9.00509C9.92445 9.08524 10.1735 9.15149 10.4258 9.20353L10.4727 9.21525L10.5031 9.22189L10.557 9.23322L10.5961 9.24181H10.6035C10.9635 9.3157 11.3143 9.42888 11.6496 9.57931C11.9747 9.73666 12.2479 9.98393 12.4367 10.2918C12.6441 10.616 12.7492 11.05 12.7492 11.5809V11.5906C12.7492 12.1113 12.643 12.5563 12.4332 12.9129C12.2176 13.2797 11.8938 13.5567 11.4699 13.7367C11.2857 13.8134 11.0943 13.8712 10.8984 13.9094V14.7961L9.25781 14.7981Z"
                      fill="#7A7A7A"
                    />
                    <path
                      d="M9.07222 13.5652C8.78896 13.4887 8.51821 13.3717 8.26831 13.218C8.00948 13.0571 7.77305 12.8627 7.56519 12.6399L8.24487 11.816C8.4601 12.0853 8.72979 12.306 9.03628 12.4637C9.33019 12.6085 9.65396 12.6823 9.98159 12.6793C10.4503 12.6793 10.8009 12.5882 11.0332 12.4059C11.2654 12.2236 11.3813 11.9449 11.3808 11.5699V11.5625C11.3808 11.3248 11.3246 11.1362 11.2121 10.9969C11.0966 10.856 10.9459 10.7482 10.7753 10.6844C10.553 10.6029 10.3239 10.5414 10.0906 10.5008C10.0818 10.4977 10.0726 10.496 10.0632 10.4957C10.0539 10.4955 10.0447 10.4939 10.0359 10.491L9.98394 10.4809L9.93159 10.4711C9.48888 10.3883 9.13003 10.2956 8.85503 10.193C8.58003 10.0904 8.34565 9.90431 8.1519 9.63478C7.95685 9.36525 7.85933 8.98243 7.85933 8.48634V8.48126C7.85933 7.99845 7.94696 7.59741 8.12222 7.27814C8.29819 6.95844 8.57452 6.70558 8.90854 6.55861C9.25776 6.39819 9.69526 6.31798 10.221 6.31798C10.4521 6.31787 10.6825 6.34196 10.9085 6.38986C11.1395 6.43938 11.3648 6.51255 11.5808 6.60822C11.8109 6.71054 12.0316 6.83261 12.2406 6.97306L11.63 7.81251C11.4079 7.65899 11.1668 7.53478 10.9128 7.44298C10.6906 7.36394 10.4566 7.32287 10.2207 7.3215C9.78394 7.3215 9.45646 7.4116 9.23823 7.59181C9.02 7.77202 8.91089 8.04246 8.91089 8.40314V8.40822C8.91089 8.65639 8.97378 8.85066 9.09956 8.99103C9.22801 9.13366 9.39127 9.24053 9.57339 9.30118C9.82968 9.38521 10.0905 9.45473 10.3546 9.50939L10.3937 9.51954C10.407 9.52267 10.4218 9.52618 10.4382 9.52931L10.4855 9.53947L10.5328 9.54923C10.87 9.61785 11.1985 9.72357 11.5125 9.86447C11.7843 9.99656 12.0125 10.204 12.1699 10.4621C12.3454 10.7366 12.433 11.1104 12.4328 11.5836V11.5934C12.4328 12.0598 12.3416 12.4477 12.1593 12.757C11.977 13.0664 11.7049 13.2981 11.3429 13.452C10.9807 13.6054 10.5268 13.6822 9.9812 13.6824C9.67435 13.6839 9.36867 13.6445 9.07222 13.5652ZM9.57026 5.51447H10.5828V6.64728H9.57026V5.51447ZM9.57026 13.2899H10.5828V14.4856H9.57026V13.2899Z"
                      fill="#C8C8C8"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4348_1578">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
              <h4>{item.value}</h4>
            </Button>
          ))}
        </div>
        <Button
          className="w-full text-white rounded bg-[#5C666C] mb-6"
          onClick={() => setEarnmore(false)}
          isDisabled={disabled}
        >
          Come back tomorrow
        </Button>
      </div>
      <Toaster />
    </div>
  );
};
