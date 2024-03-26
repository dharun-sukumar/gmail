import React, { useState, useEffect ,Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from "./components/wrapper/wrapper";
import Starred from "./components/starred/starred";
import Clicked from "./components/clicked/clicked";
import Trash from "./components/trash/trash";
import mailContext from "./context/mailContext";
import axios from "axios";

function App() {

  const [mailCount, setMailCount] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5000/home").then((response) => {
      const filteredMails = response.data.filter(
        (mail) => mail.isDeleted === 0
      );
      setMailCount(filteredMails.length);
    });
  }, []);

  
    return (
      <Fragment>
        <mailContext.Provider value={{mailCount, setMailCount}}>
          <Router>
            <Routes>
              <Route exact path="/" element={<Wrapper />} />
              <Route exact path="/starred" element={<Starred />} />
              <Route exact path="/next-page" element={<Clicked />} />
              <Route exact path="/trash" element={<Trash />} />
            </Routes>
          </Router>
        </mailContext.Provider>
      </Fragment>
    );
}

export default App;
