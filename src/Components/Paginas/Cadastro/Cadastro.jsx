import { Link } from "react-router-dom";
import "./Cadastro.css";
import Footer from "../../Footer/Footer";

const Cadastro = () => {
  return (
    <main>
      <div className="cadastroPage-container">
        <div className="formulario-content">
          <h2>
            Cadastre-se <span>JÁ</span>!
          </h2>
          <form action="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            amet vero porro magni recusandae illo, omnis et suscipit odio
            maxime? Enim facilis, quis reiciendis repellat hic dignissimos quo
            obcaecati itaque.
          </form>
          <p>
            Já tem cadastro? Faça seu login{" "}
            <span>
              <Link to="/login">aqui.</Link>
            </span>
          </p>
        </div>
        <div className="logoPrincipal-content">
          <img
            src="public/images/LogoPrincipal.svg"
            alt="Foto da Logo principal"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Cadastro;
