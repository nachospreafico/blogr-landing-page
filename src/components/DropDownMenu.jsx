import { useState, useEffect } from "react";
import "./styles/DropDownMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const DropDownMenu = () => {
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

  const [menus, setMenus] = useState([
    {
      title: "Product",
      isClicked: false,
      links: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
      arrowClicked: false,
    },
    {
      title: "Company",
      isClicked: false,
      links: ["About", "Team", "Blog", "Careers"],
      arrowClicked: false,
    },
    {
      title: "Connect",
      isClicked: false,
      links: ["Contact", "Newsletter", "Linkedin"],
      arrowClicked: false,
    },
  ]);

  function handleClick(index) {
    const updatedMenus = [...menus];
    const clickedMenu = updatedMenus[index];

    // Toggle the clicked menu
    clickedMenu.isClicked = !clickedMenu.isClicked;
    clickedMenu.arrowClicked = !clickedMenu.arrowClicked;
    // Close other menus
    updatedMenus.forEach((menu, i) => {
      if (i !== index) {
        menu.isClicked = false;
      }
    });

    setMenus(updatedMenus);
  }

  return (
    <>
      {isViewportSmall && (
        <nav className="dropdown-menu-container">
          {menus.map((menu, index) => (
            <div className="dropdown-menu" key={index}>
              <div className="dropdown-header">
                <h2
                  className="dropdown-title"
                  onClick={() => handleClick(index)}
                >
                  {menu.title}{" "}
                  {menu.arrowClicked ? (
                    <FontAwesomeIcon icon={faChevronUp} color="tomato" />
                  ) : (
                    <FontAwesomeIcon icon={faChevronDown} color="tomato" />
                  )}
                </h2>
              </div>
              {menu.isClicked && (
                <div className="dropdown-link">
                  {menu.links.map((link, linkIndex) => (
                    <a key={linkIndex}>{link}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="dropdown-buttons">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Sign Up</button>
          </div>
        </nav>
      )}
    </>
  );
};

export default DropDownMenu;
