
import './ConsultationPage.css'

const ConsulationPage = () => {


  return (
    <div className="container-general ConsulationPage">

      <div className="research-list">
        <span className="out-arrow">
            <a href="/"><img src="src/assets/seta-esquerda.png" alt="seta" /></a>
        </span>
        <div className="card-research">
          <div className="children">
            <span className="informations">
              <div className='input-agendamento'>
              <label htmlFor="name">Name:</label>
              <input 
                type="text" 
                name="name"
                placeholder="Nome"
                value=''
              />
              <label htmlFor="age">Idade:</label>
              <input
                type="text" 
                name="age"
                placeholder="Idade"
                value=''
              
              />
              </div>
              <div className='foto-consultation'>
                <img src="" alt="foto" />
              </div>
            </span>
            <span className="informations">
            <div className='input-description'>
              <label htmlFor="description">Sobre:</label>
              <textarea
                name="description"
                placeholder="Descrição"
                value=''
              />
            </div>
            <div className="last-bloco">
            <div className='input-appointmentDate'>
              <label >Data Agendamento:</label>
              <input
                type="text" 
                name="appointmentDate"
                placeholder="dd/mm/aaaa"
                value=''
              
              />
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
    
    )

}

export default ConsulationPage;