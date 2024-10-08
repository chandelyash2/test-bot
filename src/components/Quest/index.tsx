"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import axios from "axios";
import { debounce } from "lodash";
import { useTelegram } from "@/lib/TelegramProvider";
import { Flash } from "../Flash";
import { Container } from "@/components/Container";
import { Layout } from "@/components/Layout";
import { Progress } from "@nextui-org/react";
import QuestMine from "../../../public/svg/QuestMine.svg";
import Dollar from "../../../public/svg/Dollar.svg";
import Light from "../../../public/svg/Light.svg";
import Boost from "../../../public/svg/Boost.svg";
import Wolf from "../../../public/svg/H Vector.svg";
import { imgs, User } from "@/lib/quest/type";
import Link from "next/link";

interface Click {
  x: number;
  y: number;
  animationId: number; // Unique identifier for the animation
}

const Quest = () => {
  const { user } = useTelegram();
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [clicks, setClicks] = useState<Click[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isZooming, setIsZooming] = useState(false);

  const touchHandledRef = useRef(false);

  useEffect(() => {
    if (user) {
      createUser();
    }
  }, [user]);

  useEffect(() => {
    intervalRef.current = setInterval(fetchUserInfo, 5000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [user]);

  const createUser = async () => {
    try {
      if (user?.id) {
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/createUser`,
          {
            userId: user.id,
            firstName: user.first_name,
            lastName: user.last_name,
          }
        );
        console.log("User Data:", data);
        setUserInfo(data);
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const fetchUserInfo = async () => {
    try {
      if (user) {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/userInfo`,
          {
            params: {
              userId: user.id,
            },
          }
        );
        setUserInfo(data);
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  const updateUser = async (count: number, boost: number, ranking: any) => {
    try {
      if (userInfo) {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/updateUser`, {
          userId: userInfo.userId,
          balance: count,
          boost: { ...userInfo.boost, used: boost },
          ranking,
        });
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const debouncedUpdateUser = useCallback(
    debounce((newBalance: number, boost: number, ranking: any) => {
      updateUser(newBalance, boost, ranking);
    }, 300),
    [userInfo]
  );

  useEffect(() => {
    if (userInfo && userInfo.boost?.used < userInfo.boost?.total) {
      intervalRef.current = setInterval(() => {
        setUserInfo(
          (prev) =>
            prev && {
              ...prev,
              boost: {
                ...prev.boost,
                used: prev.boost.used + 1,
              },
            }
        );
      }, 1000);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [userInfo]);

  const handleClick = (x: number, y: number) => {
    if (userInfo && userInfo.boost.used > 0) {
      const animationId = Date.now(); // Unique identifier for each click animation

      setClicks((prevClicks) => [...prevClicks, { x, y, animationId }]);
      setIsZooming(true);
      setTimeout(() => {
        setIsZooming(false); // Reset after animation
      }, 500);

      let ranking = userInfo.ranking;
      if (
        userInfo.ranking.rank < 5 &&
        userInfo.balance > userInfo.ranking.greater
      ) {
        ranking = {
          rank: userInfo.ranking.rank + 1,
          less: 0,
          greater:
            imgs.find((item) => item.rank === userInfo.ranking.rank + 1)
              ?.greater || 0,
        };
      }

      const numTaps = Math.min(userInfo.boost.used, 1);
      const newBalance = userInfo.balance + userInfo.tap * numTaps;
      const newBoostUsed = Math.max(userInfo.boost.used - numTaps, 0);

      debouncedUpdateUser(newBalance, newBoostUsed, ranking);

      setUserInfo(
        (prev: any) =>
          prev && {
            ...prev,
            balance: newBalance,
            boost: {
              ...prev.boost,
              used: newBoostUsed,
            },
            ranking,
          }
      );

      setTimeout(() => {
        setClicks((prevClicks) =>
          prevClicks.filter((click) => click.animationId !== animationId)
        );
      }, 600); // Match duration to animation length
    }
  };

  const handleQuestInteraction = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    if (e.type === "touchend") {
      const touches = (e as React.TouchEvent<HTMLDivElement>).touches;
      for (let i = 0; i < touches.length; i++) {
        const x = touches[i].clientX - rect.left;
        const y = touches[i].clientY - rect.top;
        handleClick(x, y);
      }
    } else {
      const x = (e as React.MouseEvent<HTMLDivElement>).clientX - rect.left;
      const y = (e as React.MouseEvent<HTMLDivElement>).clientY - rect.top;
      handleClick(x, y);
    }
  };

  const img =
    userInfo && imgs.find((item) => item.rank === userInfo.ranking.rank);
  const progressValue = userInfo
    ? (userInfo.balance / userInfo.ranking.greater) * 100
    : 0;

  return (
    <>
      {userInfo ? (
        <Layout>
          <div className="flex flex-col gap-4 pb-[80px]">
            <div className="flex items-center justify-between border-b border-[#5C666C] p-4">
              <span className="flex items-center gap-4">
                <span className="rounded bg-[#242D32] p-1">
                  <Image
                    src="/img/Default.png"
                    alt="avatar"
                    width={30}
                    height={30}
                  />
                </span>{" "}
                <h2 className="font-inter font-bold font-sm">
                  {userInfo.firstName} {userInfo.lastName}
                </h2>
              </span>
              <span className="flex items-center gap-2 p-3 bg-[#242D32]">
                <Image src={QuestMine} alt="quest" />
                <h2 className="text-xs font-semibold font-roboto">
                  Auto Mining{" "}
                  <span className="font-semibold">
                    {userInfo.mine.profit.toLocaleString()} hr
                  </span>
                </h2>
              </span>
            </div>
            <Container>
              <div className="flex justify-between font-manrope font-medium text-xs items-center">
                <span className="flex items-center gap-4">
                  <h4>Rank {userInfo?.ranking.rank}/5</h4>
                </span>
                <span className="flex items-center gap-2">
                  <Image src={img?.icon} alt={img?.name || ""} width={15} />
                  <Link href="/home" className="flex items-center">
                    {img?.name}{" "}
                    <Image
                      src="/img/Quest/Right.png"
                      width={20}
                      height={20}
                      alt="angle"
                      className="pl-2"
                    />
                  </Link>
                </span>
              </div>
              <Progress
                aria-label="Loading..."
                value={progressValue}
                className="max-w-md mt-4"
                color="secondary"
              />
            </Container>
            <Container>
              <div className="flex justify-between items-center">
                <h2 className="font-roboto">Balance</h2>
                <span className="flex items-center gap-2">
                  <Image src={Dollar} alt="Dollar" />
                  <h2 className="font-istok text-3xl font-semibold">
                    {userInfo.balance.toLocaleString()}
                  </h2>
                </span>
              </div>
            </Container>
            <div className="relative">
              <div
                className="relative w-full flex justify-center"
                onClick={handleQuestInteraction}
                onTouchEnd={handleQuestInteraction}
              >
                <Image
                  src={img?.img || ""}
                  width={200}
                  height={200}
                  alt="quest"
                  className={`h-[300px] w-[300px] object-cover border rounded-full bg-[#FFF] ${
                    isZooming ? "zoom-animation" : ""
                  }`}
                />
                {clicks.map((click, index) => (
                  <div
                    key={index}
                    className="absolute animation-wolf flex gap-2 items-center"
                    style={{
                      left: `${click.x}px`,
                      top: `${click.y}px`,
                      transform: "translate(-50%, 0)",
                    }}
                  >
                    <Image src={Wolf} width={30} height={30} alt="wolf" />
                    <span>+{userInfo.tap}</span>
                  </div>
                ))}
              </div>

              <Container>
                <div className="relative bottom-4 flex justify-between font-manrope font-medium text-xs items-center">
                  <span className="flex items-center gap-2">
                    <Image src={Light} alt="Light" />
                    <h2 className="font-bold font-istok text-lg">
                      {userInfo.boost?.used}/{userInfo.boost?.total}
                    </h2>
                  </span>
                  <Link href="/boost" className="flex items-center gap-2">
                    <h2 className="font-bold font-istok text-xs">Boost</h2>
                    <Image src={Boost} alt="boost" />
                  </Link>
                </div>
              </Container>
            </div>
          </div>
        </Layout>
      ) : (
        <Flash />
      )}
    </>
  );
};

export default Quest;
