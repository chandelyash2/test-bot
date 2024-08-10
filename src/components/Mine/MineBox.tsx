import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { BuyCard } from "./Buy Card";
import Image from "next/image";
import { User } from "@/lib/quest/type";
import axios from "axios";
import { Button, Card, user } from "@nextui-org/react";
import { useTelegram } from "@/lib/TelegramProvider";
import { Flash } from "../Flash";

export type mineLvl = {
  lvl: number;
  meters: string;
  profit: number;
  price: number;
  required: any;
};
interface MineBoxProp {
  color: string;
  mine: any;
}

export const MineBox = ({ color, mine }: MineBoxProp) => {
  const { user } = useTelegram();

  const [buyCard, setBuyCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
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
  const mineLvl: any = (mineInfo: mineLvl[]) => {
    const mineData: any = userInfo?.mine.cards.find(
      (item) => item.type === mine.name
    );
    return mineInfo?.find((item: any) => item?.lvl === mineData?.lvl );
  };
  const mineLvl1 = (mineInfo: mineLvl[]) => {
    const mineData: any = userInfo?.mine.cards.find(
      (item) => item.type === mine.name
    );
    return mineInfo.find((item) => item?.lvl === mineData?.lvl + 1);
  };
  const mineData: any = (name: string) => {
    const data = userInfo?.mine.cards.find((item: any) => item.type === name);
    return data;
  };
  const levelRequirementsMet = () => {
    const levelRequirements: any = mineLvl1(mine.level)?.required;

    if (levelRequirements?.type === "Friend" && userInfo) {
      return levelRequirements?.lvl > userInfo.friends.length;
    } else {
      return levelRequirements?.lvl > mineData(levelRequirements?.type)?.lvl;
    }
  };

  return (
    <>
      {userInfo && (
        <>
          <div
            className={twMerge(
              "relative min-w-[153px] border border-[#5C666C] rounded flex flex-col gap-1",
              mineLvl(mine.level)?.required?.type
                ? "bg-[#334047] z-1"
                : " bg-[#334047]"
            )}
            onClick={() => {
              if (levelRequirementsMet()) {
                return null;
              } else {
                setBuyCard(true);
                setSelectedCard(mine);
              }
            }}
          >
            <span className="flex items-center justify-center absolute top-1 left-1 bg-[#2E3A41] rounded-full min-w-8 h-6 font-semibold font-roboto text-[10px]">
              Lv.{mineLvl(mine.level)?.lvl}
            </span>
            <span className="flex items-center justify-center absolute top-1 right-1 rounded-full min-w-8 h-6 font-semibold font-roboto text-[10px]">
          <Image src={mine.countryImg} alt="img" width={24} height={24}/>
            </span>
            <Image
              src={mine.img}
              alt={mine.name}
              width={100}
              height={100}
              className="w-full"
            />
            <div className="p-2 flex flex-col gap-2">
              <div>
                <h2 className="font-bold text-roboto text-[14px]">
                  {mine.name}
                </h2>
                <span className="text-xs text-[#C0C4C6]">
                  <label className="text-white"> Climbed</label>{" "}
                  {mineLvl(mine.level)?.meters}m
                </span>
                <div className="flex items-center gap-1">
                  <Image
                    src="/mine/Coin.svg"
                    alt={mine.name}
                    width={20}
                    height={20}
                  />
                  <span className="font-bold text-roboto text-[14px]">
                    {mineLvl1(mine.level)?.price.toLocaleString()}
                  </span>
                </div>
              </div>
              <hr className="bg-[#5C666C]" />

              <span className="text-[12px] font-roboto h-4">
                {mineLvl1(mine.level)?.required?.type}{" "}
                {mineLvl1(mine.level)?.required?.type && <span>Lv.</span>}
                {mineLvl1(mine.level)?.required?.lvl}
              </span>
            </div>
            {levelRequirementsMet() && (
              <div className="absolute inset-0 flex justify-center items-center  bg-black/50 z-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="62"
                  height="62"
                  viewBox="0 0 62 62"
                  fill="none"
                >
                  <g opacity="0.8">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M41.3333 20.6663H43.9166C45.9721 20.6663 47.9433 21.4828 49.3967 22.9362C50.8501 24.3896 51.6666 26.3609 51.6666 28.4163V49.083C51.6666 51.1384 50.8501 53.1096 49.3967 54.563C47.9433 56.0165 45.9721 56.833 43.9166 56.833H18.0833C16.0279 56.833 14.0566 56.0165 12.6032 54.563C11.1498 53.1096 10.3333 51.1384 10.3333 49.083V28.4163C10.3333 26.3609 11.1498 24.3896 12.6032 22.9362C14.0566 21.4828 16.0279 20.6663 18.0833 20.6663H20.6666V15.7838C20.6666 13.0432 21.7553 10.4149 23.6932 8.47703C25.6311 6.53916 28.2594 5.45047 31 5.45047C33.7406 5.45047 36.3689 6.53916 38.3067 8.47703C40.2446 10.4149 41.3333 13.0432 41.3333 15.7838V20.6663ZM27.291 11.9915C26.3227 13.013 25.7986 14.3767 25.8333 15.7838V20.6663H36.1666V15.7838C36.2014 14.3767 35.6772 13.013 34.7089 11.9915C33.7406 10.9699 32.407 10.3735 31 10.333C29.593 10.3735 28.2594 10.9699 27.291 11.9915ZM27.4119 33.3801C28.474 32.6704 29.7226 32.2917 31 32.2917C32.7128 32.2917 34.3555 32.9721 35.5667 34.1833C36.7779 35.3944 37.4583 37.0371 37.4583 38.75C37.4583 40.0273 37.0795 41.276 36.3699 42.338C35.6602 43.4001 34.6516 44.2279 33.4715 44.7167C32.2914 45.2055 30.9928 45.3334 29.74 45.0842C28.4872 44.835 27.3365 44.2199 26.4333 43.3167C25.53 42.4135 24.9149 41.2627 24.6657 40.0099C24.4165 38.7572 24.5444 37.4586 25.0333 36.2785C25.5221 35.0984 26.3499 34.0897 27.4119 33.3801Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
            )}
          </div>
          {buyCard && (
            <BuyCard
              setBuyCard={setBuyCard}
              selectedCard={selectedCard}
              userInfo={userInfo}
            />
          )}
        </>
      )}
    </>
  );
};
