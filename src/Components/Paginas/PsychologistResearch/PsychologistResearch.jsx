
import axios from 'axios'
import './PsychologistResearch.css'

const PsychologistResearch = () => {


    const GetPsychologist = async () => {
        try {    
          const response = await axios.get('Nosso Endepoint');
    
          response.data.success

        } catch (error) {
          console.error('Erro ao receber os dados:', error);
        }
      };

      console.log(GetPsychologist)


    return (
        <div className="container-general">

                <span className="out-arrow">
                    <a href="/"><img src="src/assets/seta-esquerda.png" alt="seta" /></a>
                </span>
              <ul className="research-list">
                <li className='PsychologistResearch'>
                    <div className="card-research">
                      <span className="informations">
                        <input 
                          type="text" 
                          name="nome"
                          placeholder="Nome"
                          value=''
                          onChange=''/>
                        <div className='row-2'>
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
                        <img src="" alt="foto" />
                      </div>
                    </div>
                </li>
              </ul>

        </div>
        
        )

}

export default PsychologistResearch