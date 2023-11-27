import CalendarComponent from "../../Calendar/CalendarComponent";
import DrawerComponent from "../../Drawer/DrawerComponent";
import SearchBar from "../../SearchBar/SearchBar";
import UserProfile from "../../UserProfile/UserProfile";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <div>
        <DrawerComponent />
        <SearchBar />
        <UserProfile />
      </div>

      <div>
        <h2>Nossa Home</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
          incidunt sapiente corporis eligendi cupiditate labore fugit
          praesentium at blanditiis possimus explicabo, hic repellat fuga
          laudantium placeat eum quae facere repudiandae?
        </p>
        <CalendarComponent />
      </div>
    </main>
  );
};

export default Home;
