import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div className="navbar-profile-element">
      <a href="/pagina-usuario">
        <img
        src="public/images/icons8-user-32.png" // Substitua pelo caminho real da imagem
        alt="Imagem de perfil"
        className="profile-image"
      /></a>
    </div>
  );
};

export default UserProfile;
