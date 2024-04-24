import React from "react";
import * as S from "../../components/Projetos/ProjetosStyle";
import house from "../../assets/img/house.png";
import justly from "../../assets/img/justly.png";
import batman from "../../assets/img/batman.png";
import pokedex from "../../assets/img/pokedex.png";
export default function Projetos() {
  return (
    <S.ContainerProjeto>
      <S.BoxProject>
        <img src={batman} alt="Batman project" />
        <a href="https://github.com/JuGon314/batman-project">
          <button>Ver Projeto</button>
        </a>
      </S.BoxProject>

      <S.BoxProject>
        <img src={justly} alt="Justly" />
        <a href="https://github.com/JuGon314/justly">
          <button>Ver Projeto</button>
        </a>
      </S.BoxProject>

      <S.BoxProject>
        <img src={house} alt="House MD" />
        <a href="https://github.com/JuGon314/house-md-project">
          <button>Ver Projeto</button>
        </a>
      </S.BoxProject>

      <S.BoxProject>
        <img src={pokedex} alt="Pokedex" />
        <a href="https://github.com/JuGon314/pokedex">
          <button>Ver Projeto</button>
        </a>
      </S.BoxProject>
    </S.ContainerProjeto>
  );
}
