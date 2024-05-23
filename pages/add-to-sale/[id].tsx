import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import BreakLine from "../../components/BreakLine";
import { Mock } from "../../constants/mock";

const AddToSale = () => {
  const id = useRouter().query.id as string;

  return (
    <div className="w-full px-28 py-9 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center py-9 gap-3">
        <h1 className="font-medium text-[2.5rem]">Add to Sale</h1>
      </div>
      <div className="flex w-full gap-4">
        <div className="flex flex-col gap-3">
          <Link href={`/details/${id}`} className="cursor-pointer">
            <div className="relative">
              <Image
                className="h-auto w-full"
                src={`/${id}.jpg`}
                alt=""
                width={600}
                height={600}
              />
              <div className="w-full h-full text-white flex justify-center items-center text-2xl bg-black absolute top-0 right-0 hover:opacity-90 opacity-0 z-10">
                O Watch
              </div>
              <div className="w-[94%] h-[94%] border absolute top-[3%] left-[3%]"></div>
            </div>
          </Link>
          <div className=" flex justify-center gap-7 text-xl">
            <span>{Mock[id].name}</span>
            <span>{Mock[id].y_birth}</span>
          </div>
        </div>
        <div className="flex flex-col w-full gap-5">
          <div className="w-full">
            <input
              type="text"
              placeholder="Price"
              className="py-2 px-6 placeholder:text-black outline-none w-full"
            />
            <BreakLine />
          </div>
          <button className="self-end bg-gray-50 hover:bg-gray-300 py-2 px-4 transition-all rounded-lg text-[#212925] font-ysabeau normal-case">
            Add to Sale list
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToSale;
