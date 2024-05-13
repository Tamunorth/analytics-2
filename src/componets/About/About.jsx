import React from "react";
import Stats from "./Stats";

const About = () => {
  return (
    <div>
      <h2 className=" flex mx-8 justify-center text-center mt-32 text-5xl md:text-7xl  font-bold ">
        Trusted by developers world wide
      </h2>
      <p className=" text-gray-500 text-2xl md:text-3xl text-center mx-4 my-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt et velit
        nulla labore rem neque sequi, minima quidem enim unde odio vitae quod
        distinctio ab! Repellendus minus ad dicta aut!
      </p>

      <div className="flex justify-center xl:w-[80%]  items-center mx-auto">
        <Stats title={"100%"} subtitle={"Completion"} />
        <Stats title={"24/7"} subtitle={"Delivery"} />
        <Stats title={"100k"} subtitle={"Transactions"} />
      </div>
    </div>
  );
};

export default About;
