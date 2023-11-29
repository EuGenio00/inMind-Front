
import './PageScheduling.css'
import { useState, useEffect } from 'react';

const Scheduling = () => {

  const [dados, setDados] = useState ({
    username: '',
    dataTime: '',
    imagem: ''
  })
  useEffect(() => {

      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/psychologists/${location.state.id}`);
          const data = response.data;
          setDados({
            username: data.username,
            dataTime: data.dataTime,
            imagem: data.imagem
          });
        } catch (error) {
          console.error('Erro na requisição GET:', error.message);
        }
      };

    fetchData();
  
  }, [])



    return (
      <div className="container-general">

          <span className="out-arrow">
              <a href="/home"><img src="src/assets/seta-esquerda.png" alt="seta" /></a>
          </span>
          <ul className="research-list">
            <li className="Scheduling">
              <div className="card-research">
                <span className="informations">
                  <label htmlFor="nome">{dados.nome}</label>
                  <input 
                    type="text" 
                    name="nome"
                    placeholder="Nome"
                    value=''
                    onChange=''/>
                    <label htmlFor="date">{dados.dataTime}</label>
                    <input 
                      type="text"
                      name="descricao"
                      placeholder="dd/mm/aaaa - 00:00"
                      value=""
                      onChange=""
                    
                    />
                </span>
                <div className="photo">
                  <img src={dados.imagem} alt="foto" />
                </div>
              </div>
            </li>
          </ul>
        </div> 
      )

}

export default Scheduling;
