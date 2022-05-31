import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import About from "../pages/About";
import NotMatch from "../pages/NotMatch";

const TodoContainer = () => {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="*" element={<NotMatch />}/>
      </Routes>
    </>
  );
};

export default TodoContainer;
