// import React from "react";
import Link from "next/link";
import React, { useState } from 'react'

const Hero = () => {

  const [inputTag , setInputTag] = useState ()

  const hello = () =>{
      console.log("inputTag")
  }



  return (
    <>
      <div className="bg-[#1C8EF9]  h-screen flex flex-col gap-6 justify-center items-center">
        <div className="p-24 bg-white w-6/12 flex gap-6 flex-col justify-center items-center">
          <h1 className="text-black text-5xl font-bold">Log In</h1>
          <br />
          <form className="w-10/12 flex   justify-center flex-col gap-6">
            <h1 className="text-xl font-semibold">Email:</h1>
            <input
              type="email"
              required
              onChange={(e) => setInputTag(e.target.value)}
              placeholder="Enter email"
              autoComplete="off"
              className=" border-2 border-gray-400 text-black  rounded-md text-xl px-4 py-2   outline-none"
            />
            <h1 className="text-xl font-semibold">Password:</h1>
            <input
              type="password"
              required
              placeholder="Enter password"
              autoComplete="off"
              className=" border-2 border-gray-400 text-black  rounded-md text-xl px-4 py-2   outline-none"
            />
            <div className="flex gap-2">
              <input type="checkbox" />
              <h1>Remember Me</h1>
            </div>
            <Link href='/Profile' >
              <button type="submit" className="border-2 border-[#1C8EF9] rounded-md hover:bg-[#1C8EF9] text-black hover:text-white text-2xl font-semibold px-4 py-2">
                Log In
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hero;
