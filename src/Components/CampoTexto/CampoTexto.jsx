import "./CampoTexto.css";

const CampoTexto = (props) => {
  const aoDigitar = (evento) => {
    props.aoAlterar(evento.target.value);
  };

  return (
    <div className="formulario-container">
      <input
        value={props.valor}
        onChange={aoDigitar}
        required={props.eObrigatorio}
        // type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default CampoTexto;
