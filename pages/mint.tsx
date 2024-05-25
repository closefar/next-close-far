import {
  Button,
  Option,
  Select,
  Step,
  Stepper,
} from "@material-tailwind/react";
import React, { useState } from "react";
import BreakLine from "../components/BreakLine";
import Image from "next/image";

const Mint = () => {
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
  const [tags, setTags] = useState("");

  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const [file, setFile] = useState<File>();

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const onDropHandler = (ev) => {
    ev.preventDefault();
    const newFile = ev.dataTransfer.files[0];
    setFile(newFile);
  };

  const onDragOver = (ev) => ev.preventDefault();

  const mintHandler = () => {
    console.log("mint");
  };

  console.log(file);

  return (
    <div className="w-full px-28 py-9 flex flex-col items-center justify-center gap-14 mt-10">
      <h1 className="font-medium text-[2.5rem]">Mint</h1>

      <div className="w-full flex flex-col gap-12">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
          className="justify-stretch"
        >
          <Step className="rounded-none rounded-l-lg flex-1 text-xs font-normal h-auto py-[0.6rem]">
            Upload Video
          </Step>
          <Step className="rounded-none flex-1 text-xs font-normal h-auto py-[0.6rem]">
            Add Information
          </Step>
          <Step className="rounded-none rounded-r-lg flex-1 text-xs font-normal h-auto py-[0.6rem]">
            Review and Mint
          </Step>
        </Stepper>
        {activeStep === 0 ? (
          <div
            id="drop_zone"
            onDrop={onDropHandler}
            onDragOver={onDragOver}
            className="mt-14 border border-gray-500 border-dashed w-1/2 self-center flex justify-center items-center h-32"
          >
            <label htmlFor={"file_picker"}>Select a video or drag here</label>
            <input
              id="file_picker"
              type="file"
              accept="image/png, image/jpeg"
              onChange={(ev) => setFile(ev.target.files[0])}
              style={{ display: "none" }}
            ></input>
          </div>
        ) : null}

        {activeStep === 1 ? (
          <div className="w-full flex flex-wrap">
            <div className="w-1/2">
              <input
                type="text"
                placeholder="Name"
                className="py-2 px-8 placeholder:text-blue-gray-500 outline-none w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <BreakLine />
            </div>
            <div
              className={`w-1/2 [&>div>button]:border-none [&>div>label]:text-base [&>div>label]:after:border-none [&>div>label]:top-1/3 [&>div>label]:left-[5%] ${
                country && "[&>div>label]:hidden"
              }`}
            >
              <Select
                className="[&>span]:pl-8"
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
              className={`w-1/2 [&>div>button]:border-none [&>div>label]:text-base [&>div>label]:after:border-none [&>div>label]:top-1/3 [&>div>label]:left-[5%] ${
                yearOfBirth && "[&>div>label]:hidden"
              }`}
            >
              <Select
                className="[&>span]:pl-8"
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
              className={`w-1/2 [&>div>button]:border-none [&>div>label]:text-base [&>div>label]:after:border-none [&>div>label]:top-1/3 [&>div>label]:left-[5%] ${
                monthOfBirth && "[&>div>label]:hidden"
              }`}
            >
              <Select
                className="[&>span]:pl-8"
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
              className={`w-1/2 [&>div>button]:border-none [&>div>label]:text-base [&>div>label]:after:border-none [&>div>label]:top-1/3 [&>div>label]:left-[5%] ${
                dayOfBirth && "[&>div>label]:hidden"
              }`}
            >
              <Select
                className="[&>span]:pl-8"
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
              className={`w-1/2 [&>div>button]:border-none [&>div>label]:text-base [&>div>label]:after:border-none [&>div>label]:top-1/3 [&>div>label]:left-[5%] ${
                nationality && "[&>div>label]:hidden"
              }`}
            >
              <Select
                className="[&>span]:pl-8"
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
              className={`w-1/2 [&>div>button]:border-none [&>div>label]:text-base [&>div>label]:after:border-none [&>div>label]:top-1/3 [&>div>label]:left-[5%] ${
                state && "[&>div>label]:hidden"
              }`}
            >
              <Select
                className="[&>span]:pl-8"
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
              className={`w-1/2 [&>div>button]:border-none [&>div>label]:text-base [&>div>label]:after:border-none [&>div>label]:top-1/3 [&>div>label]:left-[5%] ${
                language && "[&>div>label]:hidden"
              }`}
            >
              <Select
                className="[&>span]:pl-8"
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
              className={`w-1/2 [&>div>button]:border-none [&>div>label]:text-base [&>div>label]:after:border-none [&>div>label]:top-1/3 [&>div>label]:left-[5%] ${
                pronounce && "[&>div>label]:hidden"
              }`}
            >
              <Select
                className="[&>span]:pl-8"
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

            <div className="w-1/2">
              <input
                type="text"
                placeholder="Tags"
                className="py-2 px-8 placeholder:text-blue-gray-500 outline-none w-full"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
              <BreakLine />
            </div>
            <div
              className={`w-1/2 [&>div>button]:border-none [&>div>label]:text-base [&>div>label]:after:border-none [&>div>label]:top-1/3 [&>div>label]:left-[5%] ${
                job && "[&>div>label]:hidden"
              }`}
            >
              <Select
                className="[&>span]:pl-8"
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
        ) : null}
        {activeStep === 2 ? (
          <div className="flex gap-3">
            <div className="relative w-1/3">
              <Image
                className="h-auto w-full"
                src={URL.createObjectURL(file)}
                alt=""
                width={300}
                height={300}
              />
              <div className="w-[94%] h-[94%] border absolute top-[3%] left-[3%]"></div>
            </div>
            <div className="flex flex-col">
              <span>{name}</span>
              <span>{country}</span>
              <span>{job}</span>
              <span>{nationality}</span>
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
                nesciunt temporibus vitae dicta perferendis ducimus. Odio
                excepturi vel dolorum esse, veniam voluptas architecto
                recusandae, ratione quod aliquam, id perferendis sit?
              </span>
            </div>
          </div>
        ) : null}
        <div className="flex justify-between">
          <Button
            className="font-ysabeau"
            onClick={handlePrev}
            disabled={isFirstStep}
          >
            Prev
          </Button>
          <Button
            className="font-ysabeau"
            onClick={(e) => (isLastStep ? mintHandler() : handleNext())}
            disabled={!file}
          >
            {isLastStep ? "Mint" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Mint;
