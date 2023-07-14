import Laptop from "./../assets/images/illustration-laptop-mobile.svg";
import Mobiles from "./../assets/images/illustration-phones.svg";
import "./styles/Features.css";

const Features = () => {
  return (
    <section className="features-container">
      <div className="services-container">
        <img className="mobile-screens" src={Mobiles}></img>
        <div className="services-text-container">
          <h2 className="services-title">State of the Art Infrastructure</h2>
          <p className="services-text">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
      <div className="features">
        <img
          src={Laptop}
          className="laptop-mobile"
          alt="Laptop illustration"
        ></img>
        <h2 className="features-subtitle">Free, open, simple</h2>
        <p className="features-text">
          Blogr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </p>
        <h2 className="features-subtitle">Powerful tooling</h2>
        <p className="features-text">
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </p>
      </div>
    </section>
  );
};

export default Features;
