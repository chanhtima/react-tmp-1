import React from "react";
import Header from "../layout/_header/Header";
import Index from "../page/Index";
import About from "../page/About";
import Products from "../page/Products";
import NewEvent from "../page/NewEvent";
import Contacts from "../page/Contacts";


function index() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Index />;
      break;
      case "/about":
        component = <About />;
        break;
      case "/product":
        component = <Products />;
        break;
      case "/new-events ":
        component = <NewEvent />;
        break;
      case "/contact":
        component = <Contacts />;
        break;
  }
  return (
    <>
      <Header />
      {component}
    </>
  );
}

export default index;
