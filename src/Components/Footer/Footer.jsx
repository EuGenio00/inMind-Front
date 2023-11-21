import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="content-footer">
        <ul>
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com">
              <img src="public/images/facebook-icon.png" alt="icone Facebook" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com"
            >
              <img
                src="public/images/instagram-icon.png"
                alt="icone Instagram"
              />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.github.com">
              <img src="public/images/github-logo.png" alt="logo gitHub" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
