"use client";
import { Container } from "@/components/Container";
import { Layout } from "@/components/Layout";
import { Progress } from "@nextui-org/react";
import Image from "next/image";
import Boost from "../../../public/svg/Boost.svg";
import Link from "next/link";
import axios from "axios";
import { useCallback, useEffect, useState, useRef } from "react";
import { debounce } from "lodash";
import QuestMine from "../../../public/svg/QuestMine.svg";
import Question from "../../../public/svg/Question.svg";
import Dollar from "../../../public/svg/Dollar.svg";
import Light from "../../../public/svg/Light.svg";
import { useTelegram } from "@/lib/TelegramProvider";
import { Flash } from "../Flash";
import { imgs, User } from "@/lib/quest/type";
import Wolf from "../../../public/svg/H Vector.svg";

interface Click {
  x: number;
  y: number;
}

const Quest = () => {
  const { user } = useTelegram();
  const [userInfo, setUserInfo] = useState<User>();
  const [clicks, setClicks] = useState<Click[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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

  const updateUser = async (
    count: number,
    boost: number,
    user: User,
    ranking: any
  ) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/updateUser`, {
        userId: user.userId,
        balance: count,
        boost: {
          ...user.boost,
          used: boost,
        },
        ranking,
      });
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const debouncedUpdateUser = useCallback(
    debounce((newBalance, boost, user, ranking) => {
      updateUser(newBalance, boost, user, ranking);
    }, 300),
    []
  );

  useEffect(() => {
    if (userInfo && userInfo.boost?.used < userInfo.boost?.total) {
      intervalRef.current = setInterval(() => {
        setUserInfo((prevUserData: any) => ({
          ...prevUserData,
          boost: {
            ...prevUserData.boost,
            used: prevUserData.boost.used + 1,
          },
        }));
      }, 1000);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [userInfo]);

  const handleQuestClick = (e: any) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = rect.bottom - e.clientY;
    let ranking: any = userInfo?.ranking;
    if (userInfo && userInfo.boost.used > 0) {
      setClicks((prevClicks) => [...prevClicks, { x, y }]);
      if (
        userInfo.ranking.rank < 5 &&
        userInfo.balance > userInfo.ranking.greater
      ) {
        ranking = {
          rank: userInfo.ranking.rank + 1,
          less: 0,
          greater: imgs.find((item) => item.rank === userInfo.ranking.rank + 1)
            ?.greater,
        };
      }

      const newBalance = userInfo.balance + userInfo.tap;
      const newBoostUsed = userInfo.boost.used - userInfo.tap;
      debouncedUpdateUser(newBalance, newBoostUsed, userInfo, ranking);
      setUserInfo({
        ...userInfo,
        balance: newBalance,
        boost: {
          ...userInfo.boost,
          used: newBoostUsed,
        },
        ranking,
      });
      setTimeout(() => {
        setClicks((prevClicks) => prevClicks.slice(1));
      }, 600);
    }
  };

  const img: any =
    userInfo && imgs.find((item) => item.rank === userInfo.ranking.rank);
  const progressValue =
    userInfo && (userInfo?.balance / userInfo?.ranking.greater) * 100;

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
                    />
                  </Link>
                </span>
              </div>
              <Progress
                aria-label="Loading..."
                value={progressValue}
                className={`max-w-md mt-4`}
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
              <Image
                src="/img/Quest/Vector 20.png"
                width={200}
                height={100}
                alt="quest"
                className="absolute h-5 w-full"
              />
              <div className="relative" onClick={handleQuestClick}>
                <Image
                  src={img?.img || ""}
                  width={200}
                  height={200}
                  alt="quest"
                  className="h-[450px] w-full object-cover"
                />
                {clicks.map((click, index) => (
                  <div
                    key={index}
                    className="absolute animation-text"
                    style={{
                      left: `${click.x}px`,
                      bottom: `${click.y}px`,
                      transform: "translate(-50%, 0)",
                    }}
                  >
                    <Image src={Wolf} width={50} height={50} alt="wolf" />+
                    {userInfo.tap}
                  </div>
                ))}
              </div>
              <Image
                src="/img/Quest/Vector 21.png"
                width={200}
                height={100}
                alt="quest"
                className="absolute bottom-8 h-[100px] w-full"
              />
              <Container>
                <div className="relative bottom-2 flex justify-between font-manrope font-medium text-xs items-center">
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
