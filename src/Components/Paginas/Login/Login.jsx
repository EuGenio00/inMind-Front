import { Link } from "react-router-dom";
import "./Login.css";
import Botao from "../../Button/Button";
import ImageLogo from "../../ImageLogo/ImageLogo";

const Login = () => {

  const aoEnviar = async (evento) => {
    evento.preventDefault();

    var data = incluir().then((result) => {
      if (result) {
        toast.success("Registro cadastrado com sucesso.");
      } else {
        toast.error("Ocorreu um erro, tente novamente mais tarde!");
      }
    });
  };

  async function incluir() {
    debugger;

    var user = {
      login: document.getElementById("nome").value,
      email: document.getElementById("email").value,
    };

    try {
      debugger;
      const response = await axios.post(`http://localhost:8080/patients`, user);

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
