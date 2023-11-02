import "./Card.css";

const Card = (props) => {
  console.log(props);
  return (
    <div className="cards-container">
      <a href={this.props.linkCards}>
        <div className="card">
          <div className="card-image">
            <img src={this.props.fotoCard} alt={this.props.legendaFotoCard} />
          </div>
          <p>{this.props.textoCard}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
