import React from "react";
import Image from "next/image";
import { Spinner } from "@nextui-org/react";

export const Flash = () => {
  return (
    <div className="h-screen bg-[#2E3A41] flex flex-col items-center gap-10">
      <Image
        src="/img/Flash.png"
        width={200}
        height={200}
        alt="flash"
        className="mt-[10%]"
      />
      <Spinner color="secondary" />
      <h4>Loading...</h4>
      <Image
        src="/img/FlashGr.png"
        width={200}
        height={200}
        alt="flash"
        className="w-full absolute bottom-0"
      />
    </div>
  );
};
