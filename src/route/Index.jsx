import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../layout/_header/Header";
import Index from "../page/Index";
import About from "../page/About";
import Products from "../page/Products";
import NewEvent from "../page/NewEvent";
import Contacts from "../page/Contacts";


function index() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/product" element={<Products/>} />
        <Route path="/new-events" element={<NewEvent/>} />
        <Route path="/new-events" element={ <Contacts />} />
      </Routes>
    </Router>
  );
}

export default index;
