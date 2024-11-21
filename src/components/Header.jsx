import "../assets/styles/Header.scss";
import "../assets/styles/Button.scss";
import logo from "../assets/images/logo.svg";

function Header() {
  return (
    <header>
      <a href="https://www.adultswim.com/videos/rick-and-morty">
        <img src={logo} alt="Rick and Morty Logo" />
      </a>
      <nav>
        <button>Main Page</button>
        <button>Characters</button>
        <button>Locations</button>
        <button>Episodes</button>
      </nav>
    </header>
  );
}

export default Header;
