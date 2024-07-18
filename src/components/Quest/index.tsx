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
import Sigma from "../../../public/svg/Sigma.svg";
import Omega from "../../../public/svg/Omega.svg";
import MidRank from "../../../public/svg/MidRank.svg";
import Beta from "../../../public/svg/Beta.svg";
import Luna from "../../../public/svg/Luna.svg";
import Nimbi from "../../../public/svg/Nimbi.svg";
export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  userId: string;
  rank: number;
  balance: number;
  boost: {
    used: number;
    total: number;
    lvl: number;
  };
  tap: number;
  mine: number;
}

const imgs = [
  {
    img: "/img/Quest/Sigma.png",
    color: "#3E4A5A",
    name: "Sigma",
    icon: Sigma,
    less: 0,
    greater: 4999999,
  },
  {
    img: "/img/Quest/Omega.png",
    less: 5000000,
    greater: 9999999,
    color: "#5E4B1A",
    name: "Omega",
    icon: Omega,
  },
  {
    img: "/img/Quest/Mid.png",
    less: 10000000,
    greater: 49999999,
    color: "#FF8717",
    name: "Mid Ranking",
    icon: MidRank,
  },
  {
    img: "/img/Quest/Beta.png",
    less: 50000000,
    greater: 99999999,
    color: "#3F5A63",
    name: "Beta",
    icon: Beta,
  },

  {
    img: "/img/Quest/Luna.png",
    less: 100000000,
    greater:100000000,
    color: "#7137ED",
    name: "Alpha",
    icon: Luna,
  },
];
const Quest = () => {
  const { user } = useTelegram();
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
          userId:user.id,
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

  const handleQuestClick = async () => {
    if (userInfo) {
      const newBalance = userInfo.balance + (userInfo.tap + 1);
      const newBoostUsed = userInfo.boost.used - (userInfo.tap + 1);
      debouncedUpdateUser(newBalance, newBoostUsed, userInfo);
      setUserInfo({
        ...userInfo,
        balance: newBalance,
        boost: {
          ...userInfo.boost,
          used: newBoostUsed,
        },
      });
    }
  };
console.log(userInfo,"userIndo");

const img = userInfo &&
  imgs.find(item => 
    userInfo.balance >= item.less && userInfo.balance <= item.greater
  );
    console.log(img,"IMG");
    
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
                  <h4>Rank {userInfo?.rank}/5</h4>
                  <Image src={Question} alt="question" />
                </span>
                <span className="flex items-center gap-2">
                  <Image src={img?.icon} alt={img?.name || ""} width={15} />
                  <h4>{img?.name}</h4>
                </span>
              </div>
              <Progress
                aria-label="Loading..."
                value={userInfo?.rank * 20}
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
                onClick={handleQuestClick}
              />
              <Image
                src={img?.img || ""}
                width={200}
                height={200}
                alt="quest"
                className="h-[450px] w-full objecr-cover"
                onClick={handleQuestClick}
              />
              <Image
                src="/img/Quest/Vector 21.png"
                width={200}
                height={100}
                alt="quest"
                className="absolute bottom-10 h-[100px] w-full"
                onClick={handleQuestClick}
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
