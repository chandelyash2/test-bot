"use client";
import { Container } from "@/components/Container";
import { Flash } from "@/components/Flash";
import { Layout } from "@/components/Layout";
import { User } from "@/components/Quest";
import { useTelegram } from "@/lib/TelegramProvider";
import { Button } from "@nextui-org/react";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const FriendsPage = () => {
  const { user } = useTelegram();
  const [userInfo, setUserInfo] = useState<User>();
  const [friends, setFriends] = useState<User[]>();

  useEffect(() => {
    if (user) {
      fetchUserInfo();
      fetchFriends();
    }
  }, [user]);

  const fetchUserInfo = async () => {
    if (user) {
      const data = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/userInfo`,
        {
          params: {
            userId: user.id,
          },
        }
      );
      if (data.data) {
        setUserInfo(data.data);
      }
    }
  };
  const fetchFriends = async () => {
    if (user) {
      const data = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/userFriend`,
        {
          params: {
            userId: user.id,
          },
        }
      );
      if (data.data) {
        setFriends(data.data);
      }
    }
  };
  const handleClick = async () => {
    console.log('Button clicked');
    if (userInfo && userInfo.userId) {
      const referralLink = `https://t.me/@xda_1_bot?start=${userInfo.userId}`;
      console.log('Referral link:', referralLink);

      try {
        if (!navigator.clipboard) {
          throw new Error('Clipboard API not supported');
        }
        await navigator.clipboard.writeText(referralLink);
        console.log('Link copied to clipboard');
        toast.success(`Copied to clipboard: ${referralLink}`);
      } catch (error:any) {
        console.error('Failed to copy link to clipboard:', error);
        toast.error('Failed to copy link to clipboard: ' + error.message);

        // Fallback: Select and copy the text manually
        const textarea = document.createElement('textarea');
        textarea.value = referralLink;
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          toast.success(`Copied to clipboard: ${referralLink}`);
        } catch (err:any) {
          toast.error('Failed to copy link to clipboard: ' + err.message);
        }
        document.body.removeChild(textarea);
      }
    } else {
      console.log('User information is not available');
      toast.error("User information is not available");
    }
  };

  return (
    <>
      {userInfo ? (
        <Layout>
          <Container>
            <div className="flex flex-col items-center gap-4 pb-[120px] py-4">
              <h2 className="text-2xl font-istok font-bold">Invite Friends</h2>
              <p className="font-manrope w-[80%] text-center">
                Receive rewards and improve your rank for each invited friend
              </p>
              <div className="bg-[#242D32] rounded border border-[#334047] flex items-center p-2 w-full gap-2">
                <Image src="/img/Gift.png" width={50} height={50} alt="gift" />
                <div>
                  <h3 className="font-roboto">Invite Friends!</h3>
                  <div className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                    >
                      <circle cx="4" cy="4" r="4" fill="#00ACE6" />
                    </svg>
                    <span className="font-marope text-xs font-semibold">
                      +5 000
                    </span>
                    <p className="text-xs font-roboto">
                      For you and for your friend
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full">
                <div className="flex items-center justify-between">
                  <h2 className="font-bold font-roboto">
                    Your Friends ({friends?.length})
                  </h2>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M18.0549 8.63985C18.0829 8.59063 18.1026 8.53714 18.1133 8.48152L18.7383 5.14819C18.7781 4.92717 18.7284 4.69941 18.6003 4.515C18.4721 4.33059 18.276 4.20464 18.0549 4.16486C17.8339 4.12507 17.6062 4.17472 17.4218 4.30287C17.2373 4.43102 17.1114 4.62717 17.0716 4.84819L16.7633 6.51486C16.0696 5.24812 15.033 4.20253 13.7723 3.49801C12.5115 2.79349 11.0778 2.45856 9.63541 2.53163C8.19303 2.60471 6.80046 3.08283 5.6174 3.91116C4.43433 4.7395 3.50868 5.8845 2.94661 7.21485C2.86416 7.41933 2.8661 7.64815 2.95201 7.85119C3.03791 8.05424 3.20078 8.21497 3.40494 8.29819C3.50666 8.3403 3.61571 8.36184 3.72579 8.36157C3.83588 8.3613 3.94482 8.33922 4.04632 8.2966C4.14783 8.25399 4.23988 8.19168 4.31717 8.11328C4.39446 8.03489 4.45544 7.94196 4.49661 7.83985C4.94539 6.73719 5.71724 5.79608 6.71076 5.14019C7.70427 4.48429 8.87296 4.14429 10.0633 4.16486C11.116 4.15994 12.1514 4.43327 13.0645 4.95716C13.9777 5.48104 14.7362 6.23689 15.2633 7.14819L13.8883 6.92319C13.7788 6.90568 13.667 6.9099 13.5592 6.9356C13.4514 6.9613 13.3497 7.00798 13.26 7.07299C13.1702 7.13799 13.0941 7.22003 13.0361 7.31444C12.978 7.40884 12.9391 7.51375 12.9216 7.62319C12.9041 7.73262 12.9083 7.84444 12.934 7.95224C12.9597 8.06005 13.0064 8.16173 13.0714 8.2515C13.1364 8.34126 13.2185 8.41734 13.3129 8.4754C13.4073 8.53345 13.5122 8.57235 13.6216 8.58986L17.1633 9.18152H17.2966C17.3933 9.18269 17.4894 9.16573 17.5799 9.13152C17.6105 9.11993 17.6387 9.103 17.6633 9.08152C17.723 9.0593 17.7792 9.02842 17.8299 8.98985L17.8966 8.90652C17.9398 8.86606 17.9789 8.8214 18.0133 8.77319C18.0335 8.731 18.0476 8.68608 18.0549 8.63985Z"
                        fill="white"
                      />
                      <path
                        d="M16.5716 11.7232C16.4694 11.6813 16.3598 11.6602 16.2494 11.661C16.1389 11.6618 16.0297 11.6846 15.9281 11.7281C15.8265 11.7715 15.7346 11.8347 15.6577 11.9139C15.5807 11.9932 15.5203 12.087 15.4799 12.1899C15.028 13.2809 14.2591 14.2113 13.2726 14.8605C12.2861 15.5098 11.1275 15.848 9.94661 15.8315C8.89387 15.8364 7.85852 15.5631 6.94537 15.0392C6.03223 14.5153 5.27371 13.7595 4.74661 12.8482L6.12161 13.0732H6.25494C6.47596 13.0909 6.69494 13.02 6.86372 12.8763C7.03251 12.7325 7.13726 12.5275 7.15494 12.3065C7.17262 12.0855 7.10178 11.8665 6.95801 11.6977C6.81423 11.529 6.60929 11.4242 6.38828 11.4065L2.84661 10.8315C2.75571 10.8148 2.66251 10.8148 2.57161 10.8315H2.50494C2.41063 10.8566 2.32071 10.8959 2.23828 10.9482C2.18209 10.9916 2.13168 11.042 2.08828 11.0982L2.01328 11.1815C1.98752 11.2318 1.96793 11.2849 1.95494 11.3399C1.92574 11.3824 1.90586 11.4307 1.89661 11.4815L1.27161 14.8149C1.24484 14.9256 1.24107 15.0407 1.26054 15.1529C1.28 15.2652 1.32227 15.3723 1.38475 15.4676C1.44723 15.5629 1.52859 15.6443 1.6238 15.7069C1.719 15.7695 1.82603 15.8119 1.93828 15.8315H2.08828C2.2856 15.8347 2.47766 15.7678 2.63027 15.6427C2.78287 15.5176 2.88611 15.3423 2.92161 15.1482L3.22994 13.4815C3.92287 14.7486 4.95886 15.7947 6.21912 16.4999C7.47937 17.2051 8.91285 17.5408 10.3552 17.4686C11.7975 17.3964 13.1903 16.9192 14.3738 16.0916C15.5573 15.2641 16.4837 14.1198 17.0466 12.7899C17.123 12.5853 17.116 12.3589 17.0272 12.1594C16.9383 11.9599 16.7747 11.8033 16.5716 11.7232Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <div className="flex items-center justify-between border-b p-1 border-[#334047]">
                  {friends && friends?.length > 0 ? (
                    friends?.map((friend) => (
                      <>
                        <div
                          className="flex items-center gap-2"
                          key={friend._id}
                        >
                          <Image
                            src="/img/28.png"
                            width={50}
                            height={50}
                            alt="avatar"
                          />
                          <div>
                            <h3 className="font-bold font-roboto">
                              {friend.firstName} {friend.lastName}
                            </h3>
                            <span className="font-roboto text-xs font-[300]">
                              Gold
                            </span>
                          </div>
                        </div>
                        <span className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_4348_1694)">
                              <path
                                d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                                fill="#F0D64D"
                              />
                              <path
                                opacity="0.2"
                                d="M13.9699 0.820312L0.542603 13.2562C0.829746 14.0902 1.22645 14.8823 1.72229 15.6117L16.2278 2.17422C15.5381 1.62536 14.7789 1.17011 13.9699 0.820312ZM16.9067 2.76875L2.26135 16.3332C2.47307 16.5918 2.69703 16.8392 2.93323 17.0754L17.5949 3.49531C17.3778 3.24166 17.1481 2.99903 16.9067 2.76836V2.76875ZM18.3008 4.42188L3.80393 17.8492C4.45147 18.3612 5.16001 18.7909 5.91331 19.1285L19.4141 6.62227C19.1356 5.84552 18.7616 5.10639 18.3008 4.42188Z"
                                fill="white"
                              />
                              <path
                                d="M15.9176 15.9197C19.1869 12.6504 19.1869 7.34964 15.9176 4.08026C12.6482 0.810872 7.34745 0.810872 4.07807 4.08026C0.808685 7.34964 0.808685 12.6504 4.07807 15.9197C7.34745 19.1891 12.6482 19.1891 15.9176 15.9197Z"
                                fill="#FFFA89"
                              />
                              <path
                                d="M15.6566 15.6588C18.7818 12.5335 18.7818 7.46649 15.6566 4.34124C12.5313 1.21599 7.46431 1.21599 4.33906 4.34124C1.21381 7.46649 1.21381 12.5335 4.33906 15.6588C7.46431 18.784 12.5313 18.784 15.6566 15.6588Z"
                                fill="#DFBF4F"
                              />
                              <path
                                opacity="0.18"
                                d="M12.3277 2.34103L2.1875 11.734C2.38336 12.6195 2.7291 13.465 3.20977 14.234L14.7418 3.55236C14.0118 3.01426 13.1954 2.60461 12.3277 2.34103ZM15.4379 4.12892L3.73047 14.9727C3.93802 15.2343 4.16163 15.4829 4.4 15.7168L16.1285 4.85353C15.9136 4.59784 15.683 4.35583 15.4379 4.12892ZM16.8133 5.79963L5.28984 16.4711C5.97515 16.9706 6.73575 17.3574 7.54297 17.6172L17.7832 8.13361C17.5864 7.30889 17.2589 6.52095 16.8133 5.79963Z"
                                fill="#C8C8C8"
                              />
                              <path
                                d="M16.5625 3.43752C14.8111 1.75081 12.4677 0.818695 10.0362 0.841586C7.60476 0.864478 5.27935 1.84054 3.55996 3.55993C1.84057 5.27932 0.864509 7.60473 0.841617 10.0362C0.818725 12.4677 1.75084 14.8111 3.43755 16.5625C5.18901 18.2492 7.53238 19.1813 9.96386 19.1584C12.3953 19.1356 14.7207 18.1595 16.4401 16.4401C18.1595 14.7207 19.1356 12.3953 19.1585 9.96383C19.1814 7.53235 18.2493 5.18897 16.5625 3.43752ZM10 19.1649C4.94653 19.1649 0.835205 15.0535 0.835205 10C0.835205 4.9465 4.94653 0.835175 10 0.835175C15.0536 0.835175 19.1649 4.9465 19.1649 10C19.1649 15.0535 15.0536 19.1649 10 19.1649Z"
                                fill="#F2C341"
                              />
                              <path
                                d="M9.25781 14.7981V13.9281C9.16693 13.911 9.0776 13.8905 8.98984 13.8668C8.67773 13.7823 8.37938 13.6533 8.10391 13.484C7.82229 13.3083 7.56489 13.0965 7.33828 12.8539L7.14844 12.6535L8.24453 11.3254L8.48555 11.6168C8.67313 11.8521 8.90819 12.0452 9.17539 12.1836C9.42615 12.3068 9.70227 12.3695 9.98164 12.3668C10.3766 12.3668 10.6652 12.2969 10.8391 12.159C10.9934 12.0371 11.0684 11.8438 11.0684 11.568V11.5625C11.0684 11.3988 11.0348 11.2746 10.9691 11.1934C10.8884 11.0954 10.7832 11.0206 10.6641 10.9766C10.4594 10.9021 10.2486 10.8459 10.034 10.8086H10.0266C10.0056 10.8065 9.98481 10.8027 9.96445 10.7973L9.92969 10.7906L9.87422 10.7801C9.49124 10.7143 9.11441 10.6167 8.74766 10.4883C8.41563 10.3645 8.13047 10.1399 7.89922 9.82032C7.66797 9.50079 7.54766 9.04962 7.54766 8.48868V8.48361C7.54766 7.94962 7.64922 7.49415 7.84922 7.13009C8.0574 6.75164 8.384 6.45194 8.77891 6.27697C8.93348 6.20693 9.09436 6.15174 9.25937 6.11212V5.20197H10.8965V6.06915L10.9746 6.08439C11.2267 6.13848 11.4725 6.21833 11.7082 6.32267C11.9548 6.43224 12.1915 6.56294 12.4156 6.71329L12.6863 6.89376L11.707 8.23986L11.457 8.07072C11.2573 7.93255 11.0407 7.82056 10.8125 7.73751C10.6231 7.67005 10.4237 7.6348 10.2227 7.63322C9.86289 7.63322 9.59766 7.70001 9.44141 7.83204C9.29727 7.94923 9.22734 8.13751 9.22734 8.40236V8.40743C9.22734 8.57501 9.26406 8.70118 9.33633 8.78204C9.42945 8.88497 9.54779 8.96185 9.67969 9.00509C9.92445 9.08524 10.1735 9.15149 10.4258 9.20353L10.4727 9.21525L10.5031 9.22189L10.557 9.23322L10.5961 9.24181H10.6035C10.9635 9.3157 11.3143 9.42888 11.6496 9.57931C11.9747 9.73666 12.2479 9.98393 12.4367 10.2918C12.6441 10.616 12.7492 11.05 12.7492 11.5809V11.5906C12.7492 12.1113 12.643 12.5563 12.4332 12.9129C12.2176 13.2797 11.8938 13.5567 11.4699 13.7367C11.2857 13.8134 11.0943 13.8712 10.8984 13.9094V14.7961L9.25781 14.7981Z"
                                fill="#FFFA89"
                              />
                              <path
                                d="M9.07222 13.5652C8.78896 13.4887 8.51821 13.3717 8.26831 13.218C8.00948 13.0571 7.77305 12.8627 7.56519 12.6399L8.24487 11.816C8.4601 12.0853 8.72979 12.306 9.03628 12.4637C9.33019 12.6085 9.65396 12.6823 9.98159 12.6793C10.4503 12.6793 10.8009 12.5882 11.0332 12.4059C11.2654 12.2236 11.3813 11.9449 11.3808 11.5699V11.5625C11.3808 11.3248 11.3246 11.1362 11.2121 10.9969C11.0966 10.856 10.9459 10.7482 10.7753 10.6844C10.553 10.6029 10.3239 10.5414 10.0906 10.5008C10.0818 10.4977 10.0726 10.496 10.0632 10.4957C10.0539 10.4955 10.0447 10.4939 10.0359 10.491L9.98394 10.4809L9.93159 10.4711C9.48888 10.3883 9.13003 10.2956 8.85503 10.193C8.58003 10.0904 8.34565 9.90431 8.1519 9.63478C7.95685 9.36525 7.85933 8.98243 7.85933 8.48634V8.48126C7.85933 7.99845 7.94696 7.59741 8.12222 7.27814C8.29819 6.95844 8.57452 6.70558 8.90854 6.55861C9.25776 6.39819 9.69526 6.31798 10.221 6.31798C10.4521 6.31787 10.6825 6.34196 10.9085 6.38986C11.1395 6.43938 11.3648 6.51255 11.5808 6.60822C11.8109 6.71054 12.0316 6.83261 12.2406 6.97306L11.63 7.81251C11.4079 7.65899 11.1668 7.53478 10.9128 7.44298C10.6906 7.36394 10.4566 7.32287 10.2207 7.3215C9.78394 7.3215 9.45646 7.4116 9.23823 7.59181C9.02 7.77202 8.91089 8.04246 8.91089 8.40314V8.40822C8.91089 8.65639 8.97378 8.85066 9.09956 8.99103C9.22801 9.13366 9.39127 9.24053 9.57339 9.30118C9.82968 9.38521 10.0905 9.45473 10.3546 9.50939L10.3937 9.51954C10.407 9.52267 10.4218 9.52618 10.4382 9.52931L10.4855 9.53947L10.5328 9.54923C10.87 9.61785 11.1985 9.72357 11.5125 9.86447C11.7843 9.99656 12.0125 10.204 12.1699 10.4621C12.3454 10.7366 12.433 11.1104 12.4328 11.5836V11.5934C12.4328 12.0598 12.3416 12.4477 12.1593 12.757C11.977 13.0664 11.7049 13.2981 11.3429 13.452C10.9807 13.6054 10.5268 13.6822 9.9812 13.6824C9.67435 13.6839 9.36867 13.6445 9.07222 13.5652ZM9.57026 5.51447H10.5828V6.64728H9.57026V5.51447ZM9.57026 13.2899H10.5828V14.4856H9.57026V13.2899Z"
                                fill="#F0D64D"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_4348_1694">
                                <rect width="20" height="20" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          +5k
                        </span>
                      </>
                    ))
                  ) : (
                    <p>No Friends to show</p>
                  )}
                </div>
              </div>
              <div className="w-full flex items-center justify-between">
                <p className="text-xs font-roboto text-[#C0C4C6]">
                  Copy Refferal link
                </p>
                <Button
                  className="bg-transparent"
                  onClick={handleClick}
                    
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4.5 21.975C4.1 21.975 3.75 21.825 3.45 21.525C3.15 21.225 3 20.875 3 20.475V5.40001H4.5V20.475H16.35V21.975H4.5ZM7.5 18.975C7.1 18.975 6.75 18.825 6.45 18.525C6.15 18.225 6 17.875 6 17.475V3.47501C6 3.07501 6.15 2.72501 6.45 2.42501C6.75 2.12501 7.1 1.97501 7.5 1.97501H18.5C18.9 1.97501 19.25 2.12501 19.55 2.42501C19.85 2.72501 20 3.07501 20 3.47501V17.475C20 17.875 19.85 18.225 19.55 18.525C19.25 18.825 18.9 18.975 18.5 18.975H7.5ZM7.5 17.475H18.5V3.47501H7.5V17.475Z"
                      fill="white"
                    />
                  </svg>
                </Button>
              </div>
              <Button className="text-white bg-[#00ACE6] w-full rounded mt-[10%]">
                Invite a Friend
              </Button>
            </div>
          </Container>
          <Toaster />
        </Layout>
      ) : (
        <Flash />
      )}
    </>
  );
};

export default FriendsPage;
