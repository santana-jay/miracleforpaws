import React, { useState } from "react";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Nav.js";
import Footer from "./Footer.js";
import About from "./About.js";

const App = () => {
  // const [message, setMessage] = useState("");

  // const fetchMessage = async () => {
  //   const response = await fetch("http://127.0.0.1:8000/");
  //   const data = await response.json();
  //   console.log(data);
  //   setMessage(data.message);
  // };

  // console.log('message: ', message);

  return (
    // <div style={{ textAlign: "center", marginTop: "50px" }}>
    //   <h1>React + FastAPI App</h1>
    //   <button onClick={fetchMessage}>Fetch Message</button>
    //   <p>{message}</p>
    // </div>
    <>
      <Router>
        <Nav />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
