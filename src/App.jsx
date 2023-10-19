import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Paginas/Home/Home";
import Menu from "./Components/Menu/Menu";
import Login from "./Components/Paginas/Login/Login";
import Cadastro from "./Components/Paginas/Cadastro/Cadastro";

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
              <Route path="/cadastro" element={<Cadastro />} />
            </Route>
            <Route path="*" element={<div>Página não encontrada </div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
