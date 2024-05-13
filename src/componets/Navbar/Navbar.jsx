import React, { useState } from "react";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen  h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className=" text-3xl font-bold mr-40 sm:text-4xl"> BRAND .</h1>

          <ul className="hidden lg:flex ">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className="hidden lg:flex">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>

        <div className="mr-[10px] lg:hidden " onClick={handleClick}>
          {!nav ? <MenuIcon className="w-7" /> : <XIcon className="w-7 " />}
        </div>
      </div>

      {/* For mobile view */}
      <ul className={nav ? "absolute bg-zinc-200 px-8 w-full" : "hidden"}>
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Support</li>
        <li className="border-b-2 border-zinc-300 w-full">Platform</li>
        <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
        <div className=" flex flex-col py-8">
          <button className=" bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sign in
          </button>

          <button className=" bg-indigo px-8 py-3 mb-4"> SignUp </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
