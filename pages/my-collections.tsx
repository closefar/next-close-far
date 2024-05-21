import { Button, ButtonGroup, Option, Select } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import BreakLine from "../components/BreakLine";

const MyCollections = () => {
  const [value, setValue] = useState("all");

  return (
    <div className="w-full px-28 py-9 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center py-9 gap-3">
        <h1 className="font-medium text-[2.5rem]">My Collection</h1>
      </div>
      <div className="flex flex-col gap-7 w-full">
        <div className="w-1/3">
          <div className="[&>div>button]:border-none [&>div>label]:after:border-none">
            <Select
              className="[&>span]:pl-8"
              variant="static"
              value={value}
              onChange={(val) => setValue(val)}
            >
              <Option className="font-ysabeau" value="all">
                All
              </Option>
              <Option className="font-ysabeau" value="minted">
                Minted
              </Option>
              <Option className="font-ysabeau" value="collected">
                Collected
              </Option>
              <Option className="font-ysabeau" value="sale">
                On Sale
              </Option>
            </Select>
          </div>
          <BreakLine />
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((id) => (
            <div key={id} className="flex flex-col gap-2">
              <Link
                href={`/details/${id}`}
                className="flex-auto cursor-pointer"
              >
                <div className="relative">
                  <Image
                    className="h-auto w-full"
                    src={`/${id}.jpg`}
                    alt=""
                    width={300}
                    height={300}
                  />
                  <div className="w-full h-full text-white flex justify-center items-center text-2xl bg-black absolute top-0 right-0 hover:opacity-90 opacity-0 z-10">
                    O Watch
                  </div>
                  <div className="w-[94%] h-[94%] border absolute top-[3%] left-[3%]"></div>
                </div>
              </Link>
              <div className="flex gap-1 items-end">
                <p className="text-xl">30.00</p>
                <Image
                  className="h-5 w-5"
                  src={"/flow.ico"}
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex gap-1 flex-wrap">
                <button className="min-w-fit bg-gray-50 flex-1 hover:bg-gray-300 py-2 px-4 transition-all rounded-lg text-[#212925] font-ysabeau normal-case">
                  <Link href={`/edit/${id}`}>Edit</Link>
                </button>

                <button className="min-w-fit bg-gray-50 flex-1 hover:bg-gray-300 py-2 px-4 transition-all rounded-lg text-[#212925] font-ysabeau normal-case">
                  <Link href={`/add-to-sale/${id}`}>Add to sale LIst</Link>
                </button>
                <button className="min-w-fit bg-gray-50 flex-1 hover:bg-gray-300 py-2 px-4 transition-all rounded-lg text-[#212925] font-ysabeau normal-case">
                  Remove from sale list
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCollections;
