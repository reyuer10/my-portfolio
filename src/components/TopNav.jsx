import React, { useState } from "react";
import { Link } from "react-scroll";
import { BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa6";
import { PiListBold } from "react-icons/pi";
// Option B:
// useNavigation
//const navigate = useNavigation()

export default function TopNav() {
  const [isMobile, setIsMobile] = useState("max-md:hidden");
  return (
    <div className="main-container fixed top-0 left-0 w-full font-Lato bg-white">
      <div className="top-nav-bar flex justify-between items-center p-4">
        <div className={` left space-x-7 sm:text-slate-500 max-md:hidden`}>
          <Link className="cursor-pointer font-bold text-2xl" to="/">
            Logo
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={5}
            duration={500}
            className="cursor-pointer hover:translate-x-1.5"
            to="about"
          >
            About me
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={5}
            duration={500}
            className="cursor-pointer"
            to="technical"
          >
            My technical Skills
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={5}
            duration={500}
            className="cursor-pointer"
            to="experience"
          >
            Experience
          </Link>

          <Link
            spy={true}
            smooth={true}
            offset={5}
            duration={500}
            className="cursor-pointer"
            to="contact"
          >
            Contact
          </Link>
        </div>

        <div className="right flex space-x-12 max-md:justify-center max-md:items-center">
          <Link to="https://www.google.com/">
            {" "}
            <BsInstagram
              className="cursor-pointer hover:scale-110 transition-all"
              size={20}
            />{" "}
          </Link>
          <Link to="https://www.google.com/">
            {" "}
            <BsGithub
              className="cursor-pointer hover:scale-110 transition-all"
              size={20}
            />
          </Link>
          <Link to="https://www.google.com/">
            {" "}
            <BsTwitter
              className="cursor-pointer hover:scale-110 transition-all"
              size={20}
            />
          </Link>
          <Link to="https://www.google.com/">
            {" "}
            <FaTiktok
              className="cursor-pointer hover:scale-110 transition-all"
              size={20}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
