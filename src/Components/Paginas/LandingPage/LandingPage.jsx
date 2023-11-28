import "./LandingPage.css";

const LandingPage = () => {
  return (
    <section className="landing-container">
      <div className="content-landing">
        {/* <h3>- Conheça nossos benefícios -</h3> */}
        <div className="landing-descricao">
          <p>
            Bem-vindo à nossa plataforma inMind, onde cuidar da sua saúde mental
            é tão simples quanto alguns cliques. Estamos orgulhosos de
            apresentar um ambiente virtual intuitivo e seguro, desenvolvido para
            proporcionar uma experiência sem complicações. Ao criar um perfil,
            você entra em um mundo de possibilidades para o seu bem-estar
            emocional. Navegue por uma lista de psicólogos credenciados,
            explorando suas especializações, disponibilidade e preços. Agende
            consultas de maneira conveniente e realize suas sessões remotas via
            Google Meet, garantindo a flexibilidade que você precisa. Avalie a
            qualidade das sessões e compartilhe suas experiências, contribuindo
            para a transparência e incentivando a melhoria constante dos
            serviços. Seu feedback é crucial para nós, pois acreditamos na
            importância de uma comunidade que cresce junto. Cadastre-se na
            plataforma, fornecendo informações detalhadas sobre suas
            especializações, horários disponíveis e valores. Junte-se a nós na
            jornada em direção ao bem-estar emocional, porque acreditamos que
            todos merecem apoio quando precisam.
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
              <h4>Síndrome do Pânico</h4>
              <p>
                A síndrome ou transtorno do pânico (ansiedade paroxística
                episódica) é uma doença que se caracteriza pela ocorrência
                repentina, inesperada e de certa forma inexplicável de crises de
                ansiedade aguda ...
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
              <h4>Depressão</h4>
              <p>
                A depressão é uma doença mental. Ela é caracterizada por
                alterações na atividade cerebral que levam a um quadro duradouro
                de tristeza ou perda de interesse por atividades corriqueiras.
                Segundo a ...
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
              <h4>Ansiedade</h4>
              <p>
                O Transtorno de ansiedade é um distúrbio psiquiátrico em que há
                excesso de apreensão e expectativa de alguém em relação a
                diversos acontecimentos, que costuma perdurar por mais de seis
                ...
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
              <h4>Transtorno Afetivo Bipolar</h4>
              <p>
                O Transtorno Afetivo Bipolar é caracterizado por períodos em que
                se alternam sintomas do pólo depressivo com aqueles do polo da
                euforia. “Há aqueles períodos caracteriza...
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
