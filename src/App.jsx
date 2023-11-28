import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Paginas/Home/Home";
import Menu from "./Components/Menu/Menu";
import Login from "./Components/Paginas/Login/Login";
import AppointmentPsychologist from "./Components/Paginas/AppointmentPsychologist/AppointmentPsychologist";
import PsychologistResearch from "./Components/Paginas/PsychologistResearch/PsychologistResearch";
import Scheduling from "./Components/Paginas/PageScheduling/PageScheduling";
import ConsulationPage from "./Components/Paginas/ConsultationPage/ConsultationPage";
import PacienteCadastro from "./Components/Paginas/Cadastro/PacienteCadastro/PacienteCadastro";
import PsicologoCadastro from "./Components/Paginas/Cadastro/PsicologoCadastro/PsicologoCadastro";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <div className="container">
          <Routes>
            <Route>
              <Route path="/" element={<Layout />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro-paciente" element={<PacienteCadastro />} />
              <Route
                path="/cadastro-psicologo"
                element={<PsicologoCadastro />}
              />
              <Route
                path="/agendamento"
                element={<AppointmentPsychologist />}
              />
              <Route
                path="/pesquisar-psicologo"
                element={<PsychologistResearch />}
              />
              <Route path="/agendados" element={<Scheduling />} />
              <Route path="/consulta-aceita" element={<ConsulationPage />} />
            </Route>
            <Route path="*" element={<div>Página não encontrada </div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
