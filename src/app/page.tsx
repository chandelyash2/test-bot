import { Layout } from "@/components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div className="relative h-screen">
        <Image
          src="/img/Home_1.png"
          alt="home1"
          width={200}
          height={200}
          className="absolute top-[8%] right-0 w-auto h-auto z-10"
        />
        <Image
          src="/img/Home.png"
          alt="home"
          width={500}
          height={500}
          className="absolute top-[-25%] w-auto h-auto z-20"
        />
        <div className="bg-custom-gradient absolute top-[40%] w-full h-[100px] z-30"></div>
        <div className="absolute top-[50%] left-0 w-full z-30  flex flex-col items-center gap-3 text-center">
          <div className="flex justify-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="26"
              viewBox="0 0 31 26"
              fill="none"
            >
              <path
                d="M30.37 14.4944L26.37 7.48494C26.2909 7.34597 26.1797 7.22799 26.0458 7.14089C25.9118 7.05378 25.759 7.00007 25.6 6.98426C25.4424 6.9693 25.2835 6.99138 25.1359 7.04875C24.9884 7.10612 24.8562 7.19719 24.75 7.31471L22.1 10.3188L16.36 0.465439C16.2665 0.322471 16.1389 0.205062 15.9888 0.123805C15.8386 0.0425479 15.6707 0 15.5 0C15.3293 0 15.1614 0.0425479 15.0112 0.123805C14.8611 0.205062 14.7335 0.322471 14.64 0.465439L8.9 10.3188L6.25 7.31471C6.14578 7.19464 6.01391 7.1018 5.86581 7.04422C5.71771 6.98665 5.55783 6.96607 5.4 6.98426C5.24105 7.00007 5.08819 7.05378 4.95423 7.14089C4.82026 7.22799 4.70908 7.34597 4.63 7.48494L0.63 14.4944C0.547447 14.645 0.502823 14.8134 0.5 14.9851V24.9986C0.5 25.2642 0.605357 25.5189 0.792893 25.7067C0.98043 25.8945 1.23478 26 1.5 26H29.5C29.7652 26 30.0196 25.8945 30.2071 25.7067C30.3946 25.5189 30.5 25.2642 30.5 24.9986V14.9851C30.4972 14.8134 30.4526 14.645 30.37 14.4944ZM10.79 18.2896C10.8823 18.1945 10.9926 18.1189 11.1146 18.0673C11.2365 18.0157 11.3676 17.9891 11.5 17.9891C11.6324 17.9891 11.7635 18.0157 11.8854 18.0673C12.0074 18.1189 12.1177 18.1945 12.21 18.2896L13.21 19.2909C13.3963 19.4785 13.5008 19.7323 13.5008 19.9969C13.5008 20.2614 13.3963 20.5152 13.21 20.7028C13.0204 20.889 12.7655 20.9933 12.5 20.9933C12.2345 20.9933 11.9796 20.889 11.79 20.7028L10.79 19.7015C10.6037 19.5139 10.4992 19.2601 10.4992 18.9955C10.4992 18.731 10.6037 18.4772 10.79 18.2896ZM20.79 16.2869L22.79 14.2841C22.977 14.0956 23.2311 13.9891 23.4965 13.9882C23.7618 13.9872 24.0167 14.0919 24.205 14.2791C24.3933 14.4664 24.4996 14.7208 24.5006 14.9866C24.5015 15.2523 24.397 15.5075 24.21 15.6961L22.21 17.6988C22.0204 17.8849 21.7655 17.9892 21.5 17.9892C21.2345 17.9892 20.9796 17.8849 20.79 17.6988C20.6038 17.5111 20.4992 17.2574 20.4992 16.9928C20.4992 16.7283 20.6038 16.4745 20.79 16.2869ZM15.5 2.95881L20.71 11.9009L15.5 17.8089L10.29 11.9009L15.5 2.95881Z"
                fill="url(#paint0_linear_4369_3019)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_4369_3019"
                  x1="15.5"
                  y1="26"
                  x2="15.5"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#ECB5FF" />
                  <stop offset="1" stopColor="#7137ED" />
                </linearGradient>
              </defs>
            </svg>
            <h2 className="font-istok font-bold text-2xl">Luna Wolf</h2>
          </div>
          <span className="text-blue-500 font-manrope font-semibold">
            5M / 15M
          </span>
          <p className="font-manrope w-[70%] text-sm">
            The Luna wolf is the leader of the group, responsible for protecting
            the pack, dealing with threats to the pack’s survival, making
            decisions, and leading hunts.
          </p>
        </div>
      </div>
    </Layout>
  );
}
