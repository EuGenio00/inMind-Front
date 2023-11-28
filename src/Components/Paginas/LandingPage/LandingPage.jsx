import "./LandingPage.css";

const LandingPage = () => {
  return (
    <section className="landing-container">
      <div className="content-landing">
        {/* <h3>- Conheça nossos benefícios -</h3> */}
        <div className="landing-descricao">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
            eligendi accusantium asperiores sint, molestiae quisquam dignissimos
            veniam harum numquam est eaque distinctio aut cumque. Deleniti
            cupiditate soluta odit voluptatibus omnis. Et, accusantium libero
            repellat vitae sint harum laborum neque. A nostrum nesciunt, vero
            voluptatibus voluptates aliquam vitae odit facilis excepturi dolorem
            est! Error sit, vel eaque reiciendis nobis repellendus voluptate?
            Architecto fugit vel repellat modi ipsam eligendi eos non aliquam
            deserunt quisquam magnam, accusantium corrupti iure recusandae
            totam, et, asperiores ab perspiciatis. Delectus aliquid fuga vitae
            saepe, iusto dolorem voluptatibus. Magni eligendi dolorem veritatis
            corporis nostrum, nesciunt neque voluptatum? Aperiam dignissimos
            necessitatibus temporibus reiciendis neque cum repudiandae eveniet
            laborum! Nihil harum asperiores iste, repellendus omnis quaerat ex
            excepturi vitae nulla.
          </p>
          <div className="foto-destaque">
            <img
              src="https://plus.unsplash.com/premium_photo-1672292536663-9385abe50163?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Foto destaque"
            />
          </div>
        </div>
        <div className="cards-container">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://hospitalsaomatheus.com.br/blog/sindrome-do-panico-o-que-e-causas-sintomas-e-tratamento/"
          >
            <div className="card">
              <div className="card-image">
                <img
                  src="https://media.istockphoto.com/id/1309798024/pt/foto/close-up-unhappy-woman-suffering-from-strong-headache-and-dizziness.jpg?s=1024x1024&w=is&k=20&c=v6BjA_u2nIwbONwulPEZ0JHK9fRW91j67WafvXFzx0w="
                  alt="Imagem card 1"
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                reiciendis nemo vitae, a dolorum ad recusandae, cumque,
                voluptate similique et molestiae blanditiis explicabo? Eum
                praesentium deleniti cupiditate sapiente recusandae quo.
              </p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://hospitalsantamonica.com.br/depressao-sintomas-tratamento-diagnostico-e-prevencao/"
          >
            <div className="card">
              <div className="card-image">
                <img
                  src="https://images.pexels.com/photos/3209136/pexels-photo-3209136.jpeg"
                  alt="Imagem card 2"
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                reiciendis nemo vitae, a dolorum ad recusandae, cumque,
                voluptate similique et molestiae blanditiis explicabo? Eum
                praesentium deleniti cupiditate sapiente recusandae quo.
              </p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://hospitalsantamonica.com.br/saude-mental/ansiedade/"
          >
            <div className="card">
              <div className="card-image">
                <img
                  src="https://media.istockphoto.com/id/1371458650/pt/foto/studio-shot-of-a-young-woman-experiencing-mental-anguish-and-screaming-against-a-black.jpg?s=1024x1024&w=is&k=20&c=uZbA3idZsuVGloGRtr8EW_8QNLEbrL8SX_csGXjiQ9M="
                  alt="Imagem card 3"
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                reiciendis nemo vitae, a dolorum ad recusandae, cumque,
                voluptate similique et molestiae blanditiis explicabo? Eum
                praesentium deleniti cupiditate sapiente recusandae quo.
              </p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.ufpe.br/agencia/noticias/-/asset_publisher/dlhi8nsrz4hK/content/especialista-do-hc-explica-o-transtorno-afetivo-bipolar-doenca-que-tem-30-de-marco-como-seu-dia-mundial/40615"
          >
            <div className="card">
              <div className="card-image">
                <img
                  src="https://images.pexels.com/photos/6382648/pexels-photo-6382648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Imagem card 4"
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                reiciendis nemo vitae, a dolorum ad recusandae, cumque,
                voluptate similique et molestiae blanditiis explicabo? Eum
                praesentium deleniti cupiditate sapiente recusandae quo.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
