import { useState } from 'react';
import axios from 'axios'


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
    
          const response = await axios.post('Nosso Endepoint', uploadData);
    
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
        <div className="container-general">

          <div className="research-list">
            <span className="out-arrow">
                <a href="/"><img src="src/assets/seta-esquerda.png" alt="seta" /></a>
            </span>
            <div className="card-research">
              <div className="children">
                <span className="informations">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Nome"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text" 
                    name="age"
                    placeholder="Idade"
                    value={formData.age}
                    onChange={handleInputChange}
                  
                  />
                  {showText && <p onClick={handlePhotoClick}>Foto</p>}
                  {!showText && (
                    <>
                    <input type="file" onChange={handleFileChange} />
                    {photoUrl && <img src={photoUrl} alt="Foto" />}
                    </>
                  )}
                </span>
                <span className="informations">
                <textarea
                  name="description"
                  placeholder="Descrição"
                  value={formData.description}
                  onChange={handleInputChange}
                />
                <input
                  type="text" 
                  name="appointmentDate"
                  placeholder="(dd/mm/aaaa)"
                  value={formData.appointmentDate}
                  onChange={handleInputChange}
                
                />
                <button onClick={uploadAppointment}>Finalizar o agendamento</button>
                </span>
                  
              </div>
            </div>
          </div>

        </div>
        
        )

}

export default AppointmentPsychologist