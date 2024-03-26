import React, { useEffect, useState, useContext } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { RiInboxArchiveLine } from "react-icons/ri";
import { MdOutlineDeleteForever } from "react-icons/md";
import { MdOutlineMarkAsUnread } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoMdTime } from "react-icons/io";
import axios from "axios";
import MailCountContext from "../../context/mailContext";

function Mails() {
  const navigate = useNavigate();
  const [mails, setMails] = useState([]);
  const { mailCount, setMailCount } = useContext(MailCountContext);
  const [isHovered, setIsHovered] = useState(Array(mails.length).fill(false));

  useEffect(() => {
    axios.get("http://localhost:5000/home").then((response) => {
      setMails(response.data);
      setIsHovered(Array(response.data.length).fill(false));
    });
  }, []);

  const handleMouseEnter = (index) => {
    setIsHovered((prevHovered) =>
      prevHovered.map((val, i) => (i === index ? true : val))
    );
  };

  const handleMouseLeave = (index) => {
    setIsHovered((prevHovered) =>
      prevHovered.map((val, i) => (i === index ? false : val))
    );
  };

  const handleClick = (mail) => {
    navigate("/next-page", {
      state: { body: mail.body, sender: mail.sender, subject: mail.subject },
    });
  };

  const handleStarClick = (id) => {
    const updatedMails = mails.map((mail) => {
      if (mail.id === id) {
        return { ...mail, isStarred: !mail.isStarred }; // Toggle isStarred value
      }
      return mail;
    });

    axios
      .put(`http://localhost:5000/mails/${id}`, {
        isStarred: !mails.find((mail) => mail.id === id).isStarred,
      })
      .then((response) => {
        setMails(updatedMails);
      })
      .catch((error) => {
        console.error("Error updating isStarred value:", error);
      });
  };

  const handleRecovery = (id) => {
    const updatedMails = mails.map((mail) => {
      if (mail.id === id) {
        return { ...mail, isDeleted: !mail.isDeleted }; // Toggle isStarred value
      }
      return mail;
    });
    axios
      .put(`http://localhost:5000/delete/${id}`, {
        isDeleted: !mails.find((mail) => mail.id === id).isDeleted,
      })
      .then((response) => {
        setMails(updatedMails);
        // getMails();
      })
      .catch((error) => {
        console.error("Error updating isStarred value:", error);
      });
  };

  return (
    <div>
      <table className="w-full text-sm cursor-pointer font-thin text-slate-800">
        <tbody>
          {mails
            .filter((mail) => mail.isDeleted === 0)
            .map((mail, index) => (
              <tr
                className={`border ${isHovered[index] ? "shadow-md" : ""}`}
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => handleClick(mail)}
              >
                <td className="pl-2">
                  <input className="ml-2" type="checkbox" name="" id="" />
                </td>
                <td>
                  {mail.isStarred ? (
                    <FaStar
                      className="ml-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleStarClick(mail.id);
                      }}
                    />
                  ) : (
                    <FaRegStar
                      className="ml-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleStarClick(mail.id);
                      }}
                    />
                  )}
                </td>
                <td className="p-2">{mail.sender}</td>
                <td className="p-2">{mail.subject}</td>
                <td className="p-2">{mail.body}</td>
                <td
                  className="p-2 text-xs"
                  style={{ justifyContent: "flex-end", display: "flex" }}
                >
                  {isHovered[index] ? (
                    <div className="flex">
                      <RiInboxArchiveLine className="h-4 w-4 mr-2 rounded-full hover:bg-slate-300" />
                      <MdOutlineDeleteForever
                        className="h-4 w-4 mr-2 rounded-full hover:bg-slate-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRecovery(mail.id);
                        }}
                      />
                      <MdOutlineMarkAsUnread className="h-4 w-4 mr-2 rounded-full hover:bg-slate-300" />
                      <IoMdTime className="h-4 w-4 mr-2 rounded-full hover:bg-slate-300" />
                    </div>
                  ) : (
                    <span style={{ marginLeft: "auto", fontSize: "12px" }}>
                      {mail.datte}
                    </span>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Mails;
