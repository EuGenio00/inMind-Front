import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './AppointmentPsychologist.css';

const AppointmentPsychologist = () => {
  const [showText, setShowText] = useState(true);
  const [formData, setFormData] = useState({
    appointmentDate: '',
    name: '',
    age: '',
    description: ''
  });
  const [dados, setDados] = useState({
    username: '',
    description: '',
    imagem: ''
  });

  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/psychologists/1`);
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
  }, []);

  const handlePhotoClick = () => {
    setShowText(false);
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
      uploadData.append('appointmentDate', formData.appointmentDate);

      const response = await fetch(`http://localhost:8080/schedulings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(uploadData)),
      });

      const responseData = await response.json();

      if (responseData.success) {
        console.log('Agendamento realizado com sucesso!');
        return response.ok;
      } else {
        console.error('Falha no agendamento.');
        return false;
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
          <a href="/home"><img src="src/assets/seta-esquerda.png" alt="seta" /></a>
        </span>
        <div className="card-research">
          <div className="children">
            <span className="informations">
              <div className='input-agendamento'>
                <label htmlFor="name">{dados.username}</label>
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
  );
};

export default AppointmentPsychologist;
