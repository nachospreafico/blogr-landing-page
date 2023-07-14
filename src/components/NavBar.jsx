import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./styles/NavBar.css";

const NavBar = () => {
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
    <nav className="navbar-container">
      {menus.map((menu, index) => (
        <div className="navbar-menu" key={index}>
          <div className="navbar-header">
            <h2 className="navbar-title" onClick={() => handleClick(index)}>
              {menu.title}{" "}
              {menu.arrowClicked ? (
                <FontAwesomeIcon icon={faChevronUp} color="white" />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} color="white" />
              )}
            </h2>
          </div>
          {menu.isClicked && (
            <div className="navbar-link">
              {menu.links.map((link, linkIndex) => (
                <a key={linkIndex}>{link}</a>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
