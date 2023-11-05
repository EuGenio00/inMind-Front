import { Link } from "react-router-dom";
import "./Login.css";
import Botao from "../../Button/Button";
import ImageLogo from "../../ImageLogo/ImageLogo";

const Login = () => {
  const aoEnviar = (evento) => {
    evento.preventDefault();
  };

  return (
    <main>
      <section className="cadastroPage-container">
        <div className="cadastroPage-content">
          <div className="formulario-container">
            <h2>
              Log<span>IN</span>
            </h2>
            <form action="" onSubmit={aoEnviar}>
              <input type="email" placeholder="E-mail: " />
              <input type="password" placeholder="*Senha: " />
              <Botao textoBotao="Entrar" />
            </form>
            <p>
              Ainda não é cadastrado? Cadastre-se{" "}
              <span>
                <Link to="/cadastro">aqui.</Link>
              </span>
            </p>
          </div>
          <ImageLogo />
        </div>
      </section>
    </main>
  );
};

export default Login;
