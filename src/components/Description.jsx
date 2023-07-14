import { useState, useEffect } from "react";
import EditorImage from "./../assets/images/illustration-editor-mobile.svg";
import "./styles/Description.css";

const Description = () => {
  const [isViewportSmall, setIsViewportSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        setIsViewportSmall(window.innerWidth < 768);
      }, 200);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="description-container" id="Description">
      <h2 className="description-subtitle">Designed for the future</h2>
      <img src={EditorImage} alt="Mobile Editor" className="img-editor" />
      <h2 className="description-subtitle">Introducing an extensible editor</h2>
      <p className="description-text">
        Blogr features an exceedingly intuitive interface which lets you focus
        on one thing: creating content. The editor supports management of
        multiple blogs and allows easy manipulation of embeds such as images,
        videos, and Markdown. Extensibility with plugins and themes provide easy
        ways to add functionality or change the looks of a blog.
      </p>
      <h2 className="description-subtitle">Robust content management</h2>
      <p className="description-text">
        Flexible content management enables users to easily move through posts.
        Increase the usability of your blog by adding customized categories,
        sections, format, or flow. With this functionality, you’re in full
        control.
      </p>
    </section>
  );
};

export default Description;
