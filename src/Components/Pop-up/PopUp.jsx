import "./PopUp.css";
import { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const PopUp = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleLinkClick = (link) => {
    // Faça algo quando um dos links for clicado
    console.log(`Link clicado: ${link}`);
    // Feche o modal
    setModalOpen(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Mostrar Pop-up</button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Overflow Popup"
      >
        <div className="popup-content">
          <p>
            Conteúdo do Pop-up com overflow. Adicione bastante texto aqui para
            ver o overflow.
          </p>

          <Link to="/cadastro">
            {" "}
            <button onClick={() => handleLinkClick("Link 1")}>Psicólogo</button>
          </Link>

          <Link to={"/cadastro"}>
            <button onClick={() => handleLinkClick("Link 2")}>Paciente</button>
          </Link>
          <button onClick={handleCloseModal}>X</button>
        </div>
      </Modal>
    </div>
  );
};

export default PopUp;
