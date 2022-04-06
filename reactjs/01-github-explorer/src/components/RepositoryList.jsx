import React, { useState, useEffect } from "react";
import RepositoryItem from "./RepositoryItem";

// import { Container } from './styles';

function RepositoryList() {
  const [Repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((resp) => resp.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {Repositories.map((item) => {
          return <RepositoryItem key={item.id} repository={item} />;
        })}
      </ul>
    </section>
  );
}

export default RepositoryList;
