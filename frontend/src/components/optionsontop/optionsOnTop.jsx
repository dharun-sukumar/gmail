import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdRefresh } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { BsFillKeyboardFill } from "react-icons/bs";
import { FaSortDown } from "react-icons/fa";
// import Content from "./Content";

function OptionsTop() {
  return (
    <div className="bg-[#ffffff] w-[100%] rounded-xl p-4">
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="flex">
            <input
              type="checkbox"
              className=" decoration-slate-200"
              name="checkbox"
              id="checkbox"
            />
            <IoMdArrowDropdown className="mr-5 decoration-slate-200" />
          </div>
          <IoMdRefresh className="mr-5 decoration-slate-200" />
          <SlOptionsVertical className="mr-5 h-3 w-3 decoration-slate-200" />
        </div>

        <div className="flex text-xs items-center">
          <div className="mr-4">1-50 of 120</div>
          <FaChevronLeft className=" mr-4" color="#7c7f84" />
          <FaChevronRight className=" mr-4" />
          <div className="flex items-center mr-4">
            <BsFillKeyboardFill className="h-4 w-4" color="#7c7f84" />
            <FaSortDown className="mb-1" color="#7c7f84" />
          </div>
        </div>
      </div>
      {/* <Content /> */}
    </div>
  );
}

export default OptionsTop;
