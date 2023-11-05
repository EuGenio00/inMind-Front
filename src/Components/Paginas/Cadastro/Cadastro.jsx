import { Link } from "react-router-dom";
import "./Cadastro.css";
import Botao from "../../Button/Button";
import ImageLogo from "../../ImageLogo/ImageLogo";

const Cadastro = () => {
  const aoEnviar = (evento) => {
    evento.preventDefault();
  };
  return (
    <main>
      <section className="cadastroPage-container">
        <div className="cadastroPage-content">
          <div className="formulario-container">
            <h2>
              Cadastre-se <span>JÁ</span>!
            </h2>
            <form action="" onSubmit={aoEnviar}>
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
          <ImageLogo />
        </div>
      </section>
    </main>
  );
};

export default Cadastro;
