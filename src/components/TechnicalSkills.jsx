import React from "react";

import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiCplusplus,
  SiMysql,
  SiReact,
} from "react-icons/si";

import{
  BiLogoNodejs
} from 'react-icons/bi'

import {
  TbBrandVscode
} from 'react-icons/tb'

export default function TechnicalSkills() {
  return (
    <div className="technical-container min-h-screen flex items-center justify-center flex-col">
     <div className="header-skill">
        <p className="text-4xl font-bold py-12 text-center max-lg:text-3xl">My Technical Skills</p>
      </div>
      <div className="body-skill text-[70px] grid grid-cols-4 max-lg:grid-cols-1 gap-[50px]">
        <SiJavascript className="hover:scale-110 max-lg:text-[50px] transition-all cursor-pointer text-[#f7df1e]" />
        <SiHtml5 className="hover:scale-110 max-lg:text-[50px] transition-all cursor-pointer text-[#e34f26]"  />
        <SiCss3 className="hover:scale-110 max-lg:text-[50px] transition-all cursor-pointer text-[#264de4]" />
        <SiCplusplus className="hover:scale-110 max-lg:text-[50px] transition-all cursor-pointer text-[#00599c]" />
        <SiMysql className="hover:scale-110 max-lg:text-[50px] transition-all cursor-pointer text-[#4479a1]" />
        <SiReact className="hover:scale-110 max-lg:text-[50px] transition-all cursor-pointer text-[#61dafb]" />
        <BiLogoNodejs className="hover:scale-110 max-lg:text-[50px] transition-all cursor-pointer text-[#68a063]" />
        <TbBrandVscode className="hover:scale-110 max-lg:text-[50px] transition-all cursor-pointer text-[#007acc]" />
      </div>
    
    </div>
  );
}
