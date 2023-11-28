import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div className="navbar-profile-element">
      <img
        src="public/images/icons8-user-32.png" // Substitua pelo caminho real da imagem
        alt="Imagem de perfil"
        className="profile-image"
      />
    </div>
  );
};

export default UserProfile;
