import "./SearchBar.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  const quandoPesquisar = async () => {
    debugger;
    try {
      const response = await axios.get(`http://localhost:8080/psychologists`);
      console.log(response.data);
  
      let userFilter = response.data.filter(function(item) {
        return item.username === searchTerm; // Correção: usar a propriedade correta para a comparação
      });
  
      if (userFilter.length > 0) {
        var id = userFilter[0].id;
        navigate('/pesquisar-psicologo', { state: { id: id } });
      } else {
        console.log("Nenhum psicólogo encontrado com esse nome.");
        // Adicione aqui a lógica para lidar com nenhum resultado encontrado
      }
    } catch (error) {
      console.error("Erro ao pesquisar psicólogos:", error);
    }
  };

  useEffect(() => {
    // Simulação de uma chamada à API quando o termo de pesquisa muda
    const fetchData = async () => {
      try {
        const response = await fetch(`URL_DO_BACKEND?name=${searchTerm}`);
        const data = await response.json();
        setSearchResults(data); // Atualiza o estado com os resultados da pesquisa
      } catch (error) {
        console.error("Erro ao buscar dados do back-end:", error);
      }
    };

    if (searchTerm.trim() !== "") {
      fetchData();
    } else {
      setSearchResults([]); // Limpa os resultados se o termo de pesquisa for vazio
    }
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="searchBar-content">
      <input
        type="text"
        placeholder="Pesquisar psicólogo "
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={quandoPesquisar} >pesquisar</button>

      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
