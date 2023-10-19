import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <header>
      <nav className="top-nav">
        <Link to="/login">Login</Link>
        <Link to="/cadastro">Cadastre-se</Link>
      </nav>
    </header>
  );
};

export default Menu;
