import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <header>
      <nav className="navbar">
        <h2>
          <Link to={"/"}>Logo :D</Link>
        </h2>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cadastro">Cadastre-se</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
