import React from "react";

const Stats = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col text-center w-full mx-1 px-4 bg-white border  border-slate-300 rounded-lg shadow-xl py-8 my-4">
      <h1 className="text-3xl md:text-5xl font-bold text-indigo-600">
        {title}
      </h1>
      <p className=" text-gray-400">{subtitle}</p>
    </div>
  );
};

export default Stats;
