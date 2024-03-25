import React from "react";
import calendar from "../../assets/calendar_2020q4_2x.png";
import keep from "../../assets/keep_2020q4v3_2x.png";
import tasks from "../../assets/tasks_2021_2x.png";
import contacts from "../../assets/contacts_2022_2x.png";
import { FaPlus } from "react-icons/fa6";

function AddOns() {
  return (
    <div className="">
      <div className="flex flex-col items-center m-3">
        <img src={calendar} alt="calendar" className="m-4 h-5 w-5" />
        <img src={keep} alt="keep" className="m-4 h-5 w-5" />
        <img src={tasks} alt="tasks" className="m-4 h-5 w-5" />
        <img src={contacts} alt="contacts" className="m-4 h-5 w-5" />
        <hr className="mt-4 mb-4" />
        <FaPlus className="" />
      </div>
    </div>
  );
}

export default AddOns;
