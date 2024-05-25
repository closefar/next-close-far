import { Option, Select } from "@material-tailwind/react";
import React, { useState } from "react";
import BreakLine from "../components/BreakLine";
import Image from "next/image";
import Link from "next/link";

const Collect = () => {
  const [name, setName] = useState("");
  const [yearOfBirth, setYearOfBirth] = useState("");
  const [dayOfBirth, setDayOfBirth] = useState("");
  const [state, setState] = useState("");
  const [pronounce, setPronounce] = useState("");
  const [job, setJob] = useState("");
  const [country, setCountry] = useState("");
  const [monthOfBirth, setMonthOfBirth] = useState("");
  const [nationality, setNationality] = useState("");
  const [language, setLanguage] = useState("");
  const [Tags, setTags] = useState("");

  return (
    <div className="w-full px-28 py-9 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center py-9 gap-3">
        <h1 className="font-medium text-[2.5rem]">Collect</h1>
      </div>
      <div className="w-full flex flex-wrap">
        <div className="w-1/3 flex flex-col justify-end">
          <input
            type="text"
            placeholder="Name"
            className="py-[0.4rem] px-6 placeholder:text-blue-gray-500 outline-none w-full"
            value={name}
            onChange={(e) => setTags(e.target.value)}
          />
          <BreakLine />
        </div>
        <div className="w-1/3 flex flex-col justify-end">
          <input
            type="text"
            placeholder="Search on tags"
            className="py-[0.4rem] px-6 placeholder:text-blue-gray-500 outline-none w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <BreakLine />
        </div>
        <div
          className={`w-1/3 [&>div>button]:border-none [&>div>label]:text-base [&>div>label]:after:border-none [&>div>label]:top-1/3 [&>div>label]:left-[5%] ${
            country && "[&>div>label]:hidden"
          }`}
        >
          <Select
            className="[&>span]:pl-6"
            variant="static"
            value={country}
            onChange={(val) => setCountry(val)}
            label="Country"
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
          <BreakLine />
        </div>
        <div
          className={`w-1/3 [&>div>button]:border-none [&>div>label]:text-base [&>div>label]:after:border-none [&>div>label]:top-1/3 [&>div>label]:left-[5%] ${
            yearOfBirth && "[&>div>label]:hidden"
          }`}
        >
          <Select
            className="[&>span]:pl-6"
            variant="static"
            value={yearOfBirth}
            onChange={(val) => setYearOfBirth(val)}
            label="Year of Birth"
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
          <BreakLine />
        </div>
        <div
          className={`w-1/3 [&>div>button]:border-none [&>div>label]:text-base [&>div>label]:after:border-none [&>div>label]:top-1/3 [&>div>label]:left-[5%] ${
            monthOfBirth && "[&>div>label]:hidden"
          }`}
        >
          <Select
            className="[&>span]:pl-6"
            variant="static"
            value={monthOfBirth}
            onChange={(val) => setMonthOfBirth(val)}
            label="Month of Birth"
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
          <BreakLine />
        </div>
        <div
          className={`w-1/3 [&>div>button]:border-none [&>div>label]:text-base [&>div>label]:after:border-none [&>div>label]:top-1/3 [&>div>label]:left-[5%] ${
            dayOfBirth && "[&>div>label]:hidden"
          }`}
        >
          <Select
            className="[&>span]:pl-6"
            variant="static"
            value={dayOfBirth}
            onChange={(val) => setDayOfBirth(val)}
            label="Day of Birth"
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
          <BreakLine />
        </div>
        <div
          className={`w-1/3 [&>div>button]:border-none [&>div>label]:text-base [&>div>label]:after:border-none [&>div>label]:top-1/3 [&>div>label]:left-[5%] ${
            nationality && "[&>div>label]:hidden"
          }`}
        >
          <Select
            className="[&>span]:pl-6"
            variant="static"
            value={nationality}
            onChange={(val) => setNationality(val)}
            label="Nationality"
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
          <BreakLine />
        </div>
        <div
          className={`w-1/3 [&>div>button]:border-none [&>div>label]:text-base [&>div>label]:after:border-none [&>div>label]:top-1/3 [&>div>label]:left-[5%] ${
            state && "[&>div>label]:hidden"
          }`}
        >
          <Select
            className="[&>span]:pl-6"
            variant="static"
            value={state}
            onChange={(val) => setState(val)}
            label="State"
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
          <BreakLine />
        </div>
        <div
          className={`w-1/3 [&>div>button]:border-none [&>div>label]:text-base [&>div>label]:after:border-none [&>div>label]:top-1/3 [&>div>label]:left-[5%] ${
            language && "[&>div>label]:hidden"
          }`}
        >
          <Select
            className="[&>span]:pl-6"
            variant="static"
            value={language}
            onChange={(val) => setLanguage(val)}
            label="Language"
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
          <BreakLine />
        </div>
        <div
          className={`w-1/3 [&>div>button]:border-none [&>div>label]:text-base [&>div>label]:after:border-none [&>div>label]:top-1/3 [&>div>label]:left-[5%] ${
            pronounce && "[&>div>label]:hidden"
          }`}
        >
          <Select
            className="[&>span]:pl-6"
            variant="static"
            value={pronounce}
            onChange={(val) => setPronounce(val)}
            label="Pronounce"
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
          <BreakLine />
        </div>
        <div
          className={`w-1/3 [&>div>button]:border-none [&>div>label]:text-base [&>div>label]:after:border-none [&>div>label]:top-1/3 [&>div>label]:left-[5%] ${
            job && "[&>div>label]:hidden"
          }`}
        >
          <Select
            className="[&>span]:pl-6"
            variant="static"
            value={job}
            onChange={(val) => setJob(val)}
            label="Jobs"
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
          <BreakLine />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full mt-6">
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
            <div key={id}>
              <Link
                className="flex-auto cursor-pointer"
                href={`/details/${id}`}
              >
                <div className="relative">
                  <Image
                    className="h-auto w-full"
                    src={`/${id}.jpg`}
                    alt=""
                    width={200}
                    height={200}
                  />
                  <div className="w-full h-full text-white flex justify-center items-center text-2xl bg-black absolute top-0 right-0 hover:opacity-90 opacity-0 z-10">
                    O Watch
                  </div>
                  <div className="w-[94%] h-[94%] border absolute top-[3%] left-[3%]"></div>
                </div>
              </Link>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collect;
