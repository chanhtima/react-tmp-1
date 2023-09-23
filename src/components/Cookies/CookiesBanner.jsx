import React, { useState } from "react";

function CookiesBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
  };

  const handleDeny = () => {
    setIsVisible(false);
  };

  return (
    <div className={`cookies-wrapper ${isVisible ? "" : "hidden d-none"}`}>
      <p className="cookies-text">
        <span>
          เว็บไซต์นี้มีการจัดเก็บคุกกี้เพื่อเพิ่มประสิทธิภาพในการใช้งานเว็บไซต์ของท่านให้ดียิ่งขึ้น และเพื่อให้ท่านได้รับการบริการที่ดีที่สุด กรุณากดยอมรับเพื่อยินยอมให้เราใช้คุกกี้
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem nulla impedit eos corrupti modi corporis reiciendis sit vel mollitia aspernatur ratione explicabo, ad iusto eum quaerat facere nesciunt fugit laborum?
        </span>
        <a href="/privacy">
          <u>Privacy Policy</u>
        </a>
      </p>
      <div className="cookies-action">
        <div className="cookies-accept" onClick={handleAccept}>
          ยอมรับ
        </div>
        <div className="cookies-denied" onClick={handleDeny}>
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1.26624 0.939209L12.6121 12.2852" stroke="black" />
            <path d="M1.26611 12.2852L12.6121 0.939331" stroke="black" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CookiesBanner;
