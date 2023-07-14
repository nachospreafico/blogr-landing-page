import { useState, useEffect } from "react";
import Logo from "./../assets/images/logo.svg";
import DropDownMenu from "./DropDownMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "./styles/Header.css";
import NavBar from "./NavBar";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isViewportSmall, setIsViewportSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsViewportSmall(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <div className="upper-header">
        <div className="logo-burger-container">
          <a href="#">
            <img className="header-logo" src={Logo} alt="Blogr Logo"></img>
          </a>
          {isViewportSmall && (
            <FontAwesomeIcon
              icon={isClicked ? faX : faBars}
              className="burger-icon"
              size="xl"
              color="white"
              onClick={() => setIsClicked(!isClicked)}
            />
          )}
        </div>
        {isClicked && <DropDownMenu />}
        {!isViewportSmall && <NavBar />}
        {!isViewportSmall && (
          <div className="dropdown-buttons">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Sign Up</button>
          </div>
        )}
      </div>
      <div className="header-content">
        <h2 className="header-title">A modern publishing platform</h2>
        <h4 className="header-subtitle">
          Grow your audience and build your online brand
        </h4>
      </div>
      <div className="header-links">
        <button className="start-btn">Start for Free</button>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </header>
  );
};

export default Header;
