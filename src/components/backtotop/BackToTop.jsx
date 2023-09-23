import React, { useState, useEffect } from "react";


function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <a className="co-scroll-to-top" href="#" onClick={scrollToTop}>
          <svg
            className="shadow-xl rounded-full "
            width="30"
            height="30"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="22" cy="22" r="22" fill="#FFf" />
            <path
              d="M27.9209 26.4273L29.2637 25.077L21.7533 17.5742L14.243 25.0846L15.5857 26.4273L21.7533 20.2597L27.9209 26.4273Z"
              fill="#373538"
            />
          </svg>
        </a>
      )}
    </div>
  )
}

export default BackToTop