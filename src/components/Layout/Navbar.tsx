"use client";
import Quest from "../../../public/svg/Quest.svg";
import QuestAct from "../../../public/svg/Quest-Act.svg";
import MineAct from "../../../public/svg/Min-Act.svg";
import Mine from "../../../public/svg/Mine.svg";
import Friends from "../../../public/svg/Group.svg";
import FriendsAct from "../../../public/svg/Friend-Act.svg";
import Earn from "../../../public/svg/Earn.svg";
import EarnAct from "../../../public/svg/Earn-Act.svg";
import Learn from "../../../public/svg/Learn.svg";
import LearnAct from "../../../public/svg/Learn-Act.svg";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

const navList = [
  {
    name: "Quest",
    svg: Quest,
    act: QuestAct,
    link: "/quest",
  },
  {
    name: "Mine",
    svg: Mine,
    act: MineAct,
    link: "/mine",
  },
  {
    name: "Friends",
    svg: Friends,
    act: FriendsAct,
    link: "/friends",
  },
  {
    name: "Earn",
    svg: Earn,
    act: EarnAct,
    link: "/earn",
  },
  {
    name: "Learn",
    svg: Learn,
    act: LearnAct,
    link: "/learn",
  },
];
export const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="fixed left-0 bottom-4 w-full px-4">
      <div className="p-2 flex border border-gray-400 rounded-xl justify-between items-center bg-[#242D32]">
        {navList.map((nav) => (
          <Link
            href={nav.link}
            key={nav.name}
            className={twMerge(
              "flex flex-col items-center gap-1 font-istok p-1",
              nav.link === pathName &&
                "border px-5 py-1 border-gray-400 rounded-lg"
            )}
          >
            <Image
              src={nav.link === pathName ? nav.act : nav.svg}
              alt={nav.name}
              className="w-[27px] h-[27px]"
            />
            <h2
              className={twMerge(
                "text-xs text-[#767F84]",
                nav.link === pathName && "text-white"
              )}
            >
              {nav.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};
