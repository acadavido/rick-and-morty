import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import styled from 'styled-components';
import { useState } from 'react';
import axios, {isCancel, AxiosError} from 'axios';




const DivImgBackground = styled.div`
   background-image: url(https://c.wallhere.com/photos/8d/ca/Rick_and_Morty_space-104692.jpg!d);
   background-repeat: no-repeat;
   background-size: cover;
   height: 100%;
`

function App() {
   const [characters, setCharacters]=useState([])
   const [id, setId]=useState('')



   function onSearch(id) {
         const repeat = characters.filter((character)=>character.id==id)
         console.log(repeat)
         if(repeat.length!==0){
            window.alert('¡Ya existe un personaje con este ID!')
            return;
         }
         
  
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {

         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
      
   }

    function onRandom (){
      
      let id = Math.floor(Math.random() * 826) + 1
      onSearch(id);
    }     

   

   function onClose(id) {
      const charactersUpdated = characters.filter((character)=>character.id!==id)
      setCharacters(charactersUpdated)
   }
   return (
      <DivImgBackground className='App'>
         <Nav onSearch={onSearch} id={id} setId={setId} onRandom={onRandom}/>
         <Cards characters={characters} onClose={onClose}/>
      </DivImgBackground>
   );
}

export default App;
