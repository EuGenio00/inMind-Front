import { Link } from "react-router-dom";
import "./Cadastro.css";
import Botao from "../../Button/Button";
import ImageLogo from "../../ImageLogo/ImageLogo";
import toast, { Toaster } from 'react-hot-toast';

const Cadastro = () => {
  const aoEnviar = async (evento) => {
    evento.preventDefault();
    
    var data = incluir().then((result)=>
    {
      if(result){
        toast.success("Registro cadastrado com sucesso.");
      }else{
        toast.error("Ocorreu um erro, tente novamente mais tarde!");
      }
    })
  };

  async function incluir(){
    debugger;

    var user = {
      "id": null,
      "name": document.getElementById("nome").value,
      "email": document.getElementById("email").value,
      "password": document.getElementById("password").value,
      //"picture": document.getElementById("picture").value,
      "isAdmin": true,
      "address": {
        "street": document.getElementById("street").value,
        "cep": document.getElementById("cep").value,
        "city": document.getElementById("city").value,
        "neighborhood": document.getElementById("neighborhood").value,
        "states": document.getElementById("states").value
      }
    };


    try {
      debugger;
      const response = await fetch(`http://localhost:8080/users`, {
          method: 'POST',
          headers: {
              'accept': '*/*',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
      });

      console.log(user);
      if (!response.ok) {
        debugger;
        return false;
      }else{
        debugger;
        return response.ok;
      }
  } catch (error) {
    debugger;
      return false;
  }

  //Funciona
    // try {
    //   const response = await fetch('http://localhost:8080/users');
    //   if (!response.ok) {
    //       throw new Error('Erro ao fazer a solicitação: ' + response.status);
    //   }
    //   console.log(response)
      
    //   return await response.json();
  
    //   } catch (error) {
    //       console.error('Erro na solicitação:', error);
    //   }
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
              <input type="street" id="street" placeholder="Rua: " />
              <input type="cep" id="cep" placeholder="Cep: " />
              <input type="city" id="city" placeholder="Cidade: " />
              <input type="neighborhood" id="neighborhood" placeholder="Ponto de referência: " />
              <input type="states" id="states" placeholder="Estado: " />
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

export default Cadastro;
