import React from "react";

export default function MainContent() {
  return (
    <div className="h-screen justify-center flex items-center">
      <div className="main-container text-center">
        <p className="font-bold text-[50px] max-md:text-3xl">I'm React Developer</p>
        <p className="text-2xl max-md:text-lg">Creating my new world</p>
        <button className="px-5 py-3 rounded-full bg-black text-white cursor-pointer my-7 max-md:px-3 max-md:py-2 max-md:text-sm">
          Connect
        </button>
      </div>
    </div>
  );
}
