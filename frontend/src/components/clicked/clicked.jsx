import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import AddOns from "../addons/addOns";
import Content from "../sidebar-extended/sidebarExtended";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { BsFillKeyboardFill } from "react-icons/bs";
import { FaSortDown } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { MdOutlineArchive } from "react-icons/md";
import { MdOutlineReport } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Clicked() {
  const location = useLocation();
  const navigate = useNavigate();
  const subject = location.state.subject;
  const body = location.state.body;
  const sender = location.state.sender;

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Content />
        {/* <OptionsTop /> */}
        <div className="bg-[#ffffff] w-[100%] rounded-xl p-3">
          <div className="flex justify-between mb-4">
            <div className="flex items-center">
              <div className="flex">
                <IoArrowBack className="mr-5 decoration-slate-200 cursor-pointer" onClick={handleBack}/>
              </div>
              <MdOutlineArchive className="mr-5 decoration-slate-200" />
              <MdOutlineReport className="mr-5 h-4 w-4 decoration-slate-200" />
              <MdDeleteForever className="mr-5 h-4 w-4 decoration-slate-200" />
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
          <div className="font-normal text-lg m-8 ml-14">
            <div>{subject}</div>
          </div>
          <div className="flex items-center mb-4">
            <img src={logo} alt="logo" className="rounded-full h-8 w-8 mr-6" />
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="font-medium">{sender}</div>
                <div className="font-light text-sm ml-1">
                  {"<dharun_22cb19@kgkite.ac.in>"}
                </div>
              </div>
              <div className="font-light text-sm">to Dharun</div>
            </div>
          </div>
          <div className="ml-14">{body}</div>
        </div>
        <AddOns />
      </div>
    </div>
  );
}

export default Clicked;