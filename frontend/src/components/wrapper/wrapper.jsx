import React from "react";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import OptionsTop from "../optionsontop/optionsOnTop";
import AddOns from "../addons/addOns";
import SidebarExtended from "../sidebar-extended/sidebarExtended";
import Mails from "../mails/mails";


function Wrapper() {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <SidebarExtended />
        <div className="flex flex-col w-[100%] bg-white">
        <OptionsTop />
        <Mails />
        </div>
        <AddOns />
      </div>
    </div>
  );
}

export default Wrapper;
