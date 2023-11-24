import "./PopUp.css";
import { useState } from "react";
import Modal from "react-modal";

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
          <button onClick={() => handleLinkClick("Link 1")}>Link 1</button>
          <button onClick={() => handleLinkClick("Link 2")}>Link 2</button>
          <button onClick={handleCloseModal}>Fechar Pop-up</button>
        </div>
      </Modal>
    </div>
  );
};

export default PopUp;
