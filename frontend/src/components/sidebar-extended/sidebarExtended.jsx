import React, { useEffect, useState, useContext } from "react";
import { BiPencil } from "react-icons/bi";
import { MdInbox } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";
import { RiDraftLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoTrash } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import axios from "axios";
import MailCountContext from "../../context/mailContext"

function SidebarExtended() {
  const { mailCount, setMailCount } = useContext(MailCountContext);
  const [showMore, setShowMore] = useState(false);
  const [page, setPage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/home").then((response) => {
      const filteredMails = response.data.filter(
        (mail) => mail.isDeleted === 0
      );
      setMailCount(filteredMails.length);
    });
  }, []);

  return (
    <div className="flex flex-col ml-3 mr-3">
      <div className="bg-[#c2e7ff] mt-2 mb-2 rounded-xl w-32 cursor-pointer">
        <div className="flex items-center justify-center text-sm h-12 w-29">
          <BiPencil className="h-5 w-5 mr-4" />
          Compose
        </div>
      </div>

      <NavLink
        to="/"
        className={`flex items-center justify-center w-52 rounded-xl hover:bg-slate-200 ${
          page === "/" ? "bg-blue-500" : ""
        }`}
      >
        <div className="flex w-[90%] items-center h-7 justify-center">
          <MdInbox className="mr-4 h-5 w-5" />
          <div className="flex text-sm font-medium justify-between items-center w-[100%]">
            <p>Inbox</p>
            <p className="text-xs">{mailCount}</p>
          </div>
        </div>
      </NavLink>
      <NavLink
        to="/starred"
        className={`flex items-center justify-center w-52 rounded-xl cursor-pointer hover:bg-slate-200${
          page === "/starred" ? "bg-blue-500" : ""
        }`}
        onClick={() => {
          setPage("/starred");
          console.log(page);
        }}
      >
        <div className="flex w-[90%] items-center h-7 justify-center">
          <FaRegStar className="mr-4 h-5 w-5" />
          <div className="flex text-sm justify-between items-center w-[100%]">
            <p>Starred</p>
          </div>
        </div>
      </NavLink>
      <div className="flex items-center justify-center w-52 rounded-xl hover:bg-slate-200">
        <div className="flex w-[90%] items-center h-7 justify-center">
          <MdAccessTime className="mr-4 h-5 w-5" />
          <div className="flex text-sm justify-between items-center w-[100%]">
            <p>Snoozed</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-52 rounded-xl hover:bg-slate-200">
        <div className="flex w-[90%] items-center h-7 justify-center">
          <AiOutlineSend className="mr-4 h-5 w-5" />
          <div className="flex text-sm justify-between items-center w-[100%]">
            <p>Sent</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-52 rounded-xl hover:bg-slate-200">
        <div className="flex w-[90%] items-center h-7 justify-center">
          <RiDraftLine className="mr-4 h-5 w-5" />
          <div className="flex text-sm justify-between items-center w-[100%]">
            <p>Drafts</p>
          </div>
        </div>
      </div>

      <div
        className={`flex items-center justify-center w-52 rounded-xl hover:bg-slate-200 ${
          showMore ? "bg-slate-200" : ""
        }`}
        onClick={() => setShowMore(!showMore)}
      >
        <div className="flex w-[90%] items-center h-7 justify-center">
          <IoMdArrowDropdown className="mr-4 h-5 w-5" />
          <div className="flex text-sm justify-between items-center w-[100%]">
            <p>{showMore ? "Less" : "More"}</p>
          </div>
        </div>
      </div>
      {showMore && (
        <NavLink to="/trash" className="flex flex-col">
          <div className="flex items-center justify-center w-52 rounded-xl hover:bg-slate-200">
            <div className="flex w-[90%] items-center h-7 justify-center">
              <IoTrash className="mr-4 h-5 w-5" />
              <div className="flex text-sm justify-between items-center w-[100%]">
                <p>Trash</p>
              </div>
            </div>
          </div>
        </NavLink>
      )}
      {/* {showCompose && <Compose closeCompose={handleComposeClick} />} */}
    </div>
  );
}

export default SidebarExtended;
