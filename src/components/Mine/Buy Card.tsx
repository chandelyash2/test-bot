import { Button } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { mineLvl } from "./MineBox";
import { User } from "@/lib/quest/type";
import axios from "axios";
import { Flash } from "../Flash";
import { useTelegram } from "@/lib/TelegramProvider";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface BuyCardProp {
  setBuyCard: (value: boolean) => void;
  selectedCard: any;
  userInfo: User;
}
export const BuyCard = ({
  setBuyCard,
  selectedCard,
  userInfo,
}: BuyCardProp) => {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    // Add a Tailwind CSS class to the body
    document.body.classList.add("overflow-hidden");

    // Optional: Clean up by removing the class when the component is unmounted
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);  
  const mineLvl = (mineInfo: mineLvl[]) => {
    const mineData: any = userInfo?.mine.cards.find(
      (item) => item.type === selectedCard.name
    );
    return mineInfo.find((item) => item?.lvl === mineData?.lvl + 1);
  };

  const updateMine = async (profit: number, level: number, balance: number) => {
    setLoader(true);
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/updateMine`,
      {
        _id: userInfo._id,
        profit,
        level,
        balance,
        type: selectedCard.name,
      }
    );
    if (response.data.message) {
      toast.error(response.data.message);
    } else {
      toast.success("Success");
      setBuyCard(false);
      location.reload();
    }
    setLoader(false);
  };
  return (
    <>
      {userInfo && (
        <div className="fixed h-screen w-full top-0 left-0 bg-black bg-opacity-25 backdrop-blur-sm z-[999] overflow-hidden">
          <div className="fixed bottom-0 z-10 min-h-[300px] w-full left-0 bg-[#1C2327] flex flex-col items-center border-t border-[#54C7EE] rounded-t p-2 gap-6">
            <span
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setBuyCard(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M14.1666 5.83337L5.83331 14.1667M14.1666 14.1667L5.83331 5.83337"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>

            <span className="flex items-center justify-center absolute top-8 left-[45%] bg-[#2E3A41] rounded-full min-w-8 h-6 font-semibold font-roboto text-[10px]">
              Lv.{mineLvl(selectedCard.level)?.lvl}
            </span>

            <Image
              src={selectedCard.img}
              alt={selectedCard.name}
              width={200}
              height={200}
              className="mt-14"
            />
            <h2 className="font-bold text-roboto text-[14px]">
              {selectedCard.name}
            </h2>

            <p className="w-[80%] text-center font-manrope text-[14px]">
              {selectedCard.description}
            </p>
            <p className="font-roboto font-[14px] text-[#C0C4C6]">
              Income per hour + {mineLvl(selectedCard.level)?.profit}
            </p>
            <div className="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
              >
                <g clip-path="url(#clip0_4569_1831)">
                  <path
                    d="M11.5 22C17.5751 22 22.5 17.0751 22.5 11C22.5 4.92487 17.5751 0 11.5 0C5.42487 0 0.5 4.92487 0.5 11C0.5 17.0751 5.42487 22 11.5 22Z"
                    fill="#F0D64D"
                  />
                  <path
                    opacity="0.2"
                    d="M15.8669 0.902344L1.09686 14.5819C1.41272 15.4992 1.84909 16.3705 2.39452 17.1729L18.3505 2.39164C17.5919 1.78789 16.7568 1.28712 15.8669 0.902344ZM19.0973 3.04562L2.98749 17.9665C3.22038 18.251 3.46673 18.5231 3.72655 18.7829L19.8544 3.84484C19.6156 3.56582 19.3629 3.29894 19.0973 3.0452V3.04562ZM20.6309 4.86406L4.68432 19.6341C5.39662 20.1973 6.17601 20.67 7.00464 21.0414L21.8555 7.28449C21.5491 6.43007 21.1378 5.61703 20.6309 4.86406Z"
                    fill="white"
                  />
                  <path
                    d="M18.0093 17.5117C21.6057 13.9154 21.6057 8.0846 18.0093 4.48828C14.413 0.891959 8.58222 0.891959 4.9859 4.48828C1.38958 8.0846 1.38958 13.9154 4.9859 17.5117C8.58222 21.108 14.413 21.108 18.0093 17.5117Z"
                    fill="#FFFA89"
                  />
                  <path
                    d="M17.7223 17.2246C21.16 13.7869 21.16 8.21314 17.7223 4.77536C14.2845 1.33759 8.71075 1.33759 5.27298 4.77536C1.8352 8.21314 1.8352 13.7869 5.27298 17.2246C8.71075 20.6624 14.2845 20.6624 17.7223 17.2246Z"
                    fill="#DFBF4F"
                  />
                  <path
                    opacity="0.18"
                    d="M14.0605 2.57507L2.90625 12.9073C3.1217 13.8814 3.502 14.8114 4.03074 15.6573L16.716 3.90753C15.913 3.31562 15.015 2.86501 14.0605 2.57507ZM17.4817 4.54175L4.60352 16.4699C4.83182 16.7577 5.07779 17.0311 5.34 17.2884L18.2414 5.33882C18.005 5.05756 17.7513 4.79135 17.4817 4.54175ZM18.9946 6.37953L6.31883 18.1182C7.07266 18.6675 7.90932 19.0931 8.79727 19.3789L20.0615 8.94691C19.845 8.03971 19.4848 7.17298 18.9946 6.37953Z"
                    fill="#C8C8C8"
                  />
                  <path
                    d="M18.7188 3.78128C16.7922 1.9259 14.2145 0.900574 11.5398 0.925754C8.86522 0.950935 6.30726 2.02461 4.41594 3.91594C2.52461 5.80726 1.45093 8.36522 1.42575 11.0398C1.40057 13.7145 2.4259 16.2922 4.28128 18.2188C6.20788 20.0742 8.78559 21.0995 11.4602 21.0743C14.1348 21.0491 16.6928 19.9754 18.5841 18.0841C20.4754 16.1928 21.5491 13.6348 21.5743 10.9602C21.5995 8.28559 20.5742 5.70788 18.7188 3.78128ZM11.5 21.0814C5.94116 21.0814 1.4187 16.5589 1.4187 11C1.4187 5.44116 5.94116 0.918701 11.5 0.918701C17.0589 0.918701 21.5814 5.44116 21.5814 11C21.5814 16.5589 17.0589 21.0814 11.5 21.0814Z"
                    fill="#F2C341"
                  />
                  <path
                    d="M10.6836 16.2779V15.321C10.5836 15.3021 10.4854 15.2796 10.3888 15.2535C10.0455 15.1605 9.71731 15.0187 9.4143 14.8324C9.10452 14.6391 8.82138 14.4061 8.57211 14.1393L8.36328 13.9189L9.56898 12.458L9.8341 12.7785C10.0404 13.0373 10.299 13.2498 10.5929 13.402C10.8688 13.5375 11.1725 13.6065 11.4798 13.6035C11.9142 13.6035 12.2318 13.5266 12.423 13.3749C12.5927 13.2408 12.6752 13.0281 12.6752 12.7248V12.7188C12.6752 12.5387 12.6382 12.4021 12.5661 12.3127C12.4773 12.2049 12.3615 12.1226 12.2305 12.0742C12.0053 11.9923 11.7734 11.9305 11.5374 11.8895H11.5292C11.5061 11.8872 11.4833 11.883 11.4609 11.877L11.4227 11.8697L11.3616 11.8581C10.9404 11.7858 10.5259 11.6784 10.1224 11.5371C9.75719 11.4009 9.44352 11.1538 9.18914 10.8024C8.93477 10.4509 8.80242 9.95459 8.80242 9.33756V9.33197C8.80242 8.74459 8.91414 8.24357 9.13414 7.84311C9.36314 7.42681 9.7224 7.09714 10.1568 6.90467C10.3268 6.82763 10.5038 6.76692 10.6853 6.72334V5.72217H12.4861V6.67607L12.5721 6.69283C12.8493 6.75233 13.1197 6.84016 13.379 6.95494C13.6503 7.07547 13.9107 7.21924 14.1572 7.38463L14.455 7.58314L13.3777 9.06385L13.1027 8.87779C12.883 8.72581 12.6448 8.60263 12.3937 8.51127C12.1854 8.43707 11.9661 8.39829 11.7449 8.39654C11.3492 8.39654 11.0574 8.47002 10.8855 8.61525C10.727 8.74416 10.6501 8.95127 10.6501 9.2426V9.24818C10.6501 9.43252 10.6905 9.57131 10.77 9.66025C10.8724 9.77348 11.0026 9.85804 11.1477 9.90561C11.4169 9.99377 11.6909 10.0666 11.9684 10.1239L12.0199 10.1368L12.0534 10.1441L12.1127 10.1565L12.1557 10.166H12.1639C12.5599 10.2473 12.9457 10.3718 13.3146 10.5372C13.6722 10.7103 13.9727 10.9823 14.1804 11.321C14.4086 11.6776 14.5241 12.155 14.5241 12.739V12.7497C14.5241 13.3225 14.4073 13.8119 14.1765 14.2042C13.9393 14.6077 13.5831 14.9123 13.1169 15.1104C12.9143 15.1947 12.7037 15.2584 12.4883 15.3003V16.2757L10.6836 16.2779Z"
                    fill="#FFFA89"
                  />
                  <path
                    d="M10.4795 14.9218C10.1679 14.8376 9.8701 14.7089 9.59521 14.5398C9.3105 14.3628 9.05043 14.149 8.82178 13.9038L9.56943 12.9976C9.80618 13.2938 10.1028 13.5366 10.44 13.7101C10.7633 13.8693 11.1194 13.9506 11.4798 13.9472C11.9954 13.9472 12.381 13.847 12.6365 13.6465C12.8921 13.4459 13.0195 13.1394 13.019 12.7269V12.7188C13.019 12.4572 12.9571 12.2498 12.8333 12.0966C12.7063 11.9417 12.5406 11.8231 12.3529 11.7528C12.1084 11.6632 11.8563 11.5956 11.5997 11.5509C11.59 11.5475 11.5799 11.5456 11.5696 11.5453C11.5594 11.5451 11.5493 11.5433 11.5396 11.5401L11.4824 11.529L11.4248 11.5182C10.9378 11.4271 10.5431 11.3252 10.2406 11.2123C9.93811 11.0994 9.68029 10.8947 9.46717 10.5983C9.25261 10.3018 9.14533 9.88068 9.14533 9.33498V9.32939C9.14533 8.7983 9.24172 8.35716 9.43451 8.00596C9.62808 7.65429 9.93205 7.37614 10.2995 7.21447C10.6836 7.03801 11.1649 6.94979 11.7432 6.94979C11.9974 6.94966 12.2508 6.97616 12.4995 7.02885C12.7536 7.08332 13.0014 7.16381 13.239 7.26904C13.492 7.38159 13.7348 7.51587 13.9647 7.67037L13.2931 8.59377C13.0487 8.42489 12.7836 8.28827 12.5042 8.18728C12.2597 8.10034 12.0023 8.05516 11.7428 8.05365C11.2624 8.05365 10.9022 8.15277 10.6621 8.351C10.4221 8.54923 10.3021 8.84671 10.3021 9.24346V9.24904C10.3021 9.52204 10.3712 9.73574 10.5096 9.89014C10.6509 10.047 10.8305 10.1646 11.0308 10.2313C11.3127 10.3237 11.5996 10.4002 11.8902 10.4603L11.9331 10.4715C11.9478 10.4749 11.9641 10.4788 11.9821 10.4822L12.0341 10.4934L12.0861 10.5042C12.457 10.5796 12.8184 10.6959 13.1638 10.8509C13.4629 10.9962 13.7139 11.2244 13.8869 11.5083C14.08 11.8103 14.1764 12.2215 14.1761 12.742V12.7527C14.1761 13.2658 14.0759 13.6924 13.8753 14.0328C13.6748 14.3731 13.3755 14.6279 12.9773 14.7972C12.5788 14.9659 12.0795 15.0504 11.4794 15.0507C11.1419 15.0523 10.8056 15.0089 10.4795 14.9218ZM11.0274 6.06592H12.1411V7.31201H11.0274V6.06592ZM11.0274 14.6188H12.1411V15.9341H11.0274V14.6188Z"
                    fill="#F0D64D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4569_1831">
                    <rect
                      width="22"
                      height="22"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <h3 className="text-lg font-roboto font-bold">
                {mineLvl(selectedCard.level)?.price.toLocaleString()}
              </h3>
            </div>
            {mineLvl(selectedCard.level)?.required && (
              <h2 className="text-xs font-bold font-roboto">
                {mineLvl(selectedCard.level)?.required?.type} Lv.
                {mineLvl(selectedCard.level)?.required?.lvl}{" "}
                <span className="text-[#FFFFFF99]">Required</span>
              </h2>
            )}
            <Button
              className="bg-[#00ACE6] rounded p-4 w-full text-white mb-4"
              isLoading={loader}
              onClick={async () => {
                const profit = mineLvl(selectedCard.level)?.profit;
                const level = mineLvl(selectedCard.level)?.lvl;
                const balance = mineLvl(selectedCard.level)?.price;
                if (profit && balance && level) {
                  await updateMine(profit, level, balance);
                }
              }}
            >
              Buy Card
            </Button>
          </div>
          <Toaster />
        </div>
      )}
    </>
  );
};
