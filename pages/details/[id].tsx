import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Mock } from "../../constants/mock";

const Details = () => {
  const id = useRouter().query.id as string;
  return (
    <div className="w-full px-28 py-9 flex flex-col items-center justify-center gap-4">
      <h3 className="font-medium text-[2.5rem]">{Mock[id]?.name}</h3>
      <div className="w-1/2 flex justify-around">
        <h3 className="text-2xl">{Mock[id]?.y_birth}</h3>
        <h3 className="text-2xl">{Mock[id]?.language}</h3>
        <h3 className="text-2xl">{Mock[id]?.born}</h3>
        <div className="flex gap-1 items-end">
          <p className="text-2xl">30.00</p>
          <Image
            className="h-5 w-5"
            src={"/flow.ico"}
            alt=""
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="flex relative w-1/2">
        <Image
          className="h-auto w-full"
          src={`/${id}.jpg`}
          alt=""
          width={400}
          height={400}
        />

        <div className="w-[94%] h-[94%] border absolute top-[3%] left-[3%]"></div>
      </div>
    </div>
  );
};

export default Details;
