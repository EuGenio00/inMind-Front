import axios from 'axios';
import { useState, useEffect } from 'react';
import './PsychologistResearch.css'


const PsychologistResearch = () => {

  const [dados, setDados] = useState ({
    nome: '',
    description: '',
  })
      useEffect(() => {
        try {
          axios.get('http://localhost:8080/psychologists')
          .then(response => {
            const data = response.json();
            setDados({
              nome: data.username,
              description: data.description
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
        </span>
        <div className="container-general">
            <span className="out-arrow">
              <a href="/"><img src="src/assets/seta-esquerda.png" alt="seta" /></a>
            </span>
            <ul className="research-list">
              <li className='PsychologistResearch'>
                <div className="card-research">
                  <span className="informations">
                    <label htmlFor="name">Nome do especialista</label>
                    <input
                      type="text"
                      name={dados.nome}
                      placeholder={dados.nome}
                      value={dados.nome} />
                    <div className='row-2'>
                      <span>
                        <label htmlFor="description">Breve descrição</label>
                        <input
                          type="text"
                          name={dados.description}
                          placeholder={dados.description} />
                      </span>
                      <div className='avalietions'>
                        <img src="src/assets/estrela.png" alt="estrela" />
                        <span className='number-views'></span>
                      </div>
                    </div>
                  </span>
                  <div className="photo">
                    <img src="{dados.imagem}" alt="foto" />
                  </div>
                </div>
              </li>
            </ul>

          </div>
        </>
        
        )

}

export default PsychologistResearch;