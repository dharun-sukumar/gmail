import React from "react";
import logo from "../../assets/logo_gmail_lockup_dark_1x_r5.png";
import dp from "../../assets/me.jpg";
import { FiMenu } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { IoMdOptions } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";

function Navbar() {
  return (
    <div className="flex flex-row  items-center w-[100%] h-14">
        <div className="flex items-center justify-center bg-[#eaf1fb]">
      <FiMenu className="w-[20px] h-[20px] m-4 bg-[#eaf1fb]" />
      </div>
      <img className="h-[32px] w-[90px] ml-4 mr-28" src={logo} alt="logo" />
      <div className="bg-[#eaf1fb] w-[55%] rounded-full relative mr-36">
        <input
          className="mr-4 bg-[#eaf1fb] w-[70%] h-10 ml-8 focus:outline-none"
          type="text"
          name="search"
          id="search"
          placeholder="Search in mail"
        />
        <FiSearch className="absolute left-3 top-3" />
        <IoMdOptions className="absolute right-3 top-3" />
      </div>
      <div className="flex gap-4 items-center justify-center">
        <FaRegQuestionCircle className="w-[24px] h-[24px] text-slate-600" />
        <IoSettingsOutline className="w-[24px] h-[24px] text-slate-600" />
        <CgMenuGridO className="w-[24px] h-[24px] text-slate-600" />
        <img className="h-8 w-8 rounded-full m-4" src={dp} alt="dp" />
      </div>
    </div>
  );
}

export default Navbar;
