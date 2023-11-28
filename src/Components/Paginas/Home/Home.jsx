
import CalendarComponent from "../../Calendar/CalendarComponent";
import NavBar from "../../NavBar/NavBar";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <NavBar />
      <main>
        <div>
          <CalendarComponent />
        </div>
      </main>
    </div>
  );
};

export default Home;