import { BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa6";

import React from "react";

export default function Footer() {
  return (
    <div className="bg-black h-60 text-white font-Lato p-7">
      <div className="flex space-x-[200px]">
        <div>
          <ul>
            <li className="font-thin text-xl">Description:</li>
            <div className="py-3">
              <li>September 15, 2023</li>
              <li>new lesson learned: react-scroll library</li>
              <li>React JS</li>
            </div>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-thin text-xl">Details: </li>
            <div className="py-3">
              <li>This is sample website</li>
              <li>Sample portfolio</li>
              <li>Made by reyuer flores</li>
            </div>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-thin text-xl">Official Account:</li>
            <div className="text-xl flex space-x-[30px] py-3 cursor-pointer">
              <li>
                <BsInstagram />
              </li>
              <li>
                <BsTwitter />
              </li>
              <li>
                <BsGithub />
              </li>
              <li>
                <FaTiktok />
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
