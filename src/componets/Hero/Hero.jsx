import React from "react";

import {
  CloudUploadIcon,
  ServerIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/solid";

import bgImg from "../..//assets/cyber-bg.png";
import ServiceComponent from "./ServiceComponent";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-zinc-200 flex justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-6 py-8">
          <p className="text-2xl">Unique Sequencing & production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Cloud management
          </h1>
          <p className="text-2xl">This is our tech brand</p>

          <button className="py-3 px-6 sm:w-[70%] my-4">Get Started</button>
        </div>

        <div>
          <img
            className="w-ful
          "
            src={bgImg}
            alt="bg image"
          />
        </div>

        <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[-5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl">
          <p>Data Services</p>
          <div className="flex justify-between flex-wrap px-4">
            <ServiceComponent
              name="App Security"
              icon={<CloudUploadIcon className="h-6 text-indigo-600" />}
            />
            <ServiceComponent
              name="Dashboard Design"
              icon={<DatabaseIcon className="h-6 text-indigo-600" />}
            />
            <ServiceComponent
              name="Cloud Data"
              icon={<ServerIcon className="h-6 text-indigo-600" />}
            />
            <ServiceComponent
              name="API"
              icon={<PaperAirplaneIcon className="h-6 text-indigo-600" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
