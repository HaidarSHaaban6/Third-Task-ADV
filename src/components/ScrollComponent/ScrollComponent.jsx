import "./ScrollComponent.css";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const ScrollComponent = () => {
  const [hidden, setHidden] = useState(true);

  const handleScroll = () => {
    if (window.scrollY >= 900) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`scroll-container d-flex justify-content-center align-items-center position-fixed bg-color-main-theme ${
        hidden ? "d-none" : ""
      }`}
      onClick={scrollToTop}
    >
      <FaArrowUp className="text-light fs-5" />
    </div>
  );
};

export default ScrollComponent;
