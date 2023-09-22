import React from "react";
import myGradPic from "../../public/images/graduation-edited.png";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-lg:flex-col max-lg:items-center max-lg:text-center about-center flex bg-red-950 w-full justify-center p-10 border-t-8 border-t-yellow-400">
        <div className="left-about">
          <img className="h-[250px] rounded-full max-lg:h-[150px]" src={myGradPic} alt="grad" />
        </div>
        <div className=" text-white right-about flex justify-center flex-col m-10">
          <p className="text-4xl font-semibold py-3 max-md:text-2xl">REYUER FLORES</p>
          <p className="">Graduated at</p>
          <p className="text-yellow-400 text-3xl font-bold max-lg:text-xl">
            DON HONORIO VENTURA STATE UNIVERSITY
          </p>
          <p className="text-yellow-400 text-2xl max-lg:text-sm">
            Bachelor of Science In Information Technology
          </p>
          <p className="font-bold max-lg:text-sm max-lg:font-normal">Class 2023</p>
        </div>
      </div>
    </div>
  );
}
