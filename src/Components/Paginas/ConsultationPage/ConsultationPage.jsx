import { useState, useEffect } from 'react';
import './ConsultationPage.css'
import axios from 'axios';

const ConsulationPage = () => {
  const [dados, setDados] = useState ({
    nome: '',
    description: '',
    dataConsulta: '',
  })

  useEffect(() => {
    try {
      axios.get('http://localhost:8080/psychologists')
      .then(response => {
        const data = response.json();
        setDados({
          nome: data.username,
          description: data.description,
          dataConsulta: data.appointmentTime
        });
      })
      .catch(error => {
        console.error('Erro na requisição GET:', error);
      })

    } catch (error) {
      console.error('Erro ao rodar o codigo:', error.message);
    }
  
  }, [])

  return (
    <>
      <span className='banner-pages'>
        <img src="src/assets/dermatologia.webp" alt="" />
      </span><div className="container-general ConsulationPage">

      <div className="research-list">
        <span className="out-arrow">
          <a href="/"><img src="src/assets/seta-esquerda.png" alt="seta" /></a>
        </span>
        <div className="card-research">
          <div className="children">
            <span className="informations">
              <div className='input-agendamento'>
                <label htmlFor="name">Nome da Psicóloga:</label>
                <input
                  type="text"
                  name="name"
                  placeholder={dados.nome}
                  value={dados.nome} />
              </div>
              <div className='foto-consultation'>
                <img src="" alt="foto" />
              </div>
            </span>
            <span className="informations">
              <div className='input-description'>
                <label htmlFor="description">Sobre a consulta:</label>
                <textarea
                  name="description"
                  placeholder={dados.description}
                  value={dados.description} />
              </div>
              <div className="last-bloco">
                <div className='input-appointmentDate'>
                  <label>Data Agendamento:</label>
                  <input
                    type="text"
                    name="appointmentDate"
                    placeholder={dados.dataConsulta == null ? 'DD/MM/AAAA' : dados.dataConsulta}
                    value={dados.dataConsulta} />
                </div>
                <div className="link-consulta">
                  <label htmlFor="">Link da Consulta:</label>
                  <a href="/" target="_blank">https://site.com</a>
                </div>
              </div>
            </span>

          </div>
        </div>
      </div>

      </div>
    </>
    
    )

}

export default ConsulationPage;