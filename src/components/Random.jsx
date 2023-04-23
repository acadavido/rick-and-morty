import React from 'react';
import styled from "styled-components";

const RandomButton = styled.button`
   color: #48C9B0;

   background-color: black;
   border-radius: 5px;
   border-color: #48C9B0;
   height: 30px;
   width: 100px;
   cursor: pointer;
   margin: 10px;
   &:hover{
      background-color: #48C9B0;
      color: black;
   }

`

const Random = ({onRandom}) => {
  return (
    <div>
        <RandomButton onClick={onRandom}>Add Random</RandomButton>
    </div>
  )
}

export default Random