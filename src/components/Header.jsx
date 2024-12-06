import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
import "../assets/styles/Header.scss";
import "../assets/styles/Button.scss";
import logo from "../assets/images/logo.svg";

function Header() {
  return (
    <header>
      <a href="https://www.github.com/erengalipun/">
        <img src={logo} alt="Rick and Morty Logo" />
      </a>
      <nav>
        <Link to="/">
          <button>Main Page</button>
        </Link>
        <Link to="/charpage">
          <button>Characters</button>
        </Link>
        <Link to="/locpage">
          <button>Locations</button>
        </Link>
        <Link to="/epipage">
          <button>Episodes</button>
        </Link>
        <DarkMode />
      </nav>
    </header>
  );
}

export default Header;
