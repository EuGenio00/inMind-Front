import { Link } from "react-router-dom";
import "./Menu.css";

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
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
