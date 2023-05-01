import React from 'react'
import SearchBar from './SearchBar.jsx';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBarDiv = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   background-color: black;
   border-radius: 5px;
   border-color: #48C9B0;
   box-shadow: 2px 2px 15px #48C9B0;
   margin-bottom: 30px;
`

const LinkHome = styled(Link)`
  color: #48C9B0;
  font-family: 'Raleway', sans-serif;
  border-radius: 5px;
  justify-content: center;
  cursor: pointer;
  margin: 10px;
  text-decoration: none;
  &:hover{
    transform: scale(1.1);
  }
`
const LinkAbout = styled(Link)`
   color: #48C9B0;
   font-family: 'Raleway', sans-serif;
   border-radius: 5px;
   justify-content: center;
   cursor: pointer;
   margin: 10px;
   text-decoration: none;
   &:hover{
    transform: scale(1.1);
   }
`
const ButtonLogOut = styled.button`
   color: #48C9B0;
   font-family: 'Raleway', sans-serif;
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

const Nav = ({ onSearch, id, setId, onRandom, logout}) => {
  return (
    <NavBarDiv>
        <LinkHome to="/home">Home</LinkHome>
        <LinkAbout to="/about">About</LinkAbout>
        <SearchBar onSearch={onSearch} id={id} setId={setId} onRandom={onRandom} />

        <ButtonLogOut onClick={logout}>Log Out</ButtonLogOut>
    </NavBarDiv>
  )
}

export default Nav