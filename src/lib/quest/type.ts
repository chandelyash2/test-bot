import Sigma from "../../../public/svg/Sigma.svg";
import Omega from "../../../public/svg/Omega.svg";
import MidRank from "../../../public/svg/MidRank.svg";
import Beta from "../../../public/svg/Beta.svg";
import Luna from "../../../public/svg/Luna.svg";

export interface User {
  _id: string;
  firstName: string;
  friends: string[];
  lastName: string;
  userId: string;
  ranking: {
    rank: number;
    less: number;
    greater: number;
  };
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
    profit: number;
    cards: [
      {
        type: string;

        lvl: number;
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
    name: "Caubvick",
    cardType: "Mountains",
    country: "Canada",
    meter: "1652",
    img: "/mine/Rectangle0.png",
    countryImg: "/mine/Canada.png",
    description:
      "The highest peak in Eastern Canada, forming part of the Torngat Mountains. Once the site of significant geological studies.",
    level: [
      {
        lvl: 0,
        meters: "0",
        profit: 0,
        price: 0,
        required: null,
      },
      {
        lvl: 1,
        meters: "165.2",
        profit: 55,
        price: 15000,
        required: null,
      },
      {
        lvl: 2,
        meters: "330.4",
        profit: 115,
        price: 20330,
        required: null,
      },
      {
        lvl: 3,
        meters: "495.6",
        profit: 825,
        price: 25496,
        required: null,
      },
      {
        lvl: 4,
        meters: "660.8",
        profit: 880,
        price: 30661,
        required: null,
      },
      {
        lvl: 5,
        meters: "826",
        profit: 1100,
        price: 350826,
        required: null,
      },
      {
        lvl: 6,
        meters: "991.2",
        profit: 1320,
        price: 400991,
        required: null,
      },
      {
        lvl: 7,
        meters: "1156.4",
        profit: 1540,
        price: 4501156,
        required: null,
      },
      {
        lvl: 8,
        meters: "1321.6",
        profit: 1764,
        price: 5002478,
        required: {
          type: "Friend",
          lvl: 2,
        },
      },
      {
        lvl: 9,
        meters: "1486.8",
        profit: 1984,
        price: 5503965,
        required: null,
      },
      {
        lvl: 10,
        meters: "1652",
        profit: 2755,
        price: 6030661,
        required: null,
      },
    ],
  },
  {
    name: "Kosciuszko",
    cardType: "Mountains",
    country: "Australia",
    meter: "2228",
    img: "/mine/Rectangle1.png",
    countryImg: "/mine/Australia.png",
    description:
      "The highest peak in Australia, located in the Snowy Mountains. Named by the Polish explorer Paweł Strzelecki.",
    level: [
      {
        lvl: 0,
        meters: "0",
        profit: 0,
        price: 0,
        required: null,
      },
      {
        lvl: 1,
        meters: "222.8",
        profit: 350,
        price: 25000,
        required: {
          type: "Caubvick",
          lvl: 2,
        },
      },
      {
        lvl: 2,
        meters: "445.6",
        profit: 666,
        price: 40000,
        required: null,
      },
      {
        lvl: 3,
        meters: "668.4",
        profit: 745,
        price: 55668,
        required: null,
      },
      {
        lvl: 4,
        meters: "891.2",
        profit: 892,
        price: 70891,
        required: null,
      },
      {
        lvl: 5,
        meters: "1114",
        profit: 1188,
        price: 851114,
        required: null,
      },
      {
        lvl: 6,
        meters: "1336.8",
        profit: 1484,
        price: 3501337,
        required: {
          type: "Friend",
          lvl: 3,
        },
      },
      {
        lvl: 7,
        meters: "1559.6",
        profit: 1784,
        price: 6002896,
        required: null,
      },
      {
        lvl: 8,
        meters: "1782.4",
        profit: 2080,
        price: 8121782,
        required: null,
      },
      {
        lvl: 9,
        meters: "2005.2",
        profit: 2376,
        price: 12002005,
        required: null,
      },
      {
        lvl: 10,
        meters: "2228",
        profit: 3340,
        price: 20002228,
        required: null,
      },
    ],
  },
  {
    name: "Musala",
    cardType: "Mountains",
    country: "Bulgaria",
    meter: "2925",
    img: "/mine/Rectangle2.png",
    countryImg: "/mine/Musala.png",

    description:
      'The highest peak in the Balkans, located in the Rila Mountain Range. Historically significant, it means "near God" in Arabic.',
    level: [
      {
        lvl: 0,
        meters: "0",
        profit: 0,
        price: 0,
        required: null,
      },
      {
        lvl: 1,
        meters: "292.5",
        profit: 465,
        price: 45000,
        required: null,
      },
      {
        lvl: 2,
        meters: "585",
        profit: 975,
        price: 75000,
        required: null,
      },
      {
        lvl: 3,
        meters: "877.5",
        profit: 1465,
        price: 150878,
        required: null,
      },
      {
        lvl: 4,
        meters: "1170",
        profit: 1950,
        price: 351170,
        required: null,
      },
      {
        lvl: 5,
        meters: "1462.5",
        profit: 2440,
        price: 851463,
        required: null,
      },
      {
        lvl: 6,
        meters: "1755",
        profit: 2925,
        price: 7501755,
        required: null,
      },
      {
        lvl: 7,
        meters: "2047.5",
        profit: 3415,
        price: 8502048,
        required: null,
      },
      {
        lvl: 8,
        meters: "2340",
        profit: 3900,
        price: 22002340,
        required: null,
      },
      {
        lvl: 9,
        meters: "2632.5",
        profit: 4390,
        price: 25002633,
        required: null,
      },
      {
        lvl: 10,
        meters: "2925",
        profit: 4875,
        price: 27002925,
        required: null,
      },
    ],
  },
  {
    name: "Mount Etna",
    cardType: "Mountains",
    country: "Italy",
    meter: "3329",
    img: "/mine/Rectangle3.png",
    countryImg: "/mine/Etna.png",
    description:
      "One of the most active volcanoes in the world, located in Sicily. Known for its frequent eruptions and rich volcanic soil.",
    level: [
      {
        lvl: 0,
        meters: "0",
        profit: 0,
        price: 0,
        required: null,
      },
      {
        lvl: 1,
        meters: "332.9",
        profit: 350,
        price: 55000,
        required: null,
      },
      {
        lvl: 2,
        meters: "665.8",
        profit: 888,
        price: 70000,
        required: null,
      },
      {
        lvl: 3,
        meters: "998.7",
        profit: 1554,
        price: 85999,
        required: null,
      },
      {
        lvl: 4,
        meters: "1331.6",
        profit: 1665,
        price: 121332,
        required: null,
      },
      {
        lvl: 5,
        meters: "1664.5",
        profit: 2220,
        price: 851665,
        required: null,
      },
      {
        lvl: 6,
        meters: "1997.4",
        profit: 2775,
        price: 3501997,
        required: {
          type: "friend",
          lvl: 5,
        },
      },
      {
        lvl: 7,
        meters: "2330.3",
        profit: 3330,
        price: 6004328,
        required: null,
      },
      {
        lvl: 8,
        meters: "2663.2",
        profit: 3885,
        price: 8122663,
        required: null,
      },
      {
        lvl: 9,
        meters: "2996.1",
        profit: 5328,
        price: 12002996,
        required: null,
      },
      {
        lvl: 10,
        meters: "3329",
        profit: 6993,
        price: 20003329,
        required: null,
      },
    ],
  },
  {
    name: "Nyiragongo",
    cardType: "Mountains",
    country: "D.R. Congo",
    meter: "3470",
    img: "/mine/Rectangle4.png",
    countryImg: "/mine/Nyi.png",

    description:
      "Known for its large and active lava lake, it is part of the Virunga Mountains. First recorded eruption was in 1882.",
    level: [
      {
        lvl: 0,
        meters: "0",
        profit: 0,
        price: 0,
        required: null,
      },
      {
        lvl: 1,
        meters: "347",
        profit: 350,
        price: 65000,
        required: {
          type: "Mount Etna",
          lvl: 6,
        },
      },
      {
        lvl: 2,
        meters: "694",
        profit: 464,
        price: 80000,
        required: null,
      },
      {
        lvl: 3,
        meters: "1041",
        profit: 924,
        price: 96041,
        required: null,
      },
      {
        lvl: 4,
        meters: "1388",
        profit: 1735,
        price: 141388,
        required: null,
      },
      {
        lvl: 5,
        meters: "1735",
        profit: 2315,
        price: 951735,
        required: null,
      },
      {
        lvl: 6,
        meters: "2082",
        profit: 3468,
        price: 3702082,
        required: null,
      },
      {
        lvl: 7,
        meters: "2429",
        profit: 4858,
        price: 6124511,
        required: null,
      },
      {
        lvl: 8,
        meters: "2776",
        profit: 6480,
        price: 8722776,
        required: null,
      },
      {
        lvl: 9,
        meters: "3123",
        profit: 7400,
        price: 14003123,
        required: null,
      },
      {
        lvl: 10,
        meters: "3470",
        profit: 8328,
        price: 25003470,
        required: null,
      },
    ],
  },
  {
    name: "Aoraki",
    cardType: "Mountains",
    country: "New Zealand",
    meter: "3724",
    img: "/mine/Rectangle5.png",
    countryImg: "/mine/Aoraki.png",

    description:
      "The highest peak in New Zealand, located in the Southern Alps. Named Aoraki by the Māori, it offers challenging climbs.",
    level: [
      {
        lvl: 0,
        meters: "0",
        profit: 0,
        price: 0,
        required: null,
      },
      {
        lvl: 1,
        meters: "372.4",
        profit: 350,
        price: 85000,
        required: null,
      },
      {
        lvl: 2,
        meters: "744.8",
        profit: 1116,
        price: 100000,
        required: null,
      },
      {
        lvl: 3,
        meters: "1117.2",
        profit: 1984,
        price: 156117,
        required: null,
      },
      {
        lvl: 4,
        meters: "1489.6",
        profit: 3720,
        price: 171490,
        required: {
          type: "friend",
          lvl: 5,
        },
      },
      {
        lvl: 5,
        meters: "1862",
        profit: 4473,
        price: 1851862,
        required: null,
      },
      {
        lvl: 6,
        meters: "2234.4",
        profit: 4968,
        price: 3502234,
        required: null,
      },
      {
        lvl: 7,
        meters: "2606.8",
        profit: 5960,
        price: 8704841,
        required: null,
      },
      {
        lvl: 8,
        meters: "2979.2",
        profit: 6952,
        price: 9522979,
        required: null,
      },
      {
        lvl: 9,
        meters: "3351.6",
        profit: 7944,
        price: 17403352,
        required: null,
      },
      {
        lvl: 10,
        meters: "3724",
        profit: 10053,
        price: 29133724,
        required: null,
      },
    ],
  },
  {
    name: "Mount Kinabalu",
    cardType: "Mountains",
    country: "Malaysia",
    meter: "4095",
    img: "/mine/Rectangle1.png",
    countryImg: "/mine/Canada.png",

    description:
      "The highest peak in Borneo's Crocker Range. Known for its biodiversity, it is a UNESCO World Heritage Site.",
    level: [
      {
        lvl: 0,
        meters: "0",
        profit: 0,
        price: 0,
        required: null,
      },

      {
        lvl: 1,
        meters: "409.5",
        profit: 350,
        price: 55000,
        required: null,
      },
      {
        lvl: 2,
        meters: "819",
        profit: 1370,
        price: 97000,
        required: null,
      },
      {
        lvl: 3,
        meters: "1228.5",
        profit: 2730,
        price: 121229,
        required: null,
      },
      {
        lvl: 4,
        meters: "1638",
        profit: 4100,
        price: 171638,
        required: null,
      },
      {
        lvl: 5,
        meters: "2047.5",
        profit: 5460,
        price: 852048,
        required: null,
      },
      {
        lvl: 6,
        meters: "2457",
        profit: 6830,
        price: 3502457,
        required: null,
      },
      {
        lvl: 7,
        meters: "2866.5",
        profit: 8190,
        price: 6005324,
        required: null,
      },
      {
        lvl: 8,
        meters: "3276",
        profit: 9560,
        price: 8123276,
        required: null,
      },
      {
        lvl: 9,
        meters: "3685.5",
        profit: 10920,
        price: 12003686,
        required: null,
      },
      {
        lvl: 10,
        meters: "4095",
        profit: 12290,
        price: 20004095,
        required: null,
      },
    ],
  },
  {
    name: "Matterhorn",
    cardType: "Mountains",
    country: "Switzerland",
    meter: "4478",
    img: "/mine/Rectangle0.png",
    countryImg: "/mine/Canada.png",

    description:
      "Renowned for its distinctive pyramidal shape. One of the deadliest peaks in the Alps, first ascended in 1865.",
    level: [
      {
        lvl: 0,
        meters: "0",
        profit: 0,
        price: 0,
        required: null,
      },
      ,
      {
        lvl: 1,
        meters: "447.8",
        profit: 350,
        price: 45000,
        required: null,
      },
      {
        lvl: 2,
        meters: "895.6",
        profit: 1490,
        price: 57000,
        required: null,
      },
      {
        lvl: 3,
        meters: "1343.4",
        profit: 2990,
        price: 86343,
        required: null,
      },
      {
        lvl: 4,
        meters: "1791.2",
        profit: 4480,
        price: 91791,
        required: null,
      },
      {
        lvl: 5,
        meters: "2239",
        profit: 5373,
        price: 552239,
        required: null,
      },
      {
        lvl: 6,
        meters: "2686.8",
        profit: 5968,
        price: 2502687,
        required: null,
      },
      {
        lvl: 7,
        meters: "3134.6",
        profit: 8064,
        price: 4505821,
        required: null,
      },
      {
        lvl: 8,
        meters: "3582.4",
        profit: 9405,
        price: 6123582,
        required: null,
      },
      {
        lvl: 9,
        meters: "4030.2",
        profit: 9552,
        price: 12784030,
        required: null,
      },
      {
        lvl: 10,
        meters: "4478",
        profit: 12087,
        price: 28604478,
        required: null,
      },
    ],
  },
];
