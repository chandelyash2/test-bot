import Sigma from "../../../public/svg/Sigma.svg";
import Omega from "../../../public/svg/Omega.svg";
import MidRank from "../../../public/svg/MidRank.svg";
import Beta from "../../../public/svg/Beta.svg";
import Luna from "../../../public/svg/Luna.svg";

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
  social: {
    x: {
      type: boolean;
    };
    tg: {
      type: boolean;
    };
    yt: {
      type: boolean;
    };
    discord: {
      type: boolean;
    };
    insta: {
      type: boolean;
    };
    red: {
      type: boolean;
    };
  };
}

export const imgs = [
  {
    img: "/img/Quest/Sigma.png",
    color: "#3E4A5A",
    name: "Sigma",
    icon: Sigma,
    less: 0,
    greater: 4999999,
    rank:1
  },
  {
    img: "/img/Quest/Omega.png",
    less: 5000000,
    greater: 9999999,
    color: "#5E4B1A",
    name: "Omega",
    icon: Omega,
    rank:2
  },
  {
    img: "/img/Quest/Mid.png",
    less: 10000000,
    greater: 49999999,
    color: "#FF8717",
    name: "Mid Ranking",
    icon: MidRank,
    rank:3
  },
  {
    img: "/img/Quest/Beta.png",
    less: 50000000,
    greater: 99999999,
    color: "#3F5A63",
    name: "Beta",
    icon: Beta,
    rank:4
  },

  {
    img: "/img/Quest/Luna.png",
    less: 100000000,
    greater: 100000000,
    color: "#7137ED",
    name: "Alpha",
    icon: Luna,
    rank:5
  },
];

export const energy = [
  {
    lvl: 2,
    price: 10000,
    energy: 1000,
  },
  {
    lvl: 3,
    price: 150000,
    energy: 1500,
  },
  {
    lvl: 4,
    price: 200000,
    energy: 2000,
  },
  {
    lvl: 5,
    price: 250000,
    energy: 2500,
  },
  {
    lvl: 6,
    price: 300000,
    energy: 3000,
  },
  {
    lvl: 7,
    price: 350000,
    energy: 3500,
  },
  {
    lvl: 8,
    price: 400000,
    energy: 4000,
  },
  {
    lvl: 9,
    price: 450000,
    energy: 4500,
  },
  {
    lvl: 10,
    price: 500000,
    energy: 5000,
  },
  {
    lvl: 11,
    price: 550000,
    energy: 5500,
  },
  {
    lvl: 12,
    price: 600000,
    energy: 6000,
  },
  {
    lvl: 13,
    price: 650000,
    energy: 6500,
  },
  {
    lvl: 14,
    price: 700000,
    energy: 7000,
  },
  {
    lvl: 15,
    price: 750000,
    energy: 7500,
  },
];

export const multiTap = [
  { lvl: 1, tap: 4, price: 15000 },
  { lvl: 2, tap: 5, price: 200000 },
  { lvl: 3, tap: 6, price: 300000 },
  { lvl: 4, tap: 7, price: 400000 },
  { lvl: 5, tap: 8, price: 500000 },
  { lvl: 6, tap: 9, price: 600000 },
  { lvl: 7, tap: 10, price: 700000 },
  { lvl: 8, tap: 11, price: 800000 },
  { lvl: 9, tap: 12, price: 900000 },
  { lvl: 10, tap: 13, price: 1000000 },
  { lvl: 11, tap: 14, price: 1100000 },
  { lvl: 12, tap: 15, price: 1200000 },
  { lvl: 13, tap: 16, price: 1300000 },
  { lvL: 14, tap: 17, price: 1400000 },
];
