import "./SearchBar.css";
import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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

      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
