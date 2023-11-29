import { useState, useEffect } from 'react';
import './AppointmentPsychologist.css'
import axios from 'axios';


const AppointmentPsychologist = () => {
    const [showText, setShowText] = useState(true);
/*     const [photoUrl, setPhotoUrl] = useState(''); */
    /* const [file, setFile] = useState(null); */
    const [date, setDate] = useState('');
    const [dados, setDados] = useState ({
      nome: '',
      description: '',
    })

    const handlePhotoClick = () => {
        setShowText(false);
    };

    const handleDateChange = (event) => {
      let inputDate = event.target.value;

      inputDate = inputDate.replace(/\D/g, '');

      if (inputDate.length >= 2 && inputDate.length < 4) {
        inputDate = inputDate.slice(0, 2) + '/' + inputDate.slice(2);
      } else if (inputDate.length >= 4 && inputDate.length < 8) {
        inputDate = inputDate.slice(0, 2) + '/' + inputDate.slice(2, 4) + '/' + inputDate.slice(4);
      } else if (inputDate.length >= 8) {
        inputDate = inputDate.slice(0, 2) + '/' + inputDate.slice(2, 4) + '/' + inputDate.slice(4, 8);
      }
      setDate(inputDate);
    }

    useEffect(() => {
      try {
        axios.get('http://localhost:8080/psychologists')
        .then(response => {
          const data = response.json();
          setDados({
            nome: data.username,
            description: data.description,
          });
        })
        .catch(error => {
          console.error('Erro na requisição GET:', error);
        })

      } catch (error) {
        console.error('Erro ao rodar o codigo:', error.message);
      }
    
    }, [])

    const sendDataForBD = () => {

      axios.post('http://localhost:8080/schedulings', { appointmentTime: date })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Erro ao enviar a data de agendamento', error);
      })
    }

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

    return (
      <>
        <span className='banner-pages'>
          <img src="src/assets/dermatologia.webp" alt="" />
        </span><div className="container-general AppointmentPsychologist">

        <div className="research-list">
          <span className="out-arrow">
            <a href="/home"><img src="src/assets/seta-esquerda.png" alt="seta" /></a>
          </span>
          <div className="card-research">
            <div className="children">
              <span className="informations">
                <div className='input-agendamento'>
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    name="name"
                    placeholder={dados.nome}
                    value={dados.nome} />
                </div>
                {showText && <p onClick={handlePhotoClick}>Foto</p>}
                {!showText && (
                  <img src={dados.imagem} alt='imagem' />
                )}
              </span>
              <span className="informations">
                <div className='input-description'>
                  <label htmlFor="description">Sobre</label>
                  <textarea
                    name="description"
                    placeholder={dados.description}
                    value={dados.description} />
                </div>
                <div className='input-appointmentDate'>
                  <label htmlFor="appointmentDate">Data de agendamento:</label>
                  <input
                    type="text"
                    placeholder="DD/MM/AAAA"
                    value={date}
                    onChange={handleDateChange} />
                </div>
                <button onClick={sendDataForBD}>Finalizar o agendamento</button>
              </span>
              <div className='pagamento'><p>Pagamento via <img src='https://lojasbecker.vteximg.com.br/arquivos/pix-icon.png' /></p></div>

            </div>
          </div>
        </div>

        </div>
      </>
        
    )

}

export default AppointmentPsychologist;