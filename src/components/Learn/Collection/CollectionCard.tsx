import { Button, Card, CardFooter, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

interface CollectionCardProp{
  img:string
}
export const CollectionCard = ({img}:CollectionCardProp) => {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none md:w-[280px] md:h-[300px] lg:w-[286px] lg:h-[314px]"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover w-full h-full"
        height={200}
        src={img}
        width={200}
      />
      <CardHeader className="flex justify-center absolute top-4 left-2 shadow-small p-1 rounded-full w-[70px] bg-black bg-opacity-50">
        <h2 className="text-xs text-white">@Author</h2>
      </CardHeader>
      <CardFooter className="py-1 absolute bottom-0 w-full shadow-small z-10 h-[64px] bg-white bg-opacity-50 flex justify-between items-center">
        <div className="text-left">
          <h2 className="text-black font-bold text-sm">Nimbi #50</h2>
          <p className="text-black text-xs">@Author</p>
        </div>
        <h2 className="text-black font-semibold text-sm">
          152.2<span className="text-black text-sm text-medium"> ETH</span>
        </h2>
      </CardFooter>
    </Card>
  );
};
