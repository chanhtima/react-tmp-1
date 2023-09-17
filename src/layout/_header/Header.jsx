import React from "react";
import HambergerMenu from "../../components/menu/HambergerMenu";
import HorizontalMenu from "../../components/menu/HorizontalMenu";
import { DataMenu } from "../../data/DataMenu";

function Header() {
  const dataLi = DataMenu.map((item) => {
    return <HorizontalMenu key={item.id} name={item.name} url={item.url} />;
  });
  return (
    <div className="la-header">
      <div className="navbar">
        <div className="navbar-start">
          <a className=" la-header-logo" href="/">daisyUI</a>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:flex">{dataLi}</div>
          <div className="lg:hidden ">
            <HambergerMenu items={DataMenu} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
