import "./Formulario.css";
import Botao from "../Button/Button.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import CampoTexto from "../CampoTexto/CampoTexto";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const aoEnviar = (evento) => {
    evento.prevenDefault();
    setNome("");
    setEmail("");
    setSenha("");

    console.log("Carregado!");
  };
  return (
    <div>
      <div className="formulario-container">
        <h2>
          Cadastre-se <span>JÁ</span>!
        </h2>
        <form action="" onSubmit={aoEnviar}>
          <CampoTexto
            eObrigatorio={true}
            placeholder="Seu nome: "
            valor={nome}
            type="text"
            aoAlterar={(valor) => setNome(valor)}
          />
          <CampoTexto
            eObrigatorio={true}
            placeholder="E-mail: "
            valor={email}
            type="email"
            aoAlterar={(valor) => setEmail(valor)}
          />
          <CampoTexto
            eObrigatorio={true}
            placeholder="Senha: "
            valor={senha}
            type="password"
            aoAlterar={(valor) => setSenha(valor)}
          />

          {/* <input type="text" placeholder="Seu nome completo: " />
          
          <input type="password" placeholder="*Senha: " /> */}
          <Botao textoBotao="Criar conta" />
        </form>
        <p>
          Já tem cadastro? Faça seu login{" "}
          <span>
            <Link to="/login">aqui.</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Formulario;
