import { useState, useEffect } from 'react';
import './AppointmentPsychologist.css'


const AppointmentPsychologist = () => {
    const [showText, setShowText] = useState(true);
/*     const [photoUrl, setPhotoUrl] = useState(''); */
    /* const [file, setFile] = useState(null); */
    const [formData, setFormData] = useState({
      appointmentDate: ''
    });
    const [dados, setDados] = useState ({
      nome: '',
      description: '',
      imagem: ''
    })

    const handlePhotoClick = () => {
        setShowText(false);
    };

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

/*     const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
  
      if (selectedFile) {
        setFile(selectedFile);
  
        const reader = new FileReader();
        reader.onloadend = () => {
          setPhotoUrl(reader.result);
        };
  
        reader.readAsDataURL(selectedFile);
      }
    }; */
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    const uploadAppointment = async () => {
      try {
        const uploadData = new FormData();
        uploadData.append('appointmentDate', formData.appointmentDate);
  
        const response = await fetch(`http://localhost:8080/schedulings`, {
          method: 'POST',
          headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(),
        });
  
        if (response.data.success) {
          console.log('agendamento bazou!');
          return response.ok;
        } else {
          console.error('Falha no agendamento.');
          return false
        }
      } catch (error) {
        console.error('Erro ao enviar os dados:', error);
        return false;
      }
    };


    return (
        <div className="container-general AppointmentPsychologist">

          <div className="research-list">
            <span className="out-arrow">
                <a href="/"><img src="src/assets/seta-esquerda.png" alt="seta" /></a>
            </span>
            <div className="card-research">
              <div className="children">
                <span className="informations">
                  <div className='input-agendamento'>
                  <label htmlFor="name">{dados.nome}</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Nome"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="age">Idade:</label>
                  <input
                    type="text" 
                    name="age"
                    placeholder="Idade"
                    value={formData.age}
                    onChange={handleInputChange}
                  
                  />
                  </div>
                  {showText && <p onClick={handlePhotoClick}>Foto</p>}
                  {!showText && (
                    <img src={dados.imagem} alt='imagem' />
                  )}
                </span>
                <span className="informations">
                <div className='input-description'>
                  <label htmlFor="description">{dados.description}</label>
                  <textarea
                    name="description"
                    placeholder="Descrição"
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='input-appointmentDate'>
                  <label htmlFor="appointmentDate">Data de agendamento:</label>
                  <input
                    type="text" 
                    name="appointmentDate"
                    placeholder="dd/mm/aaaa"
                    value={formData.appointmentDate}
                    onChange={handleInputChange}
                  
                  />
                </div>
                <button onClick={uploadAppointment}>Finalizar o agendamento</button>
                </span>
                  
              </div>
            </div>
          </div>

        </div>
        
        )

}

export default AppointmentPsychologist