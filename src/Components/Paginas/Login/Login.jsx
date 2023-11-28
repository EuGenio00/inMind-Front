import { Link } from "react-router-dom";
import "./Login.css";
import Botao from "../../Button/Button";
import ImageLogo from "../../ImageLogo/ImageLogo";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Login = ({ onLogin, onError }) => {
  const aoEnviar = (evento) => {
    evento.preventDefault();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Simulação de uma chamada à API para efetuar login
      const response = await fetch(`http://localhost:8080/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        console.log("Login bem-sucedido!", userData);
        // Chama a função de callback passada como prop
        onLogin(userData);
      } else {
        console.error("Erro no login:", response.statusText);
        // Chama a função de callback passada como prop para lidar com o erro
        onError("Nome de usuário ou senha incorretos. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao efetuar login:", error);
      // Chama a função de callback passada como prop para lidar com o erro
      onError("Ocorreu um erro ao efetuar o login. Tente novamente.");
    }
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
              <input
                type="email"
                placeholder="E-mail: "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="*Senha: "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Botao textoBotao="Entrar" onClick={handleLogin} />
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
