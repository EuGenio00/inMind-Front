import "../Cadastro.css";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Botao from "../../../Button/Button";
import ImageLogo from "../../../ImageLogo/ImageLogo";

const PacienteCadastro = () => {
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
      id: null,
      name: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      cpf: document.getElementById("numeroCPF").value,
      password: document.getElementById("password").value,
      isAdmin: true,
    };

    try {
      debugger;
      const response = await fetch(`http://localhost:8080/users`, {
        method: "POST",
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log(user);
      if (!response.ok) {
        debugger;
        return false;
      } else {
        debugger;
        return response.ok;
      }
    } catch (error) {
      debugger;
      return false;
    }
  }

  return (
    <main>
      <Toaster />
      <section className="cadastroPage-container">
        <div className="cadastroPage-content">
          <div className="formulario-container">
            <h2>
              Cadastre-se <span>JÁ</span>!
            </h2>
            <form action="" onSubmit={aoEnviar}>
              <input type="text" id="nome" placeholder="Seu nome completo: " />
              <input type="email" id="email" placeholder="E-mail: " />
              <input type="numeroCPF" id="numeroCPF" placeholder="Seu CPF: " />
              <input type="password" id="password" placeholder="*Senha: " />
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

export default PacienteCadastro;
