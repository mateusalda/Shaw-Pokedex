import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedexPage, goToHomePage } from "../../routes/coordinates";
import { ContainerHeader, ContainerButtonLeft, ContainerButtonRigth } from './styled';

const Header = ({ title}) => {
  const navigate = useNavigate();

  return (
    <ContainerHeader>
      <ContainerButtonLeft onClick={()=>goToHomePage(navigate)}>
        PokeHome
      </ContainerButtonLeft>

      <h1>{title}</h1>
     

        <ContainerButtonRigth onClick={() => goToPokedexPage(navigate)}>
          Pokedex
        </ContainerButtonRigth>
      
    </ContainerHeader>
  
  )
};

export default Header;