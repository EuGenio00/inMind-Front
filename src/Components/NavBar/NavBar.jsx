import DrawerComponent from "../Drawer/DrawerComponent";
import SearchBar from "../SearchBar/SearchBar";
import UserProfile from "../UserProfile/UserProfile";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="container-nav">
      <nav>
        <DrawerComponent />
        <SearchBar />
        <UserProfile />
      </nav>
    </div>
  );
};

export default NavBar;
