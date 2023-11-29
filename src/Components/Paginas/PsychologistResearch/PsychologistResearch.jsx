import axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './PsychologistResearch.css';

const PsychologistResearch = () => {
  const [dados, setDados] = useState({
    username: '',
    description: '',
    imagem: ''
  });

  const location = useLocation();
  const navigate = useNavigate();

const navigator = () =>{
  navigate('/agendamento')
}


useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/psychologists/${location.state.id}`);
        const data = response.data;
        setDados({
          username: data.username,
          description: data.description,
          imagem: data.imagem
        });
      } catch (error) {
        console.error('Erro na requisição GET:', error.message);
      }
    };

    fetchData();
  }, [location.state.id]);
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
                  name="name" // Correção: atribuir um nome fixo ao campo
                  placeholder={dados.username}
                  value={dados.username} />
                <div className='row-2'>
                  <span>
                    <label htmlFor="description">Breve descrição</label>
                    <input
                      type="text"
                      name="description" // Correção: atribuir um nome fixo ao campo
                      placeholder={dados.description}
                      value="isso e um descrição"
                      />
                  </span>
                  <div className='avalietions'>
                    <img src="src/assets/estrela.png" alt="estrela" />
                    <span className='number-views'></span>
                  </div>
                </div>
              </span>
              <div className="photo">
                <img src={dados.imagem} alt="foto" /> {/* Correção: Removendo as chaves desnecessárias */}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default PsychologistResearch;