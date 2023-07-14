import { useState } from "react";

import "./styles/DropDownMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const DropDownMenu = () => {
  const [menus, setMenus] = useState([
    {
      title: "Product",
      isClicked: false,
      links: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
    },
    {
      title: "Company",
      isClicked: false,
      links: ["About", "Team", "Blog", "Careers"],
    },
    {
      title: "Connect",
      isClicked: false,
      links: ["Contact", "Newsletter", "Linkedin"],
    },
  ]);

  function handleClick(index) {
    const updatedMenus = [...menus];
    updatedMenus[index].isClicked = !updatedMenus[index].isClicked;
    setMenus(updatedMenus);
  }

  return (
    <>
      <nav className="dropdown-menu-container">
        {menus.map((menu, index) => (
          <div className="dropdown-menu" key={index}>
            <div className="dropdown-header">
              <h2 className="dropdown-title" onClick={() => handleClick(index)}>
                {menu.title}{" "}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  color="rgb(255, 137, 111)"
                />
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
    </>
  );
};

export default DropDownMenu;
