"use client";
import { Container } from "@/components/Container";
import { Layout } from "@/components/Layout";
import { Progress } from "@nextui-org/react";
import Image from "next/image";
import Boost from "../../../public/svg/Boost.svg";
import Link from "next/link";
import axios from "axios";
import { useCallback, useContext, useEffect } from "react";
import { debounce } from "lodash";
import { CMSModal } from "@/context";
import QuestMine from "../../../public/svg/QuestMine.svg";
import Question from "../../../public/svg/Question.svg";
import Nimbi from "../../../public/svg/Nimbi.svg";
import Dollar from "../../../public/svg/Dollar.svg";
import Light from "../../../public/svg/Light.svg";

export interface User {
  _id: string;
  userName: string;
  rank: number;
  balance: number;
  boost: {
    used: number;
    total: number;
    lvl: number;
  };
}

const Quest = () => {
  const { userInfo, setUserInfo } = useContext(CMSModal);
  console.log(userInfo, "USERRRR");

  const updateUser = async (count: number, boost: number) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/updateUser`, {
        _id: userInfo._id,
        balance: count,
        boost: {
          used: boost,
          total: userInfo.boost.total,
          lvl: userInfo.boost.lvl,
        },
      });
    } catch (error) {
      console.error("Error updating user:", error);
    }
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
        setUserInfo((prevUserInfo:any) => ({
          ...prevUserInfo,
          boost: {
            ...prevUserInfo.boost,
            used: prevUserInfo.boost.used + 1,
          },
        }));
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [userInfo, setUserInfo]);

  const handleQuestClick = async () => {
    if (userInfo?.balance !== undefined) {
      const newBalance = userInfo.balance + userInfo.rank;
      const newBoostUsed = userInfo.boost.used - userInfo.rank;

      setUserInfo({
        ...userInfo,
        balance: newBalance,
        boost: {
          ...userInfo.boost,
          used: newBoostUsed,
        },
      });

      debouncedUpdateUser(newBalance, newBoostUsed);
    } else {
      console.log("userInfo or userInfo.balance is undefined");
    }
  };

  return (
    <Layout>
      <div className="flex flex-col gap-4 pb-[120px]">
        <div className="flex items-center justify-between border-b border-[#5C666C] p-4">
          <span className="flex items-center gap-4">
            <Image src="/img/28.png" alt="avatar" width={40} height={40} />
            <h2 className="font-inter font-bold font-sm">Tony Montana</h2>
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
