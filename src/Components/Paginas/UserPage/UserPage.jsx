import axios from 'axios';
import './userpage.css'
import { useState, useEffect } from 'react';


const UserPage = () => {

  const [data, setData] = useState ({
    username: '',
    email: '',
    password: '',
    address: '',
    bornDate: '',
    cpf: '',
    crp: '',

  })
  const fetchData = async () => {
    try {
      // eslint-disable-next-line no-undef
      const response = await axios.get(`http://localhost:8080/psychologists/1`);
      setData(response.data); // Partindo da lógica que setando o id do usuário, nos trará todas as informações do mesmo que precisamos
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };


  useEffect(() => {
    fetchData();
  }, []); // Executar novamente o fetch quando o ID mudar

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  
  };

  
  const handleSave = async () => {
    try {
      // eslint-disable-next-line no-undef
      await axios.put(`http://localhost:8080/users${id}`, data);
      console.log('Os dados foram atualizados!');
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
    }
  };

  const handleDelete = () => {
    // Exemplo de requisição DELETE
     // eslint-disable-next-line no-undef
    axios.delete(`http://localhost:8080/users${id}`)
      .then(response => {
        console.log('Dados excluídos com sucesso:', response.data);
        // Aqui você pode tratar a resposta, se necessário
      })
      .catch(error => {
        console.error('Erro na requisição DELETE:', error);
      });
  };



    return (
      <>
        <span className='banner-pages'>
          <img src="src/assets/dermatologia.webp" alt="" />
        </span><div className="container-general">
            <span className="out-arrow">
              <a href="/home"><img src="src/assets/seta-esquerda.png" alt="seta" /></a>
            </span>
            <ul className="research-list userPage">
              <li className="users">
                <div className="card-research">
                  <span className="informations colum-one colum">
                    <label htmlFor="nome">Nome</label>
                    <input
                      type="text"
                      name="nome"
                      placeholder={data.username}
                      value={data.username}
                      onChange={handleInputChange} />
                    <label htmlFor="email">E-mail</label>
                    <input
                      type="text"
                      name="descricao"
                      placeholder={data.email}
                      value={data.email}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="cpf">CPF</label>
                    <input
                      type="text"
                      name={data.cpf}
                      placeholder={data.cpf}
                      value={data.cpf}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="password">Senha</label>
                    <input
                      type="text"
                      name={data.password}
                      placeholder={data.password}
                      value={data.password}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="address">Endereço</label>
                    <input
                      type="text"
                      name={data.address}
                      placeholder={data.address}
                      value={data.address}
                      onChange={handleInputChange}
                    />
                    <button className='editar-atualizar' onClick={handleSave}>Atualizar dados</button>
                  </span>
                  <span className="informations colum-two colum">
                    <div className="photo">
                      <img src='' alt="foto" />
                    </div>
                    <label htmlFor="bornDate">Data Nascimento</label>
                    <input
                      type="text"
                      name={data.bornDate}
                      placeholder={data.bornDate}
                      value={data.bornDate}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="crp">CRP</label>
                    <input
                      type="text"
                      name={data.crp}
                      placeholder={data.crp}
                      value={data.crp}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="telefone">Telefone</label>
                    <input
                      type="text"
                      name={data.telefone}
                      placeholder={data.telefone}
                      value={data.telefone}
                      onChange={handleInputChange}
                    />
                    <button className='excluir-conta' onClick={handleDelete}>Excluir Conta</button>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </> 
      )

}

export default UserPage;
