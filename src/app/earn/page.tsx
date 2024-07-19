"use client";
import { Container } from "@/components/Container";
import { EarnMore, Streak } from "@/components/Earn/EarnMore";
import { Layout } from "@/components/Layout";
import { useTelegram } from "@/lib/TelegramProvider";
import axios from "axios";
import moment from "moment";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Tick from "../../../public/svg/Tick.svg";
import { User } from "@/lib/quest/type";
import Link from "next/link";
const EarnPage = () => {
  const { user } = useTelegram();
  const [userData, setUserData] = useState<User>();
  const [earnMore, setEarnmore] = useState(false);
  const [showIframe, setShowIframe] = useState(false);

  const [userStreak, setUserStreak] = useState<Streak>({
    _id: "",
    day: 0,
    upcoming: 0,
    user: "",
    updatedAt: "",
  });
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
            userId: user.id,
          },
        }
      );
      if (data.data) {
        setUserData(data.data);
      }
    }
  };
  useEffect(() => {
    fetchStreakInfo();
  }, [userData]);

  const fetchStreakInfo = async () => {
    if (userData) {
      const user = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/userStreak`,
        {
          params: {
            _id: userData._id,
          },
        }
      );
      if (user.data) {
        setUserStreak(user.data);
      }
    }
  };

  const parsedDatetime = moment(userStreak?.updatedAt);

  // Add 24 hours to the parsed datetime
  const expirationDatetime = parsedDatetime.add(24, "hours");
  const currentDatetime = moment();
  const disabled =
    userStreak?.day == 0 ? true : currentDatetime.isAfter(expirationDatetime);

  const handleSocial = async (social: any) => {
    if (userData) {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/updateSocial`, {
        _id: userData._id,
        social: social,
      });
      fetchUserInfo();
    }
  };
  return (
    <Layout>
      <Container>
        <div className="relative flex flex-col items-center gap-4 mt-6 pb-[140px] ">
          <h2 className="text-2xl font-istok font-bold">Earn More Coins!</h2>
          <p className="font-manrope w-[80%] text-center">
            Receive rewards and improve your rank for each invited friend{" "}
          </p>
          <span className="relative bottom-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="305"
              height="280"
              viewBox="0 0 305 305"
              fill="none"
            >
              <circle
                cx="156.375"
                cy="148.5"
                r="88"
                stroke="#8AD9F4"
                stroke-dasharray="2 12"
              />
              <g filter="url(#filter0_d_4323_9951)">
                <path
                  d="M152.753 237.179C201.673 237.179 241.33 197.522 241.33 148.603C241.33 99.683 201.673 60.0259 152.753 60.0259C103.834 60.0259 64.1768 99.683 64.1768 148.603C64.1768 197.522 103.834 237.179 152.753 237.179Z"
                  fill="url(#paint0_linear_4323_9951)"
                />
                <path
                  d="M112.868 141.351C111.625 144.277 110.718 147.308 110.304 150.467C110.019 152.539 109.89 154.637 110.097 156.761C110.2 157.771 110.304 158.781 110.537 159.765C110.589 159.947 110.589 160.154 110.615 160.387C110.511 160.335 110.433 160.335 110.408 160.309C108.465 157.408 106.989 154.3 106.16 150.882C105.357 147.618 105.15 144.303 105.538 140.936C105.901 137.751 106.833 134.746 108.361 131.949C109.113 130.576 109.941 129.281 110.977 128.09C111.055 128.012 111.107 127.883 111.21 127.727C110.615 127.753 110.174 128.012 109.708 128.22C109.397 128.349 109.113 128.479 108.828 128.634C108.206 128.971 107.559 129.307 106.963 129.696C106.523 129.981 106.108 130.292 105.72 130.602C105.305 130.913 104.917 131.25 104.528 131.612C104.14 131.975 103.803 132.338 103.466 132.752C103.13 133.14 102.819 133.555 102.508 133.995C102.197 134.41 101.938 134.85 101.653 135.29C101.395 135.73 101.187 136.197 100.877 136.741C100.799 136.533 100.747 136.456 100.747 136.378C100.669 135.653 100.902 124.361 102.689 119.673C104.062 116.047 106.108 112.835 108.828 110.038C110.33 108.484 112.013 107.163 113.852 106.024C114.293 105.739 102.094 110.271 101.835 110.53C101.887 110.271 106.367 102.398 108.361 100.041C110.408 97.6062 112.661 95.4047 115.121 93.3846C119.783 89.5773 124.911 86.6507 130.609 84.6305C133.899 83.465 137.265 82.5844 140.71 82.0146C144.077 81.4448 147.496 81.2635 150.915 81.2635C151.666 81.2635 152.391 81.2635 153.116 81.2635C153.168 81.4189 153.116 81.4966 153.012 81.5225C150.915 82.2736 149.309 83.6463 147.858 85.278C147.185 86.0291 146.563 86.832 145.994 87.6608C145.346 88.619 143.844 90.9759 143.714 90.8982C141.228 89.2406 138.483 88.619 135.53 88.7485C132.422 88.878 129.418 89.5255 126.491 90.6133C124.523 91.3385 122.606 92.2191 120.793 93.281C120.69 93.3328 120.586 93.4105 120.483 93.4882C120.457 93.5141 120.431 93.5659 120.353 93.6695C121.285 93.4364 122.14 93.2033 123.047 93.0479C123.953 92.8666 124.86 92.763 125.766 92.6853C126.673 92.6076 127.605 92.5817 128.511 92.5817C129.392 92.5817 130.298 92.6335 131.179 92.7371C132.086 92.8407 132.992 93.022 133.873 93.2033C134.753 93.3846 135.634 93.6177 136.618 94.0321C136.307 94.1357 136.204 94.1875 136.1 94.2134C134.183 94.6019 132.422 95.3788 130.687 96.2335C128.485 97.3213 126.439 98.6681 124.523 100.196C122.58 101.75 120.845 103.511 119.265 105.402C117.349 107.655 115.743 110.116 114.293 112.68C114.137 112.965 113.982 113.25 113.852 113.534C113.153 115.037 116.831 112.032 119.809 109.598C122.684 107.241 125.87 105.35 129.314 103.9C132.552 102.553 135.919 101.647 139.389 101.232C141.487 100.973 143.585 100.921 145.683 101.051C145.761 101.051 145.812 101.077 145.89 101.103C145.916 101.284 145.786 101.31 145.683 101.362C143.326 102.346 141.15 103.641 139.053 105.117C136.359 107.008 133.873 109.183 131.697 111.644C130.273 113.25 128.926 114.933 127.76 116.746C125.481 120.268 123.824 124.05 122.762 128.09C122.295 129.903 121.881 131.742 121.7 133.607C121.389 136.404 121.285 139.175 121.544 141.972C121.7 143.811 122.011 145.598 122.451 147.385C122.632 148.136 122.839 148.862 123.047 149.587C123.254 149.561 123.176 146.66 123.331 145.443C123.72 142.697 124.393 140.056 125.533 137.543C126.206 136.041 127.087 134.694 128.045 133.348C128.097 133.296 130.376 130.732 130.376 130.81C130.195 131.871 130.635 149.457 144.621 164.479C144.621 161.371 142.886 149.923 143.067 147.126C143.274 143.785 143.818 142.387 145.139 139.305C146.356 136.43 147.988 133.814 150.163 131.586C151.717 130.007 150.086 121.356 152.132 120.45C153.168 119.983 162.233 131.845 170.521 123.299C171.945 122.807 174.69 122.858 175.959 122.004C176.762 121.486 175.959 117.704 174.561 114.027C173.136 110.219 169.873 107.526 165.988 106.386C165.807 106.334 165.703 106.257 165.755 106.127C165.833 105.842 165.962 105.661 166.221 105.506C167.931 104.496 169.614 103.46 171.298 102.449C171.608 102.268 171.893 102.035 172.204 101.854C172.437 101.724 172.618 101.465 172.644 101.206C172.8 100.067 175.26 85.1226 175.467 83.8535C175.597 83.1024 162 97.4508 161.689 97.917C161.767 98.0206 161.87 97.9688 161.948 97.917C163.424 97.14 164.9 96.3371 166.403 95.5601C167.49 94.9903 168.63 94.4724 169.744 93.9285C169.821 93.9026 169.925 93.9285 170.054 93.9285C169.977 94.0839 169.951 94.1875 169.899 94.2911C168.759 96.2335 167.62 98.176 166.454 100.093C165.574 101.543 164.667 102.942 163.631 104.262C163.217 104.78 162.802 105.298 162.362 105.816C161.87 106.412 161.274 106.904 160.627 107.293C158.918 108.329 157.234 108.251 155.602 107.189C154.256 106.308 153.194 105.117 152.417 103.693C151.847 102.657 151.614 101.465 151.795 100.3C152.028 98.6681 152.753 97.2695 153.556 95.8709C154.566 94.1616 155.784 92.6076 157.079 91.1054C159.332 88.4895 161.844 86.1586 164.434 83.9053C166.765 81.8851 169.226 80.0204 171.712 78.1815C174.224 76.3426 176.788 74.5814 179.456 72.9498C179.585 72.8721 179.378 76.7052 179.145 78.5182C178.808 81.1599 178.472 83.8017 178.161 86.4694C177.954 88.2823 177.798 90.1212 177.643 91.9342C177.565 92.7889 177.513 93.6695 177.436 94.5242C177.177 97.1659 177.902 99.5746 179.249 101.802C179.948 102.967 180.777 104.055 181.657 105.091C182.849 106.516 184.092 107.888 185.309 109.287C186.475 110.608 187.588 111.955 188.65 113.379C189.79 114.933 190.852 116.539 191.499 118.378C191.94 119.595 192.173 120.864 192.173 122.159C192.173 122.91 192.147 123.635 192.147 124.386C192.121 126.199 192.665 127.831 193.649 129.359C194.4 130.499 195.307 131.483 196.239 132.441C198.596 134.902 201.056 137.259 203.646 139.486C205.925 141.454 208.23 143.397 210.535 145.339C210.95 145.676 211.39 145.987 211.83 146.323C211.986 146.427 212.115 146.582 212.245 146.712C212.115 146.945 211.908 146.997 211.727 147.023C210.717 147.282 209.707 147.541 208.697 147.748C207.79 147.929 206.858 148.059 205.925 148.214C205.666 148.266 205.407 148.318 205.097 148.395C204.967 149.328 205.071 150.234 205.252 151.141C205.433 152.021 205.822 152.824 206.288 153.575C206.754 154.352 207.402 155 208.049 155.699C207.557 156.139 207.065 156.502 206.521 156.787C205.097 157.59 203.568 158.16 201.937 158.444C200.953 158.626 199.994 158.755 198.984 158.755C198.57 158.755 198.233 158.885 197.948 159.195C196.835 160.335 195.41 161.164 193.804 161.293C191.214 161.526 188.728 161.216 186.371 160.076C185.206 159.506 184.04 158.936 182.901 158.367C179.223 156.476 175.39 154.87 171.479 153.549C169.821 153.005 168.164 152.513 166.428 152.28C163.968 151.944 161.533 152.073 159.28 153.264C156.25 154.87 154.463 157.383 154.152 160.827C154.074 161.604 154.204 162.381 154.385 163.158C154.644 164.272 155.084 165.308 155.654 166.292C156.975 168.545 158.659 170.488 160.627 172.171C165.211 176.082 170.417 178.905 176.141 180.692C176.685 180.873 177.229 181.029 177.772 181.132C177.902 181.158 178.006 181.21 178.265 181.34C178.031 181.417 177.902 181.495 177.772 181.521C175.726 181.78 173.706 182.143 171.66 182.298C168.604 182.557 165.522 182.505 162.466 182.168C158.477 181.728 154.618 180.822 150.915 179.345C148.247 178.284 145.683 176.989 143.274 175.435C141.099 174.036 128.537 170.125 142.238 180.666C142.316 180.718 142.368 180.796 142.497 180.951C142.264 180.951 142.16 180.951 142.057 180.925C138.276 180.33 134.727 179.112 131.36 177.351C127.631 175.383 124.393 172.819 121.674 169.633C118.695 166.162 116.675 162.174 115.613 157.719C115.044 155.336 114.811 152.954 114.811 150.519C114.785 148.473 114.422 137.751 112.868 141.351ZM168.708 143.397C168.656 143.63 168.733 143.785 168.811 143.967C169.355 145.158 169.873 146.349 170.443 147.541C170.702 148.085 170.987 148.577 171.298 149.095C171.893 150.079 172.696 150.882 173.706 151.451C174.147 151.71 174.613 151.969 175.079 152.203C177.436 153.342 179.793 154.456 182.175 155.57C183.755 156.295 185.335 156.968 186.967 157.512C188.754 158.134 190.567 158.315 192.458 158.108C192.639 158.082 192.794 158.082 192.976 158.056C193.157 158.03 193.338 158.056 193.623 157.952C193.26 157.823 193.001 157.719 192.768 157.642C192.199 157.434 191.603 157.253 191.033 156.994C189.246 156.243 187.614 155.233 186.034 154.119C184.092 152.746 182.331 151.167 180.57 149.587C179.456 148.577 178.316 147.592 177.099 146.712C174.794 145.054 172.256 143.941 169.459 143.449C169.2 143.397 168.967 143.319 168.708 143.397ZM185.957 126.795C185.232 125.5 184.247 124.464 183.03 123.609C181.502 122.548 179.819 121.771 178.083 121.123C177.203 120.812 180.078 127.753 183.444 128.53C184.48 128.789 186.397 127.598 185.957 126.795Z"
                  fill="white"
                />
                <path
                  d="M215.431 85.9514C206.625 77.1455 196.317 70.4375 185.05 66.0346C184.506 65.8274 183.988 65.6202 183.445 65.4389C173.758 61.8648 163.398 60 152.753 60C129.081 60 106.833 69.2203 90.0764 85.9514C73.3453 102.683 64.125 124.93 64.125 148.603C64.125 172.275 73.3453 194.523 90.0764 211.28C106.808 228.011 129.081 237.231 152.753 237.231C176.426 237.231 198.674 228.011 215.431 211.28C232.162 194.548 241.382 172.275 241.382 148.603C241.382 124.93 232.162 102.683 215.431 85.9514ZM81.1411 184.862L99.2708 159.739L98.4938 171.394L90.7239 178.258L81.1411 184.862ZM92.5369 191.337L94.3499 176.186L101.136 202.603L92.5369 191.337ZM104.192 179.035L97.7168 178.258L110.926 174.373L104.192 179.035ZM140.71 224.359L137.602 211.668L130.609 207.265H137.602L135.53 191.984L143.041 210.632L140.71 224.359ZM124.393 215.553V204.157L133.458 188.358V196.646L124.393 215.553ZM163.58 196.828L185.076 192.062L177.488 199.366L163.58 196.828ZM175.442 208.016L185.491 193.875L184.222 205.582L169.303 222.572L175.442 208.016ZM171.79 221.898L180.596 214.129L192.432 217.444L171.79 221.898ZM207.79 182.531L206.133 171.187L214.887 180.096L219.186 195.74L207.79 182.531ZM232.395 166.085L217.373 150.804C217.347 151.063 213.54 156.01 213.54 156.01L210.613 158.652C209.94 159.273 209.215 159.791 208.386 160.257C206.573 161.293 204.63 161.993 202.584 162.355C201.807 162.485 200.901 162.64 199.943 162.692C198.259 164.142 196.213 165.049 194.115 165.256C193.468 165.308 192.82 165.36 192.199 165.36C189.505 165.36 186.967 164.79 184.662 163.702C183.548 163.158 182.383 162.588 181.088 161.941C177.514 160.128 173.862 158.574 170.184 157.357C168.889 156.916 167.361 156.45 165.833 156.243C165.211 156.165 164.641 156.113 164.123 156.113C162.906 156.113 161.922 156.347 161.015 156.813C159.073 157.823 158.141 159.221 157.959 161.293C157.933 161.501 157.985 161.863 158.115 162.355C158.296 163.08 158.581 163.806 158.969 164.453C160.005 166.24 161.404 167.872 163.113 169.348C167.18 172.845 188.806 181.78 188.806 181.78C188.806 181.78 181.373 186.546 167.646 186.416C165.781 186.39 163.89 186.312 162.051 186.105C157.882 185.639 153.867 184.681 150.112 183.282L152.158 185.38C152.158 185.38 137.628 185.769 129.547 180.848C125.533 178.413 121.752 175.745 118.721 172.223C117.038 170.281 115.639 168.183 114.5 165.929L109.372 164.039C108.206 163.676 107.533 162.977 107.17 162.407C104.865 158.911 102.379 151.685 102.353 151.659C101.472 151.633 82.177 161.397 82.177 161.397L69.7711 158.911C69.3567 155.518 69.1236 152.073 69.1236 148.577C69.1236 102.475 106.341 65.1281 152.443 64.9727C160.938 64.9468 169.122 66.19 176.866 68.521C177.462 68.7023 178.057 68.8836 178.653 69.0908C180.362 69.6606 182.046 70.2562 183.729 70.9296C184.17 71.1109 184.584 71.2922 185.024 71.4735C215.146 84.1384 236.332 113.923 236.332 148.603C236.332 154.249 235.762 159.739 234.7 165.075L232.395 166.085Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_4323_9951"
                  x="0.525002"
                  y="0.400002"
                  width="304.457"
                  height="304.431"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="31.8" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 0.841333 0 0 0 0 0.533333 0 0 0 0.53 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_4323_9951"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_4323_9951"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_4323_9951"
                  x1="90.1203"
                  y1="85.9694"
                  x2="215.387"
                  y2="211.236"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.00558659" stop-color="#D9CB00" />
                  <stop offset="1" stop-color="#FF8717" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <div className="flex flex-col items-center gap-4 relative bottom-[18%] w-full">
            <div
              className="w-full flex flex-col gap-1"
              onClick={() => setEarnmore(true)}
            >
              <h4 className="font-semibold font-roboto">Daily Rewards</h4>
              <div className="bg-[#242D32] rounded flex p-2 justify-between items-center">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/img/Calendar.png"
                    width={50}
                    height={50}
                    alt="calendar"
                  />
                  <div>
                    <h4>Today’s reward</h4>
                    <p className="flex items-center gap-1 text-xs font-manrope">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="9"
                        viewBox="0 0 8 9"
                        fill="none"
                      >
                        <circle cx="4" cy="4.23108" r="4" fill="#00ACE6" />
                      </svg>
                      +5 000
                      <span className="font-roboto">
                        For you and for your friend
                      </span>
                    </p>
                  </div>
                </div>
                {!disabled && <Image src={Tick} alt="tick" />}
              </div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <h4 className="font-semibold font-roboto">Your tasks</h4>
              <Link
                target="_blank"
                className="bg-[#242D32] rounded flex p-2 justify-between items-center"
                href="https://x.com/nimbitoken"
                onClick={() => handleSocial({ ...userData?.social, x: true })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="41"
                  viewBox="0 0 30 29"
                  fill="none"
                >
                  <path
                    d="M17.2463 12.4232L26.036 2.42552H23.9532L16.321 11.1064L10.2252 2.42552H3.19446L12.4125 15.5525L3.19446 26.0366H5.27747L13.3372 16.8694L19.7748 26.0366H26.8056L17.2458 12.4232H17.2463ZM14.3933 15.6682L13.4593 14.361L6.02801 3.95987H9.22739L15.2246 12.3539L16.1585 13.6611L23.9541 24.5721H20.7548L14.3933 15.6687V15.6682Z"
                    fill="#EBECED"
                  />
                </svg>
                <div>
                  <h4 className="text-left">Follow our account on X</h4>
                  <p className="flex items-center gap-1 text-xs font-manrope">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="9"
                      viewBox="0 0 8 9"
                      fill="none"
                    >
                      <circle cx="4" cy="4.23108" r="4" fill="#00ACE6" />
                    </svg>
                    +25 000
                  </p>
                </div>
                {userData?.social.x ? (
                  <Image src={Tick} alt="tg" />
                ) : (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        d="M4 10.2311L16 10.2311M16 10.2311L11.7574 6.23108M16 10.2311L11.7574 14.2311"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </Link>
              <Link
                target="_blank"
                href="https://discord.com/invite/NrVU2G82CR"
                className="bg-[#242D32] rounded flex p-2 justify-between items-center"
                onClick={() =>
                  handleSocial({ ...userData?.social, discord: true })
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="41"
                  viewBox="0 0 50 51"
                  fill="none"
                >
                  <path
                    d="M38.0437 13.1111C42.2789 19.4673 44.3704 26.6369 43.5885 34.8907C43.5853 34.9257 43.5675 34.9577 43.5393 34.9788C40.3321 37.3827 37.2248 38.8416 34.1611 39.8091C34.1372 39.8165 34.1117 39.8161 34.0881 39.8079C34.0644 39.7998 34.0439 39.7843 34.0293 39.7636C33.3215 38.7583 32.6784 37.6985 32.115 36.5855C32.0826 36.52 32.1122 36.441 32.1787 36.4152C33.2001 36.0224 34.1714 35.5515 35.1056 34.9941C35.1792 34.9501 35.1839 34.8424 35.1159 34.7907C34.9176 34.6405 34.7212 34.4826 34.5333 34.3247C34.4981 34.2955 34.4508 34.2898 34.4109 34.3094C28.3458 37.1683 21.7017 37.1683 15.5648 34.3094C15.525 34.2912 15.4777 34.2974 15.4434 34.3261C15.2559 34.484 15.0591 34.6405 14.8627 34.7907C14.7947 34.8424 14.8003 34.9501 14.8744 34.9941C15.8086 35.541 16.7798 36.0224 17.7998 36.4171C17.8659 36.4429 17.8973 36.52 17.8645 36.5855C17.3133 37.6999 16.6702 38.7598 15.9492 39.7651C15.9178 39.8057 15.8663 39.8244 15.8175 39.8091C12.7683 38.8416 9.66095 37.3827 6.45377 34.9788C6.42705 34.9577 6.40783 34.9242 6.40502 34.8893C5.75158 27.7498 7.0833 20.5209 11.9447 13.1096C11.9564 13.09 11.9742 13.0747 11.9949 13.0656C14.3869 11.945 16.9495 11.1206 19.628 10.6498C19.6767 10.6421 19.7255 10.6651 19.7508 10.7091C20.0817 11.3072 20.46 12.0742 20.7159 12.701C23.5392 12.2608 26.4065 12.2608 29.2889 12.701C29.5448 12.0876 29.91 11.3072 30.2395 10.7091C30.2512 10.6873 30.2694 10.6698 30.2915 10.6591C30.3135 10.6484 30.3383 10.6452 30.3623 10.6498C33.0422 11.122 35.6048 11.9465 37.995 13.0656C38.0161 13.0747 38.0334 13.09 38.0437 13.1111ZM22.1512 26.6857C22.1808 24.5751 20.6733 22.8286 18.7809 22.8286C16.9041 22.8286 15.4111 24.5598 15.4111 26.6857C15.4111 28.8111 16.9336 30.5423 18.7809 30.5423C20.6583 30.5423 22.1512 28.8111 22.1512 26.6857ZM34.6115 26.6857C34.6411 24.5751 33.1336 22.8286 31.2417 22.8286C29.3644 22.8286 27.8714 24.5598 27.8714 26.6857C27.8714 28.8111 29.3939 30.5423 31.2417 30.5423C33.1336 30.5423 34.6115 28.8111 34.6115 26.6857Z"
                    fill="#5865F2"
                  />
                </svg>
                <div>
                  <h4>Follow Us on Discord</h4>
                  <p className="flex items-center gap-1 text-xs font-manrope">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="9"
                      viewBox="0 0 8 9"
                      fill="none"
                    >
                      <circle cx="4" cy="4.23108" r="4" fill="#00ACE6" />
                    </svg>
                    +25 000
                  </p>
                </div>
                {userData?.social.discord ? (
                  <Image src={Tick} alt="tg" />
                ) : (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        d="M4 10.2311L16 10.2311M16 10.2311L11.7574 6.23108M16 10.2311L11.7574 14.2311"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </Link>
              <Link
                target="_blank"
                onClick={() => handleSocial({ ...userData?.social, yt: true })}
                href="https://www.youtube.com/@nimbitoken"
                className="bg-[#242D32] rounded flex p-2 justify-between items-center"
              >
                <Image
                  src="/youtube.png"
                  width={40}
                  height={40}
                  alt="youtube"
                />
                <div>
                  <h4>Follow Us on Youtube</h4>
                  <p className="flex items-center gap-1 text-xs font-manrope">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="9"
                      viewBox="0 0 8 9"
                      fill="none"
                    >
                      <circle cx="4" cy="4.23108" r="4" fill="#00ACE6" />
                    </svg>
                    +25 000
                  </p>
                </div>
                {userData?.social.yt ? (
                  <Image src={Tick} alt="tg" />
                ) : (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        d="M4 10.2311L16 10.2311M16 10.2311L11.7574 6.23108M16 10.2311L11.7574 14.2311"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </Link>
              <Link
                target="_blank"
                href="https://t.me/nimbitokenvip"
                className="bg-[#242D32] rounded flex p-2 justify-between items-center"
                onClick={() => handleSocial({ ...userData?.social, tg: true })}
              >
                <Image
                  src="/telegram.png"
                  width={40}
                  height={40}
                  alt="telegram"
                />
                <div>
                  <h4>Follow Us on Telegram</h4>
                  <p className="flex items-center gap-1 text-xs font-manrope">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="9"
                      viewBox="0 0 8 9"
                      fill="none"
                    >
                      <circle cx="4" cy="4.23108" r="4" fill="#00ACE6" />
                    </svg>
                    +25 000
                  </p>
                </div>
                {userData?.social.tg ? (
                  <Image src={Tick} alt="tg" />
                ) : (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        d="M4 10.2311L16 10.2311M16 10.2311L11.7574 6.23108M16 10.2311L11.7574 14.2311"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/nimbiwolfpack/"
                className="bg-[#242D32] rounded flex p-2 justify-between items-center"
                onClick={() =>
                  handleSocial({ ...userData?.social, insta: true })
                }
              >
                <Image
                  src="/instagram.png"
                  width={30}
                  height={30}
                  alt="insta"
                />
                <div>
                  <h4>Follow Us on Instagram</h4>
                  <p className="flex items-center gap-1 text-xs font-manrope">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="9"
                      viewBox="0 0 8 9"
                      fill="none"
                    >
                      <circle cx="4" cy="4.23108" r="4" fill="#00ACE6" />
                    </svg>
                    +25 000
                  </p>
                </div>
                {userData?.social.insta ? (
                  <Image src={Tick} alt="tg" />
                ) : (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        d="M4 10.2311L16 10.2311M16 10.2311L11.7574 6.23108M16 10.2311L11.7574 14.2311"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </Link>
              <Link
                target="_blank"
                href="https://www.reddit.com/user/nimbitoken/"
                className="bg-[#242D32] rounded flex p-2 justify-between items-center"
                onClick={() => handleSocial({ ...userData?.social, red: true })}
              >
                <Image src="/media.png" width={40} height={40} alt="insta" />
                <div>
                  <h4>Follow Us on Redit</h4>
                  <p className="flex items-center gap-1 text-xs font-manrope">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="9"
                      viewBox="0 0 8 9"
                      fill="none"
                    >
                      <circle cx="4" cy="4.23108" r="4" fill="#00ACE6" />
                    </svg>
                    +25 000
                  </p>
                </div>
                {userData?.social.red ? (
                  <Image src={Tick} alt="tg" />
                ) : (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        d="M4 10.2311L16 10.2311M16 10.2311L11.7574 6.23108M16 10.2311L11.7574 14.2311"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
        {showIframe && (
          <iframe
            src="https://giphy.com/embed/MCuCYXkXaSHIhA0t4L"
            frameBorder="0"
            className="giphy-embed absolute top-[40%] z-10 left-10 w-[300px] h-[300px] md:left:[10%] md:w-[400px] md:h-[400px]"
            allowFullScreen
          ></iframe>
        )}
        {earnMore && (
          <EarnMore
            setEarnmore={setEarnmore}
            userStreak={userStreak}
            fetchStreakInfo={fetchStreakInfo}
            setShowIframe={setShowIframe}
          />
        )}
      </Container>
    </Layout>
  );
};

export default EarnPage;
