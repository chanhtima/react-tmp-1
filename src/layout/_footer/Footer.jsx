import React from "react";
import ImageLogoW from "../../assets/img/logoW.png";
import IconSocialsF from "../../assets/img/icons/Facebook.svg";
import IconSocialsI from "../../assets/img/icons/Instagram.svg";
import IconSocialsY from "../../assets/img/icons/Youtube.svg";
import IconSocialsE from "../../assets/img/icons/ic_baseline-email.svg";

function Footer() {
  return (
    <footer className="la-footer">
      <div className="container">
        <img src={ImageLogoW} className="la-footer-logo" />
        <div className=" la-footer-text-about">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error nisi
            repellat ab sint vero ex natus eaque impedit, quaerat eveniet
            debitis eos similique sed earum magnam illum pariatur nemo
            laudantium.
          </p>
        </div>
        <div className="la-footer-socials">
          <a href="/">
            <img src={IconSocialsF} alt="IconSocialsF" />
          </a>
          <a href="/">
            <img src={IconSocialsI} alt="IconSocialsI" />
          </a>
          <a href="/">
            <img src={IconSocialsY} alt="IconSocialsY" />
          </a>
          <a href="/">
            <img src={IconSocialsE} alt="IconSocialsE" />
          </a>
        </div>
      </div>
      {/*Copyright   */}
      <div className="la-footer-copyright">
        <p><a href="/privacy">Privacy Policy</a></p>
        <p>Copyright © 2023 All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
