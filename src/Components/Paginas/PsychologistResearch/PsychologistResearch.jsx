
import { useState, useEffect } from 'react';
import './PsychologistResearch.css'

const PsychologistResearch = () => {

      const [dados, setDados] = useState ({
        nome: '',
        description: '',
        imagem: ''
      })
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch ('http://localhost:');
            
            if (!response.ok) {
              throw new Error('Algo deu errado com o Get')
            }
  
            const data = await response.json();
  
            setDados({
              nome: data.nome,
              description: data.description,
              imagem: data.img
            });
          } catch (error) {
            console.error('Erro ao obter os dados (na requisiçãp):', error.message);
          }
        }
  
        fetchData();
      
      }, [])


    return (
        <div className="container-general">

                <span className="out-arrow">
                    <a href="/"><img src="src/assets/seta-esquerda.png" alt="seta" /></a>
                </span>
              <ul className="research-list">
                <li className='PsychologistResearch'>
                    <div className="card-research">
                      <span className="informations">
                        <label htmlFor="name">{dados.nome}</label>
                        <input 
                          type="text" 
                          name="nome"
                          placeholder="Nome"
                          value=''
                          onChange=''
                        />
                        <div className='row-2'>
                        <label htmlFor="description">{dados.description}</label>
                          <input 
                            type="text"
                            name="descricao"
                            placeholder="Descrição"
                            value=""
                            onChange=""
                          
                          />
                          <div className='avalietions'>
                            <img src="src/assets/estrela.png" alt="estrela" />
                            <span className='number-views'></span>
                          </div>
                        </div>
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

export default PsychologistResearch;