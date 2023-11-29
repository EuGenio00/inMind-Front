import axios from 'axios';
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
      <>
        <span className='banner-pages'>
          <img src="src/assets/dermatologia.webp" alt="" />
        </span><div className="container-general">
            <span className="out-arrow">
              <a href="/home"><img src="src/assets/seta-esquerda.png" alt="seta" /></a>
            </span>
            <ul className="research-list">
              <li className="Scheduling">
                <div className="card-research">
                  <span className="informations">
                    <label htmlFor="nome">nome</label>
                    <input
                      type="text"
                      name="nome"
                      placeholder={dados.nome}
                      value={dados.nome} />
                    <label htmlFor="date">Data agendamento</label>
                    <input
                      type="text"
                      name="descricao"
                      placeholder={dados.dataConsulta == null ? 'DD/MM/AAAA' : dados.dataConsulta}
                      value={dados.dataConsulta} />
                  </span>
                  <div className="photo">
                    <img src='' alt="foto" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </> 
      )

}


export default Scheduling;
