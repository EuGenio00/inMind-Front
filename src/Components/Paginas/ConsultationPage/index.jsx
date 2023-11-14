

const ConsulationPage = () => {


    return (
        <div className="container-general">

          <div className="research-list">
            <span className="out-arrow">
                <a href="/"><img src="inMind-Front/src/assets/seta-esquerda.png" alt="seta" /></a>
            </span>
            <div className="card-research">
              <div className="children">
                <span className="informations">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Nome"
                    value="{formData.name}"

                  />
                  <input
                    type="text" 
                    name="age"
                    placeholder="Idade"
                    value="{formData.age}"
                  
                  />
                    {"photoUrl" && <img src="{photoUrl}" alt="Foto" />}

                </span>
                <span className="informations">
                <textarea
                  name="description"
                  placeholder="Descrição"
                  value="{formData.description}"

                />
                <input
                  type="text" 
                  name="appointmentDate"
                  placeholder="(dd/mm/aaaa)"
                  value="{formData.appointmentDate}"

                
                />

                </span>
                  
              </div>
            </div>
          </div>

        </div>
        
        )

}

export default ConsulationPage;