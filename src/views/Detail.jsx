import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  margin: 0px;
  padding: 0px;
`;
const DetailDiv = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items: center;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.6);
  font-size: 1.8rem;
  color: white;
  
  font-family: "Raleway", sans-serif;
  width: 50%;
`;
const DivImg = styled.div`
  width: 50%;
  height: 100%;
  display: grid;
  place-content:center;
`;

const ImgId = styled.img`
  border-radius: 50%;
  height: 350px;
  width: 350px;
  box-shadow: 2px 2px 15px #48c9b0;
`;

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <DetailContainer>
      <DetailDiv>
        <h1>{character.name}</h1>
        <p>{character.status}</p>
        <p>{character.gender}</p>
        <p>{character.species}</p>
        <p>{character.origin?.name}</p>
      </DetailDiv>
      <DivImg>
        <ImgId src={character.image} alt="" />
      </DivImg>
    </DetailContainer>
  );
};

export default Detail;
