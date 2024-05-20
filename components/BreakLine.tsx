import React from "react";

const BreakLine = () => {
  return (
    <div className="flex h-[1px]">
      <div className="w-1/4 bg-[radial-gradient(circle,rgba(51,51,51,0.4)_40%,rgba(255,255,255,0)_90%,rgba(255,255,255,1)_100%)]"></div>
      <div className=" w-full bg-[radial-gradient(circle,rgba(51,51,51,0.4)_40%,rgba(255,255,255,0)_90%,rgba(255,255,255,1)_100%)]"></div>
    </div>
  );
};

export default BreakLine;
