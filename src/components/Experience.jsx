import React from "react";
import cityhall from "../../public/images/cityhall.jpg";
import dhvsu from "../../public/images/dhvsu.jpg";
import xteer from "../../public/images/exteer.jpg";

export default function Experience() {
  return (
    <div className="experience-container min-h-screen flex items-center justify-evenly  font-Lato max-lg:py-20">
      <div className="experience-field flex max-lg:flex-col space-x-14 max-lg:space-y-20">
        <div>
          <p className="text-center p-3 font-bold text-[#303030] text-3xl my-10">Experience</p>
        </div>
        <div className="cursor-pointer hover:scale-110 transition-all rounded-2xl shadow-xl  p-3">
          <img
            className="rounded-2xl h-[170px] w-[320px]"
            src={cityhall}
            alt="cityhall"
          />
          <div className="p-3 pt-7">
            <p className="font-bold text-lg">On-The-Job Training</p>
            <p className="text-slate-700 font-semibold text-lg">
              Employees Assistant
            </p>
            <p>City Human Resources Department</p>
            <p>City Hall of San Fernando, Pampanga</p>
            <p>July, 2018 to August, 2018</p>
          </div>
        </div>

        <div className="cursor-pointer hover:scale-110 transition-all rounded-2xl shadow-xl p-3">
          <img
            className="rounded-2xl h-[170px] w-[330px]"
            src={dhvsu}
            alt="dhvsu"
          />
          <div className="p-3 pt-7">
            <p className="font-bold text-lg">On-The-Job Training</p>
            <p className="text-slate-700 font-semibold text-lg">
              Technical Support
            </p>
            <p className="">CCS Laboratory Office</p>
            <p>Don Honorio Ventura State University</p>
            <p>November, 2022 to December, 2022</p>
          </div>
        </div>
        <div className="cursor-pointer hover:scale-110 transition-all rounded-2xl shadow-xl p-3">
          <img
            className="rounded-2xl h-[170px] w-[330px]"
            src={xteer}
            alt="xteer"
          />
          <div className="p-3 pt-7">
            <p className="font-bold text-lg">On-The-Job Training</p>
            <p className="text-slate-700 font-semibold text-lg">
              Business Administration
            </p>
            <p>Exteer Auto-Q Phil. Inc</p>
            <p>February, 2023 to June, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
