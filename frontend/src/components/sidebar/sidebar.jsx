import React from "react";
import { IoMdMail } from "react-icons/io";
import { SiGooglemeet } from "react-icons/si";


function Sidebar() {
    return (
            <div className="flex flex-col items-center bg-[#eaf1fb] w-16 h-[91vh]">
                <IoMdMail className="h-[20px] w-[20px] m-4 mt-5"/>
                <SiGooglemeet className="h-[20px] w-[20px] m-4"/>
            </div>
    );
}

export default Sidebar;