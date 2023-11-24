import { useState } from 'react';
import axios from 'axios'
import './AppointmentPsychologist.css'


const AppointmentPsychologist = () => {
    const [showText, setShowText] = useState(true);
    const [photoUrl, setPhotoUrl] = useState('');
    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState({
      name: '',
      age: '',
      description: '',
      appointmentDate: ''
    });

    const handlePhotoClick = () => {
        setShowText(false);
    };

    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
  
      if (selectedFile) {
        setFile(selectedFile);
  
        const reader = new FileReader();
        reader.onloadend = () => {
          setPhotoUrl(reader.result);
        };
  
        reader.readAsDataURL(selectedFile);
      }
    };
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
          uploadData.append('photo', file);
          uploadData.append('name', formData.name);
          uploadData.append('age', formData.age);
          uploadData.append('description', formData.description);
          uploadData.append('appointmentDate', formData.appointmentDate);
    
          const response = await fetch(`http://localhost:8080/`);
    
          if (response.data.success) {
            console.log('agendamento bazou!');
          } else {
            console.error('Falha no agendamento.');
          }
        } catch (error) {
          console.error('Erro ao enviar os dados:', error);
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
                  <label htmlFor="name">Name:</label>
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
                    <>
                    <input type="file" onChange={handleFileChange} className={photoUrl? 'show': ''} />
                    {photoUrl && <img src={photoUrl} alt="Foto" className='showFile' />}
                    </>
                  )} 
                </span>
                <span className="informations">
                <div className='input-description'>
                  <label htmlFor="description">Sobre:</label>
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