import "./Navbar.css";
import { AiFillGithub } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="header">
      <a className="name" href="/">
        <h1 className="header_text_color">Latest News</h1>
      </a>
      <a
        rel="noreferrer"
        href="https://github.com/neetukumari4858/nisway_Assignment"
        target="_blank"
        className="header_text_color"
      >
        <AiFillGithub />
      </a>
    </div>
  );
};
export { Navbar };
