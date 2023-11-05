import { Link } from "react-router-dom";
import "./Cadastro.css";
// import Footer from "../../Footer/Footer";
import Botao from "../../Button/Button";

const Cadastro = () => {
  return (
    <main>
      <section className="cadastroPage-container">
        <div className="cadastroPage-content">
          <div className="formulario-container">
            <h2>
              Cadastre-se <span>JÁ</span>!
            </h2>
            <form action="">
              <input type="text" placeholder="Seu nome completo: " />
              <input type="email" placeholder="E-mail: " />
              <input type="password" placeholder="*Senha: " />
              <Botao textoBotao="Criar conta" />
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
      </section>
      {/* <Footer /> */}
    </main>
  );
};

export default Cadastro;
