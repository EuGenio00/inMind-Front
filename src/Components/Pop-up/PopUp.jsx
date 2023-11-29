
import "./PopUp.css";
import { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const PopUp = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = async (evento) => {
    evento.preventDefault();
    setModalOpen(true);
  };

  const handleLinkClick = (link) => {
    // Faça algo quando um dos links for clicado
    console.log(`Link clicado: ${link}`);
    // Feche o modal
    setModalOpen(false);
  };

  const handleCloseModal = (evento) => {
    evento.preventDefault();
    setModalOpen(false);
  };

  return (
    <div className="botao-popUp">
      <button onClick={handleButtonClick}>Cadastrar</button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Overflow Popup"
      >
        <div className="popup-content">
          <div className="firstItem-popUp">
            <p>
              Selecione a melhor opção para seguir com seu <span>CADASTRO</span>
              !
            </p>
            <button onClick={handleCloseModal}>X</button>
          </div>

          <div className="secoundItem-popUp">
            <Link to={"/cadastro-psicologo"}>
              <button onClick={() => handleLinkClick("Link 1")}>
                Psicólogo
              </button>
            </Link>

            <Link to={"/cadastro-paciente"}>
              <button onClick={() => handleLinkClick("Link 2")}>
                Paciente
              </button>
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PopUp;
