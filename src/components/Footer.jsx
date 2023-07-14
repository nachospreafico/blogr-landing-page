import Logo from "./../assets/images/logo.svg";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} className="footer-logo" alt="Blogr logo"></img>
      <nav className="footer-nav-container">
        <ul className="footer-nav">
          <li>
            <h2 className="list-header">Product</h2>
          </li>
          <li>Overview</li>
          <li>Pricing</li>
          <li>Marketplace</li>
          <li>Features</li>
          <li>Integrations</li>
        </ul>
        <ul className="footer-nav">
          <li>
            <h2 className="list-header">Company</h2>
          </li>
          <li>About</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
        <ul className="footer-nav">
          <li>
            <h2 className="list-header">Connect</h2>
          </li>
          <li>Contact</li>
          <li>Newsletter</li>
          <li>Linkedin</li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
