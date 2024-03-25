import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from "./components/wrapper/wrapper";
import Starred from "./components/starred/starred";
import Clicked from "./components/clicked/clicked";

// import Clicked from "./components/clicked/clicked";
// import Compose from "./components/compose/compose";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/inbox" element={<Wrapper />} />
           <Route exact path="/starred" element={<Starred />} />
          <Route exact path="/next-page" element={<Clicked />} />
        </Routes>
      </Router>
    );
  }
}

export default App;