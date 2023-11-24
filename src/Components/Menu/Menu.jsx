import { Link } from "react-router-dom";
import "./Menu.css";
import PopUp from "../Pop-up/PopUp";

const Menu = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo-img">
          <Link to={"/"}>
            <img
              src="public/images/LogoBarraDePesquisa.svg"
              alt="image da logo"
            />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cadastro">Cadastro</Link>
          </li>
          <PopUp />
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
