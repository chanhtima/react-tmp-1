import React from "react";
import HambergerMenu from "../../components/menu/HambergerMenu";
import HorizontalMenu from "../../components/menu/HorizontalMenu";
import { DataMenu } from "../../data/DataMenu";
import ImageLogo from "../../assets/img/logoB.svg";

function Header() {
  const dataLi = DataMenu.map((item) => {
    return <HorizontalMenu key={item.id} name={item.name} url={item.url} />;
  });
  return (
    <div className="la-header">
      <div className="navbar">
        <div className="navbar-start">
          <a href="/">
            <img src={ImageLogo} alt="logo" className=" w-28" />
          </a>
        </div>
        <div className=" navbar-center">
          <div className="hidden lg:flex">{dataLi}</div>
        </div>
        <div className=" navbar-end flex items-center">
          <p className="font-semibold text-14 pr-2 lg:p-0">
            TH <>|</> <span className=" text-slate-400">EN</span>
          </p>
          <div className="lg:hidden ">
            <HambergerMenu items={DataMenu} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
