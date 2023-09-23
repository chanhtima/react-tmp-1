import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../layout/_header/Header";
import Footer from "../layout/_footer/Footer";
import Index from "../page/Index";
import About from "../page/About";
import Products from "../page/Products";
import NewEvent from "../page/NewEvent";
import Contacts from "../page/Contacts";
import ProudtcDetails from "../page/ProudtcDetails";
import NewEventDetails from "../page/NewEventDetails";
import PrivacyPolicy from "../page/PrivacyPolicy";
import BackToTop from "../components/backtotop/BackToTop";
import CookiesBanner from "../components/Cookies/CookiesBanner";

function index() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/new-events" element={<NewEvent />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/product/:id" element={<ProudtcDetails />} />
        <Route path="/new-event-details" element={<NewEventDetails />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <CookiesBanner/>
      <BackToTop/>
      <Footer />
    </Router>
  );
}

export default index;
