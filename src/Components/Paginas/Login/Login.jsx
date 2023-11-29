
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Botao from "../../Button/Button";
import ImageLogo from "../../ImageLogo/ImageLogo";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Menu from "../../Menu/Menu";

const Login = () => {

  const navigate = useNavigate();

  const aoEnviar = async (evento) => {
    evento.preventDefault();

    var data = incluir().then((result) => {
      if (result) {
        toast.success("Login efetuado com sucesso.");
        navigate('/home');
      } else {
        toast.error("Ocorreu um erro, tente novamente mais tarde!");
      }
    });
  };

  async function incluir() {
    debugger;

    var user = {
      login: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };

    try {
      debugger;
      const response = await axios.post(`http://localhost:8080/login`, user);

      console.log(user);
      if (response.status != 201) {
        debugger;
        return false;
      } else {
        debugger;
        return response.data;
      }
    } catch (error) {
      debugger;
      return false;
    }
  }

  return (
    <div>
      <Menu />
      <main>
        <Toaster />
        <section className="cadastroPage-container">
          <div className="cadastroPage-content">
            <div className="formulario-container">
              <h2>
                Log<span>IN</span>
              </h2>
              <form action="" onSubmit={aoEnviar}>
                <input id="username" placeholder="Username" />
                <input id="password" type="password" placeholder="Senha: " />
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
    </div>
  );
};

export default Login;