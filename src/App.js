import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters from './data.js';
import styled from 'styled-components';

const DivImgBackground = styled.div`
   background-image: url(https://c.wallhere.com/photos/8d/ca/Rick_and_Morty_space-104692.jpg!d);
   background-repeat: no-repeat;
   background-size: cover;

`

function App() {
   
   return (
      <DivImgBackground className='App'>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters} />
      </DivImgBackground>
   );
}

export default App;
