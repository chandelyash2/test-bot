import { Container } from "@/components/Container";
import { Layout } from "@/components/Layout";
import { Progress } from "@nextui-org/react";
import Image from "next/image";
import Boost from "../../../public/svg/Boost.svg";
import Link from "next/link";
const QuestPage = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-4 pb-[120px]">
        <div className="flex items-center justify-between border-b border-[#5C666C] p-4">
          <span className="flex items-center gap-4">
            <Image src="/img/28.png" alt="avatr" width={40} height={40} />
            <h2 className="font-inter font-bold font-sm">Tony Montana</h2>
          </span>
          <span className="flex items-center gap-2 p-3 bg-[#242D32]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 14 15"
              fill="none"
            >
              <g clip-path="url(#clip0_4522_10599)">
                <path
                  d="M7 14.5C10.866 14.5 14 11.366 14 7.5C14 3.63401 10.866 0.5 7 0.5C3.13401 0.5 0 3.63401 0 7.5C0 11.366 3.13401 14.5 7 14.5Z"
                  fill="#F0D64D"
                />
                <path
                  opacity="0.2"
                  d="M9.77893 1.07422L0.379791 9.77937C0.580792 10.3631 0.858483 10.9176 1.20557 11.4282L11.3594 2.02195C10.8767 1.63775 10.3452 1.31907 9.77893 1.07422ZM11.8346 2.43812L1.58292 11.9332C1.73112 12.1143 1.88789 12.2874 2.05323 12.4528L12.3164 2.94672C12.1644 2.76916 12.0036 2.59932 11.8346 2.43785V2.43812ZM12.8105 3.59531L2.66272 12.9945C3.116 13.3528 3.61197 13.6536 4.13928 13.89L13.5898 5.13559C13.3949 4.59186 13.1331 4.07448 12.8105 3.59531Z"
                  fill="white"
                />
                <path
                  d="M11.1423 11.6438C13.4308 9.35525 13.4308 5.64475 11.1423 3.35618C8.85371 1.06761 5.1432 1.06761 2.85464 3.35618C0.566067 5.64475 0.566067 9.35525 2.85464 11.6438C5.1432 13.9324 8.85371 13.9324 11.1423 11.6438Z"
                  fill="#FFFA89"
                />
                <path
                  d="M10.9596 11.4611C13.1473 9.27346 13.1473 5.72654 10.9596 3.53887C8.77193 1.35119 5.22501 1.35119 3.03734 3.53887C0.849662 5.72654 0.849662 9.27346 3.03734 11.4611C5.22501 13.6488 8.77193 13.6488 10.9596 11.4611Z"
                  fill="#DFBF4F"
                />
                <path
                  opacity="0.18"
                  d="M8.62941 2.13867L1.53125 8.71375C1.66836 9.33359 1.91037 9.92544 2.24684 10.4638L10.3193 2.9866C9.80829 2.60993 9.23681 2.32318 8.62941 2.13867ZM10.8065 3.3902L2.61133 10.9808C2.75661 11.164 2.91314 11.338 3.08 11.5017L11.29 3.89742C11.1395 3.71844 10.9781 3.54903 10.8065 3.3902ZM11.7693 4.55969L3.70289 12.0297C4.1826 12.3793 4.71502 12.6502 5.28008 12.832L12.4482 6.19348C12.3105 5.61617 12.0813 5.06461 11.7693 4.55969Z"
                  fill="#C8C8C8"
                />
                <path
                  d="M11.5937 2.90624C10.3677 1.72554 8.72735 1.07306 7.02532 1.08908C5.32329 1.10511 3.6955 1.78835 2.49193 2.99193C1.28835 4.1955 0.605107 5.82329 0.589083 7.52532C0.573059 9.22735 1.22554 10.8677 2.40624 12.0937C3.63226 13.2744 5.27262 13.9269 6.97465 13.9109C8.67668 13.8949 10.3045 13.2116 11.508 12.008C12.7116 10.8045 13.3949 9.17668 13.4109 7.47465C13.4269 5.77262 12.7744 4.13226 11.5937 2.90624ZM6.99999 13.9154C3.46252 13.9154 0.584595 11.0374 0.584595 7.49999C0.584595 3.96252 3.46252 1.08459 6.99999 1.08459C10.5374 1.08459 13.4154 3.96252 13.4154 7.49999C13.4154 11.0374 10.5374 13.9154 6.99999 13.9154Z"
                  fill="#F2C341"
                />
                <path
                  d="M6.48047 10.8586V10.2497C6.41685 10.2376 6.35432 10.2233 6.29289 10.2067C6.07441 10.1476 5.86556 10.0573 5.67273 9.93878C5.4756 9.81579 5.29543 9.66751 5.1368 9.49773L5.00391 9.35745L5.77117 8.42776L5.93988 8.63175C6.07119 8.79645 6.23573 8.93164 6.42277 9.02851C6.59831 9.11472 6.79159 9.15864 6.98715 9.15675C7.26359 9.15675 7.46566 9.1078 7.58734 9.01128C7.69535 8.92597 7.74785 8.79062 7.74785 8.59757V8.59374C7.74785 8.47917 7.72434 8.39222 7.6784 8.33534C7.6219 8.26675 7.54821 8.21438 7.46484 8.18358C7.32159 8.13144 7.17399 8.0921 7.02379 8.06601H7.01859C7.00391 8.06456 6.98937 8.06191 6.97512 8.05808L6.95078 8.05343L6.91195 8.04605C6.64387 8 6.38009 7.93168 6.12336 7.84179C5.89094 7.75511 5.69133 7.59788 5.52945 7.37421C5.36758 7.15054 5.28336 6.83472 5.28336 6.44206V6.43851C5.28336 6.06472 5.35445 5.74589 5.49445 5.49105C5.64018 5.22613 5.8688 5.01634 6.14523 4.89386C6.25344 4.84483 6.36605 4.8062 6.48156 4.77847V4.14136H7.62754V4.74839L7.68223 4.75905C7.85866 4.79692 8.03074 4.85281 8.19574 4.92585C8.36838 5.00255 8.53406 5.09404 8.69094 5.19929L8.88043 5.32562L8.19492 6.26788L8.01992 6.14948C7.88012 6.05276 7.72849 5.97438 7.56875 5.91624C7.43616 5.86902 7.2966 5.84434 7.15586 5.84323C6.90402 5.84323 6.71836 5.88999 6.60898 5.98241C6.50809 6.06444 6.45914 6.19624 6.45914 6.38163V6.38519C6.45914 6.50249 6.48484 6.59081 6.53543 6.64741C6.60061 6.71946 6.68345 6.77328 6.77578 6.80355C6.94711 6.85965 7.12148 6.90602 7.29805 6.94245L7.33086 6.95065L7.35219 6.9553L7.38992 6.96323L7.41727 6.96925H7.42246C7.67446 7.02097 7.92002 7.1002 8.15473 7.2055C8.3823 7.31565 8.57351 7.48874 8.7057 7.70425C8.8509 7.9312 8.92445 8.23499 8.92445 8.60659V8.61343C8.92445 8.97792 8.85008 9.28937 8.70324 9.53901C8.5523 9.79577 8.32563 9.98964 8.02895 10.1157C7.90001 10.1694 7.76598 10.2099 7.62891 10.2366V10.8573L6.48047 10.8586Z"
                  fill="#FFFA89"
                />
                <path
                  d="M6.35058 9.99565C6.1523 9.94208 5.96277 9.86021 5.78784 9.75257C5.60666 9.63996 5.44116 9.50388 5.29565 9.34788L5.77144 8.7712C5.92209 8.95966 6.11088 9.11416 6.32542 9.22456C6.53115 9.32593 6.7578 9.37762 6.98714 9.3755C7.31526 9.3755 7.56063 9.3117 7.72323 9.18409C7.88584 9.05649 7.96696 8.86144 7.96659 8.59894V8.59374C7.96659 8.42731 7.92722 8.29533 7.84847 8.1978C7.76763 8.09922 7.66216 8.02375 7.54276 7.97905C7.38714 7.92199 7.22672 7.87898 7.06343 7.85054C7.05726 7.8484 7.05081 7.8472 7.04429 7.84698C7.03778 7.84685 7.03133 7.84574 7.02515 7.8437L6.98878 7.83659L6.95214 7.82976C6.64224 7.77179 6.39104 7.70689 6.19854 7.63507C6.00604 7.56325 5.84198 7.433 5.70636 7.24433C5.56982 7.05565 5.50155 6.78769 5.50155 6.44042V6.43687C5.50155 6.0989 5.56289 5.81817 5.68558 5.59468C5.80875 5.37089 6.00219 5.19389 6.23601 5.09101C6.48046 4.97871 6.78671 4.92257 7.15476 4.92257C7.31649 4.92249 7.47779 4.93935 7.63601 4.97288C7.7977 5.00755 7.95539 5.05877 8.10659 5.12573C8.26763 5.19736 8.42215 5.28281 8.56843 5.38112L8.14105 5.96874C7.98553 5.86127 7.81679 5.77433 7.63901 5.71007C7.48342 5.65474 7.31962 5.62599 7.15448 5.62503C6.84878 5.62503 6.61955 5.6881 6.46679 5.81425C6.31403 5.94039 6.23765 6.1297 6.23765 6.38218V6.38573C6.23765 6.55946 6.28167 6.69545 6.36972 6.7937C6.45963 6.89355 6.57392 6.96835 6.7014 7.01081C6.8808 7.06963 7.06338 7.11829 7.24827 7.15655L7.27561 7.16366C7.28491 7.16585 7.2953 7.16831 7.30679 7.1705L7.33987 7.17761L7.37296 7.18444C7.60899 7.23248 7.83899 7.30648 8.05874 7.40511C8.24907 7.49757 8.4088 7.64279 8.51893 7.82347C8.6418 8.0156 8.70314 8.27728 8.70296 8.60851V8.61534C8.70296 8.94183 8.63916 9.21335 8.51155 9.42991C8.38395 9.64647 8.19345 9.80862 7.94007 9.91636C7.6865 10.0237 7.36877 10.0775 6.98687 10.0777C6.77207 10.0787 6.55809 10.0511 6.35058 9.99565ZM6.69921 4.36011H7.40796V5.15308H6.69921V4.36011ZM6.69921 9.80288H7.40796V10.6399H6.69921V9.80288Z"
                  fill="#F0D64D"
                />
              </g>
              <defs>
                <clipPath id="clip0_4522_10599">
                  <rect
                    width="14"
                    height="14"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <h2 className="text-xs font-semibold font-roboto">
              Auto Mining <span className="fnt-semibold">K2900 hr</span>
            </h2>
          </span>
        </div>

        <Container>
          <div className="flex justify-between font-manrope font-medium text-xs items-center">
            <span className="flex items-center gap-4">
              <h4>Rank 5/5</h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 3.125C6.20304 3.125 3.125 6.20304 3.125 10C3.125 13.797 6.20304 16.875 10 16.875C13.797 16.875 16.875 13.797 16.875 10C16.875 6.20304 13.797 3.125 10 3.125ZM1.875 10C1.875 5.51269 5.51269 1.875 10 1.875C14.4873 1.875 18.125 5.51269 18.125 10C18.125 14.4873 14.4873 18.125 10 18.125C5.51269 18.125 1.875 14.4873 1.875 10Z"
                    fill="white"
                  />
                  <path
                    d="M10 15C10.5178 15 10.9375 14.5803 10.9375 14.0625C10.9375 13.5447 10.5178 13.125 10 13.125C9.48223 13.125 9.0625 13.5447 9.0625 14.0625C9.0625 14.5803 9.48223 15 10 15Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.9237 5.83909C9.43762 5.62622 10.0031 5.57052 10.5487 5.67904C11.0943 5.78756 11.5954 6.05543 11.9887 6.44876C12.3821 6.8421 12.6499 7.34324 12.7585 7.88881C12.867 8.43438 12.8113 8.99988 12.5984 9.5138C12.3855 10.0277 12.0251 10.467 11.5625 10.776C11.2758 10.9676 10.9578 11.1038 10.625 11.1797V11.25C10.625 11.5952 10.3452 11.875 10 11.875C9.65482 11.875 9.375 11.5952 9.375 11.25V10.625C9.375 10.4592 9.44085 10.3003 9.55806 10.1831C9.67527 10.0658 9.83424 10 10 10C10.309 10 10.6111 9.90836 10.8681 9.73667C11.125 9.56498 11.3253 9.32095 11.4436 9.03544C11.5618 8.74993 11.5928 8.43577 11.5325 8.13267C11.4722 7.82958 11.3234 7.55117 11.1049 7.33265C10.8863 7.11413 10.6079 6.96531 10.3048 6.90502C10.0017 6.84473 9.68757 6.87568 9.40206 6.99394C9.11655 7.1122 8.87252 7.31247 8.70083 7.56942C8.52914 7.82637 8.4375 8.12847 8.4375 8.4375C8.4375 8.78268 8.15768 9.0625 7.8125 9.0625C7.46732 9.0625 7.1875 8.78268 7.1875 8.4375C7.1875 7.88124 7.35245 7.33747 7.66149 6.87496C7.97053 6.41245 8.40979 6.05196 8.9237 5.83909Z"
                    fill="white"
                  />
                </svg>
              </span>
            </span>
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 14 12"
                fill="none"
              >
                <path
                  d="M13.9393 6.68974L12.0727 3.45459C12.0358 3.39045 11.9839 3.336 11.9214 3.29579C11.8588 3.25559 11.7875 3.2308 11.7133 3.22351C11.6398 3.2166 11.5656 3.22679 11.4968 3.25327C11.4279 3.27975 11.3662 3.32178 11.3167 3.37602L10.08 4.76251L7.40133 0.214818C7.3577 0.148833 7.29817 0.0946438 7.2281 0.0571407C7.15804 0.0196375 7.07964 0 7 0C6.92036 0 6.84197 0.0196375 6.7719 0.0571407C6.70183 0.0946438 6.6423 0.148833 6.59867 0.214818L3.92 4.76251L2.68333 3.37602C2.6347 3.3206 2.57316 3.27775 2.50405 3.25118C2.43493 3.22461 2.36032 3.21511 2.28667 3.22351C2.21249 3.2308 2.14116 3.25559 2.07864 3.29579C2.01612 3.336 1.96424 3.39045 1.92733 3.45459L0.0606667 6.68974C0.022142 6.75921 0.00131743 6.83695 0 6.9162V11.5378C0 11.6604 0.0491665 11.778 0.136683 11.8646C0.2242 11.9513 0.342899 12 0.466667 12H13.5333C13.6571 12 13.7758 11.9513 13.8633 11.8646C13.9508 11.778 14 11.6604 14 11.5378V6.9162C13.9987 6.83695 13.9779 6.75921 13.9393 6.68974ZM4.802 8.44134C4.84506 8.39745 4.89657 8.36257 4.95348 8.33875C5.01039 8.31493 5.07155 8.30265 5.13333 8.30265C5.19512 8.30265 5.25628 8.31493 5.31319 8.33875C5.3701 8.36257 5.42161 8.39745 5.46467 8.44134L5.93133 8.9035C6.01825 8.99009 6.06704 9.10723 6.06704 9.22933C6.06704 9.35142 6.01825 9.46856 5.93133 9.55515C5.84287 9.64108 5.72391 9.68921 5.6 9.68921C5.47609 9.68921 5.35713 9.64108 5.26867 9.55515L4.802 9.09299C4.71508 9.0064 4.6663 8.88926 4.6663 8.76716C4.6663 8.64507 4.71508 8.52793 4.802 8.44134ZM9.46867 7.51701L10.402 6.59268C10.4893 6.50565 10.6078 6.45652 10.7317 6.45609C10.8555 6.45565 10.9745 6.50396 11.0623 6.59037C11.1502 6.67678 11.1998 6.79423 11.2003 6.91687C11.2007 7.03951 11.1519 7.15731 11.0647 7.24433L10.1313 8.16866C10.0429 8.25458 9.92391 8.30271 9.8 8.30271C9.67609 8.30271 9.55713 8.25458 9.46867 8.16866C9.38175 8.08207 9.33296 7.96493 9.33296 7.84284C9.33296 7.72074 9.38175 7.6036 9.46867 7.51701ZM7 1.36561L9.43133 5.49273L7 8.2195L4.56867 5.49273L7 1.36561Z"
                  fill="url(#paint0_linear_4331_13175)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4331_13175"
                    x1="2.05025"
                    y1="1.75736"
                    x2="10.4357"
                    y2="11.5404"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.00558659" stop-color="#DBEEFF" />
                    <stop offset="1" stop-color="#748894" />
                  </linearGradient>
                </defs>
              </svg>
              <h4>Nimbi Wolf</h4>
            </span>
          </div>
          <Progress
            aria-label="Loading..."
            value={60}
            className="max-w-md mt-4"
            color="secondary"
          />
        </Container>
        <Container>
          <div className="flex justify-between items-center">
            <h2 className="font-roboto">Balance</h2>
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
              >
                <g clip-path="url(#clip0_4320_1065)">
                  <path
                    d="M12.5 25.5C19.4036 25.5 25 19.9036 25 13C25 6.09644 19.4036 0.5 12.5 0.5C5.59644 0.5 0 6.09644 0 13C0 19.9036 5.59644 25.5 12.5 25.5Z"
                    fill="#C8C8C8"
                  />
                  <path
                    opacity="0.2"
                    d="M17.4624 1.52539L0.678223 17.0703C1.03715 18.1127 1.53303 19.1029 2.15283 20.0146L20.2847 3.21777C19.4226 2.53169 18.4737 1.96263 17.4624 1.52539ZM21.1333 3.96094L2.82666 20.9165C3.09131 21.2397 3.37126 21.549 3.6665 21.8442L21.9937 4.86914C21.7222 4.55207 21.4351 4.24879 21.1333 3.96045V3.96094ZM22.876 6.02734L4.75488 22.8115C5.56431 23.4515 6.44998 23.9886 7.3916 24.4106L24.2676 8.77783C23.9194 7.8069 23.452 6.88299 22.876 6.02734Z"
                    fill="white"
                  />
                  <path
                    d="M19.8969 20.3997C23.9837 16.3129 23.9837 9.68705 19.8969 5.60032C15.8102 1.51359 9.18432 1.51359 5.09759 5.60032C1.01086 9.68705 1.01086 16.3129 5.09759 20.3997C9.18432 24.4864 15.8102 24.4864 19.8969 20.3997Z"
                    fill="#7A7A7A"
                  />
                  <path
                    d="M19.5707 20.0735C23.4773 16.1669 23.4773 9.83311 19.5707 5.92655C15.6642 2.01999 9.33038 2.01999 5.42382 5.92655C1.51726 9.83311 1.51726 16.1669 5.42382 20.0735C9.33038 23.98 15.6642 23.98 19.5707 20.0735Z"
                    fill="#888888"
                  />
                  <path
                    opacity="0.18"
                    d="M15.4097 3.42627L2.73438 15.1675C2.97921 16.2743 3.41137 17.3312 4.01221 18.2925L18.4272 4.94043C17.5148 4.2678 16.4943 3.75574 15.4097 3.42627ZM19.2974 5.66113L4.66309 19.2158C4.92252 19.5429 5.20203 19.8536 5.5 20.146L20.1606 6.56689C19.892 6.24728 19.6037 5.94477 19.2974 5.66113ZM21.0166 7.74951L6.6123 21.0889C7.46893 21.7132 8.41969 22.1968 9.42871 22.5215L22.229 10.667C21.983 9.63609 21.5737 8.65116 21.0166 7.74951Z"
                    fill="#C8C8C8"
                  />
                  <path
                    d="M20.7031 4.79688C18.5138 2.68848 15.5846 1.52335 12.5452 1.55196C9.50589 1.58057 6.59913 2.80066 4.44989 4.94989C2.30066 7.09913 1.08057 10.0059 1.05196 13.0452C1.02335 16.0846 2.18848 19.0138 4.29688 21.2031C6.4862 23.3115 9.41542 24.4767 12.4548 24.448C15.4941 24.4194 18.4009 23.1993 20.5501 21.0501C22.6993 18.9009 23.9194 15.9941 23.948 12.9548C23.9767 9.91542 22.8115 6.9862 20.7031 4.79688ZM12.5 24.4561C6.18311 24.4561 1.04395 19.3169 1.04395 13C1.04395 6.68311 6.18311 1.54395 12.5 1.54395C18.8169 1.54395 23.9561 6.68311 23.9561 13C23.9561 19.3169 18.8169 24.4561 12.5 24.4561Z"
                    fill="#F2C341"
                  />
                  <path
                    d="M11.5723 18.9976V17.9102C11.4587 17.8887 11.347 17.8631 11.2373 17.8335C10.8472 17.7278 10.4742 17.5667 10.1299 17.355C9.77786 17.1353 9.45612 16.8706 9.17285 16.5674L8.93555 16.3169L10.3057 14.6567L10.6069 15.021C10.8414 15.3151 11.1352 15.5565 11.4692 15.7295C11.7827 15.8835 12.1278 15.9619 12.4771 15.9585C12.9707 15.9585 13.3315 15.8711 13.5488 15.6987C13.7417 15.5464 13.8354 15.3047 13.8354 14.96V14.9531C13.8354 14.7485 13.7935 14.5933 13.7114 14.4917C13.6105 14.3692 13.4789 14.2757 13.3301 14.2207C13.0743 14.1276 12.8107 14.0573 12.5425 14.0107H12.5332C12.507 14.0082 12.481 14.0034 12.4556 13.9966L12.4121 13.9883L12.3428 13.9751C11.864 13.8929 11.393 13.7709 10.9346 13.6104C10.5195 13.4556 10.1631 13.1748 9.87402 12.7754C9.58496 12.376 9.43457 11.812 9.43457 11.1108V11.1045C9.43457 10.437 9.56152 9.86768 9.81152 9.4126C10.0718 8.93953 10.48 8.5649 10.9736 8.34619C11.1669 8.25865 11.368 8.18966 11.5742 8.14014V7.00244H13.6206V8.08643L13.7183 8.10547C14.0333 8.17308 14.3406 8.27289 14.6353 8.40332C14.9435 8.54029 15.2394 8.70366 15.5195 8.8916L15.8579 9.11719L14.6338 10.7998L14.3213 10.5884C14.0716 10.4157 13.8009 10.2757 13.5156 10.1719C13.2789 10.0876 13.0296 10.0435 12.7783 10.0415C12.3286 10.0415 11.9971 10.125 11.8018 10.29C11.6216 10.4365 11.5342 10.6719 11.5342 11.0029V11.0093C11.5342 11.2188 11.5801 11.3765 11.6704 11.4775C11.7868 11.6062 11.9347 11.7023 12.0996 11.7563C12.4056 11.8565 12.7169 11.9393 13.0322 12.0044L13.0908 12.019L13.1289 12.0273L13.1963 12.0415L13.2451 12.0522H13.2544C13.7044 12.1446 14.1429 12.2861 14.562 12.4741C14.9684 12.6708 15.3098 12.9799 15.5459 13.3647C15.8052 13.77 15.9365 14.3125 15.9365 14.9761V14.9883C15.9365 15.6392 15.8037 16.1953 15.5415 16.6411C15.272 17.0996 14.8672 17.4458 14.3374 17.6709C14.1072 17.7667 13.8678 17.839 13.623 17.8867V18.9951L11.5723 18.9976Z"
                    fill="#7A7A7A"
                  />
                  <path
                    d="M11.3403 17.4565C10.9863 17.3609 10.6478 17.2147 10.3354 17.0225C10.0119 16.8214 9.71637 16.5784 9.45654 16.2998L10.3062 15.27C10.5752 15.6066 10.9123 15.8824 11.2954 16.0796C11.6628 16.2606 12.0675 16.3529 12.4771 16.3491C13.063 16.3491 13.5011 16.2352 13.7915 16.0073C14.0819 15.7795 14.2267 15.4312 14.2261 14.9624V14.9531C14.2261 14.6559 14.1558 14.4202 14.0151 14.2461C13.8708 14.07 13.6825 13.9353 13.4692 13.8555C13.1913 13.7536 12.9049 13.6768 12.6133 13.626C12.6023 13.6222 12.5907 13.62 12.5791 13.6196C12.5675 13.6194 12.556 13.6174 12.5449 13.6138L12.48 13.6011L12.4146 13.5889C11.8612 13.4854 11.4126 13.3695 11.0688 13.2412C10.7251 13.113 10.4321 12.8804 10.1899 12.5435C9.94613 12.2065 9.82422 11.728 9.82422 11.1079V11.1016C9.82422 10.498 9.93376 9.99675 10.1528 9.59766C10.3728 9.19804 10.7182 8.88196 11.1357 8.69824C11.5723 8.49772 12.1191 8.39746 12.7764 8.39746C13.0652 8.39732 13.3532 8.42743 13.6357 8.4873C13.9245 8.54921 14.2061 8.64067 14.4761 8.76025C14.7636 8.88815 15.0396 9.04074 15.3008 9.21631L14.5376 10.2656C14.2599 10.0737 13.9586 9.91846 13.6411 9.80371C13.3633 9.7049 13.0708 9.65357 12.7759 9.65186C12.23 9.65186 11.8206 9.76449 11.5479 9.98975C11.2751 10.215 11.1387 10.5531 11.1387 11.0039V11.0103C11.1387 11.3205 11.2173 11.5633 11.3745 11.7388C11.5351 11.9171 11.7392 12.0506 11.9668 12.1265C12.2872 12.2315 12.6132 12.3184 12.9434 12.3867L12.9922 12.3994C13.0088 12.4033 13.0273 12.4077 13.0479 12.4116L13.1069 12.4243L13.166 12.4365C13.5875 12.5223 13.9982 12.6544 14.3906 12.8306C14.7305 12.9957 15.0157 13.255 15.2124 13.5776C15.4318 13.9207 15.5413 14.388 15.541 14.9795V14.9917C15.541 15.5747 15.4271 16.0596 15.1992 16.4463C14.9714 16.833 14.6312 17.1226 14.1787 17.3149C13.7259 17.5067 13.1585 17.6027 12.4766 17.603C12.093 17.6048 11.7109 17.5556 11.3403 17.4565ZM11.9629 7.39307H13.2285V8.80908H11.9629V7.39307ZM11.9629 17.1123H13.2285V18.6069H11.9629V17.1123Z"
                    fill="#C8C8C8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4320_1065">
                    <rect
                      width="25"
                      height="25"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <h2 className="font-istok text-3xl font-semibold">4 000 748</h2>
            </span>
          </div>
        </Container>
        <Image
          src="/img/Quest.png"
          width={200}
          height={200}
          alt="quest"
          className="h-[350px] w-full"
        />
        <Container>
          <div className="flex justify-between font-manrope font-medium text-xs items-center">
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="22"
                viewBox="0 0 13 22"
                fill="none"
              >
                <path
                  d="M2.41833 21.8215C2.09866 21.6084 2.06314 21.4841 2.18746 21.1111C3.14647 18.2814 4.10549 15.4458 5.07042 12.6161C5.10002 12.5332 5.1237 12.4444 5.15922 12.3379C5.05266 12.3379 4.98163 12.3379 4.90467 12.3379C3.60822 12.3379 2.31177 12.3379 1.01532 12.3379C0.553575 12.3379 0.3819 12.0656 0.583175 11.6453C2.34729 7.93943 4.11141 4.23361 5.8696 0.527777C5.988 0.273224 6.17152 0.166664 6.44975 0.166664C8.25531 0.172584 10.0609 0.166666 11.8664 0.172586C12.3755 0.172586 12.565 0.504097 12.3045 0.948086C10.9962 3.18579 9.68791 5.4235 8.38554 7.6612C8.3441 7.73224 8.30266 7.80328 8.24346 7.90983C8.3441 7.91575 8.42106 7.92167 8.4921 7.92167C9.74119 7.92167 10.9903 7.92167 12.2334 7.92167C12.3045 7.92167 12.3755 7.91576 12.4466 7.9276C12.8728 7.98679 13.0385 8.3775 12.784 8.72085C12.2749 9.39572 11.7658 10.0706 11.2508 10.7454C8.52762 14.3329 5.8104 17.9262 3.08727 21.5077C2.98663 21.638 2.8268 21.7268 2.69064 21.8333C2.58409 21.8215 2.50121 21.8215 2.41833 21.8215Z"
                  fill="#00ACE6"
                />
              </svg>
              <h2 className="font-bold font-istok text-lg">145/2500</h2>
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

export default QuestPage;
