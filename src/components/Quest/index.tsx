"use client";
import { Container } from "@/components/Container";
import { Layout } from "@/components/Layout";
import { Progress } from "@nextui-org/react";
import Image from "next/image";
import Boost from "../../../public/svg/Boost.svg";
import Link from "next/link";
import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import { debounce } from "lodash";
import { CMSModal } from "@/context";
import QuestMine from "../../../public/svg/QuestMine.svg";
import Question from "../../../public/svg/Question.svg";
import Nimbi from "../../../public/svg/Nimbi.svg";
import Dollar from "../../../public/svg/Dollar.svg";
import Light from "../../../public/svg/Light.svg";
import { useTelegram } from "@/lib/TelegramProvider";

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

const Quest = () => {
  const { user } = useTelegram();

  const [userInfo, setUserInfo] = useState<any>();

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setUserInfo(storedData);
    }
  }, []);
  // useEffect(() => {
  //   if (user) {
  //     fetchUserInfo();
  //   }
  // }, [user]);

  // const fetchUserInfo = async () => {
  //   if (user) {
  //     const data = await axios.get(
  //       `${process.env.NEXT_PUBLIC_API_URL}/userInfo`,
  //       {
  //         params: {
  //           userId: user.id,
  //         },
  //       }
  //     );
  //     setUserInfo(data.data);
  //   }
  // };
  const updateUser = async (count: number, boost: number) => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/updateUser`, {
      userId: userInfo?.userId || user?.id,
      balance: count,
      boost: {
        ...userInfo.boost,
        used: boost,
      },
    });
  };

  const debouncedUpdateUser = useCallback(
    debounce((newBalance, boost) => {
      updateUser(newBalance, boost);
    }, 300), // Adjust the debounce delay as needed
    []
  );

  useEffect(() => {
    if (userInfo?.boost?.used < userInfo?.boost?.total) {
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
    const newBalance = userInfo.balance + (userInfo.tap + 1);
    const newBoostUsed = userInfo.boost.used - (userInfo.tap + 1);
    debouncedUpdateUser(newBalance, newBoostUsed);

    setUserInfo({
      ...userInfo,
      balance: newBalance,
      boost: {
        ...userInfo.boost,
        used: newBoostUsed,
      },
    });
  };

  return (
    <Layout>
      <div className="flex flex-col gap-4 pb-[120px]">
        <p>{userInfo.firstName}</p>
        <div className="flex items-center justify-between border-b border-[#5C666C] p-4">
          <span className="flex items-center gap-4">
            <Image src="/img/28.png" alt="avatar" width={40} height={40} />
            <h2 className="font-inter font-bold font-sm">
              {userInfo?.firstName} {userInfo?.lastName}
            </h2>
          </span>
          <span className="flex items-center gap-2 p-3 bg-[#242D32]">
            <Image src={QuestMine} alt="quest" />
            <h2 className="text-xs font-semibold font-roboto">
              Auto Mining <span className="fnt-semibold">K2900 hr</span>
            </h2>
          </span>
        </div>
        <p>{userInfo.firstName}</p>

        <Container>
          <div className="flex justify-between font-manrope font-medium text-xs items-center">
            <span className="flex items-center gap-4">
              <h4>Rank {userInfo?.rank}/5</h4>
              <Image src={Question} alt="question" />
            </span>
            <span className="flex items-center gap-2">
              <Image src={Nimbi} alt="nimbi" width={15} />
              <h4>Nimbi Wolf</h4>
            </span>
          </div>
          <Progress
            aria-label="Loading..."
            value={userInfo?.rank * 20}
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
                {userInfo?.balance}
              </h2>
            </span>
          </div>
        </Container>
        <Image
          src="/img/Quest.png"
          width={200}
          height={200}
          alt="quest"
          className="h-[350px] w-full"
          onClick={handleQuestClick}
        />
        <Container>
          <div className="flex justify-between font-manrope font-medium text-xs items-center">
            <span className="flex items-center gap-2">
              <Image src={Light} alt="Light" />
              <h2 className="font-bold font-istok text-lg">
                {userInfo?.boost?.used}/{userInfo?.boost?.total}
              </h2>
            </span>
            <Link href="/boost" className="flex items-center gap-2">
              <h2 className="font-bold font-istok text-xs">Boost</h2>
              <Image src={Boost} alt="boost" />
            </Link>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Quest;
