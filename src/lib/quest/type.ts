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
  mine: {
    profit: {
      type: number;
    };
    cards: [
      {
        type: {
          type: string;
        };
        lvl: {
          type: number;
        };
      },
      {
        type: {
          type: string;
        };
        lvl: {
          type: number;
        };
      }
    ];
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
    rank: 1,
  },
  {
    img: "/img/Quest/Omega.png",
    less: 5000000,
    greater: 9999999,
    color: "#5E4B1A",
    name: "Omega",
    icon: Omega,
    rank: 2,
  },
  {
    img: "/img/Quest/Mid.png",
    less: 10000000,
    greater: 49999999,
    color: "#FF8717",
    name: "Mid Ranking",
    icon: MidRank,
    rank: 3,
  },
  {
    img: "/img/Quest/Beta.png",
    less: 50000000,
    greater: 99999999,
    color: "#3F5A63",
    name: "Beta",
    icon: Beta,
    rank: 4,
  },

  {
    img: "/img/Quest/Luna.png",
    less: 100000000,
    greater: 100000000,
    color: "#7137ED",
    name: "Alpha",
    icon: Luna,
    rank: 5,
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
  { lvl: 2, tap: 3, price: 15000 },
  { lvl: 3, tap: 5, price: 200000 },
  { lvl: 4, tap: 6, price: 300000 },
  { lvl: 5, tap: 7, price: 400000 },
  { lvl: 6, tap: 8, price: 500000 },
  { lvl: 7, tap: 9, price: 600000 },
  { lvl: 8, tap: 10, price: 700000 },
  { lvl: 9, tap: 11, price: 800000 },
  { lvl: 10, tap: 12, price: 9000000 },
  { lvl: 11, tap: 13, price: 1000000 },
  { lvl: 12, tap: 14, price: 1100000 },
  { lvl: 13, tap: 15, price: 1200000 },
  { lvL: 14, tap: 16, price: 1300000 },
  { lvL: 15, tap: 17, price: 1400000 },
];

export const mineArr = [
  {
    name: "Annapurna I",
    title: "annapurna",
    cardType: "Mountains",
    meter: "8091",
    img: "/mine/Annpurna.png",
    level: [
      {
        lvl: 1,
        meters: "809.1",
        profit: 270,
        price: 15000,
        required: null,
      },
      {
        lvl: 2,
        meters: "1618.2",
        profit: 2695,
        price: 21618,
        required: null,
      },
      {
        lvl: 3,
        meters: "2427.3",
        profit: 4045,
        price: 27427,
        required: null,
      },
      {
        lvl: 4,
        meters: "3236.4",
        profit: 4045,
        price: 33236,
        required: null,
      },
      {
        lvl: 5,
        meters: "4045.5",
        profit: 9443,
        price: 354046,
        required: null,
      },
      {
        lvl: 6,
        meters: "4854.6",
        profit: 11326,
        price: 404854.6,
        required: null,
      },
      {
        lvl: 7,
        meters: "5663.7",
        profit: 15104,
        price: 4505663.7,
        required: null,
      },
      {
        lvl: 8,
        meters: "6472.8",
        profit: 19422,
        price: 5012137,
        required: {
          type: "friend",
          lvl: 2,
        },
      },
      {
        lvl: 9,
        meters: "7281.9",
        profit: 21843,
        price: 5519418.4,
        required: null,
      },
      {
        lvl: 10,
        meters: "8091",
        profit: 26970,
        price: 6033236,
        required: null,
      },
    ],
  },
  {
    name: "Nanga Parbat",
    title: "nangaParbat",
    cardType: "Mountains",
    meter: "8126",
    img: "/mine/Nanga.png",
    level: [
      {
        lvl: 1,
        meters: "812.6",
        profit: 350,
        price: 25000,
        required: {
          type: "annapurna",
          lvl: 2,
        },
      },
      {
        lvl: 2,
        meters: "1625.2",
        profit: 2710,
        price: 40000,
        required: null,
      },
      {
        lvl: 3,
        meters: "2437.8",
        profit: 5420,
        price: 57438,
        required: null,
      },
      {
        lvl: 4,
        meters: "3250.4",
        profit: 8130,
        price: 73250,
        required: {
          type: "friend",
          lvl: 3,
        },
      },
      {
        lvl: 5,
        meters: "4063",
        profit: 10830,
        price: 854063,
        required: null,
      },
      {
        lvl: 6,
        meters: "4875.6",
        profit: 13540,
        price: 3504876,
        required: null,
      },
      {
        lvl: 7,
        meters: "5688.2",
        profit: 16250,
        price: 6010564,
        required: {
          type: "annapurna",
          lvl: 5,
        },
      },
      {
        lvl: 8,
        meters: "6500.8",
        profit: 18960,
        price: 8126501,
        required: null,
      },
      {
        lvl: 9,
        meters: "7313.4",
        profit: 21670,
        price: 12007313,
        required: null,
      },
      {
        lvl: 10,
        meters: "8126",
        profit: 24380,
        price: 20008126,
        required: null,
      },
    ],
  },
];
