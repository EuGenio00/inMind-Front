
import axios from "axios";

const Scheduling = () => {


    const Getscheduled = async () => {
        try {    
          const response = await axios.get('Nosso Endepoint');
    
          response.data.success

        } catch (error) {
          console.error('Erro ao receber os dados:', error);
        }
      };

      console.log(Getscheduled)


    return (
        <div className="container-general">

                <span className="out-arrow">
                    <a href="/"><img src="src/assets/seta-esquerda.png" alt="seta" /></a>
                </span>
              <ul className="research-list">
                <li>
                    <div className="card-research">
                      <span className="informations">
                        <input 
                          type="text" 
                          name="nome"
                          placeholder="Nome"
                          value=''
                          onChange=''/>
                          <input 
                            type="text"
                            name="descricao"
                            placeholder="Descrição"
                            value=""
                            onChange=""
                          
                          />
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

export default Scheduling