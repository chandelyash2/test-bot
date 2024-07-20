"use client";
import { Container } from "@/components/Container";
import { Layout } from "@/components/Layout";
import { Progress } from "@nextui-org/react";
import Image from "next/image";
import Boost from "../../../public/svg/Boost.svg";
import Link from "next/link";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
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

  useEffect(() => {
    if (user) {
      fetchUserInfo();
    }
  }, []);

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
      }
    }
  };
  const updateUser = async (count: number, boost: number, user: User) => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/updateUser`, {
      userId: user.userId,
      balance: count,
      boost: {
        ...user.boost,
        used: boost,
      },
    });
  };

  const debouncedUpdateUser = useCallback(
    debounce((newBalance, boost, user) => {
      updateUser(newBalance, boost, user);
    }, 300), // Adjust the debounce delay as needed
    []
  );

  useEffect(() => {
    if (userInfo && userInfo?.boost?.used < userInfo?.boost?.total) {
      const interval = setInterval(() => {
        setUserInfo((prevuserData: any) => ({
          ...prevuserData,
          boost: {
            ...prevuserData.boost,
            used: prevuserData.boost.used + 1,
          },
        }));
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [userInfo]);

  const handleQuestClick = async (e: any) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = rect.bottom - e.clientY;

    if (userInfo && userInfo.boost.used > 0) {
      setClicks((prevClicks) => [...prevClicks, { x, y }]);
      const newBalance = userInfo.balance + userInfo.tap;
      const newBoostUsed = userInfo.boost.used - userInfo.tap;
      debouncedUpdateUser(newBalance, newBoostUsed, userInfo);
      setUserInfo({
        ...userInfo,
        balance: newBalance,
        boost: {
          ...userInfo.boost,
          used: newBoostUsed,
        },
      });
      setTimeout(() => {
        setClicks((prevClicks) => prevClicks.slice(1));
      }, 600);
    }
  };

  const img =
    userInfo &&
    imgs.find(
      (item) =>
        userInfo.balance >= item.less && userInfo.balance <= item.greater
    );

  return (
    <>
      {userInfo ? (
        <Layout>
          <div className="flex flex-col gap-4 pb-[120px]">
            <div className="flex items-center justify-between border-b border-[#5C666C] p-4">
              <span className="flex items-center gap-4">
                <Image src="/img/28.png" alt="avatar" width={40} height={40} />
                <h2 className="font-inter font-bold font-sm">
                  {userInfo.firstName} {userInfo.lastName}
                </h2>
              </span>
              <span className="flex items-center gap-2 p-3 bg-[#242D32]">
                <Image src={QuestMine} alt="quest" />
                <h2 className="text-xs font-semibold font-roboto">
                  Auto Mining <span className="fnt-semibold">K2900 hr</span>
                </h2>
              </span>
            </div>
            <Container>
              <div className="flex justify-between font-manrope font-medium text-xs items-center">
                <span className="flex items-center gap-4">
                  <h4>Rank {img?.rank}/5</h4>
                  <Image src={Question} alt="question" />
                </span>
                <span className="flex items-center gap-2">
                  <Image src={img?.icon} alt={img?.name || ""} width={15} />
                  <h4>{img?.name}</h4>
                </span>
              </div>
              <Progress
                aria-label="Loading..."
                value={img && img?.rank * 20}
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
                    {userInfo.balance}
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
                      transform: "translate(-50%, 0)", // Ensure proper centering horizontally
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
                className="absolute bottom-10 h-[100px] w-full"
              />
              <Container>
                <div className="relative  flex justify-between font-manrope font-medium text-xs items-center">
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
