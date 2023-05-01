import "./App.css";
import Nav from "./components/Nav";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import Detail from "./views/Detail";
import Form from "./components/Form";
import Bg from "./assets/wallpaperbetter.jpg"


// https://c.wallhere.com/photos/8d/ca/Rick_and_Morty_space-104692.jpg!d
const DivImgBackground = styled.div`
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  min-height:100vh;
  padding-bottom:40px
`;

function App() {
  const [characters, setCharacters] = useState([]);
  const [id, setId] = useState("");
  const [access, setAccess] = useState(false);
  const EMAIL = "andreacadavid98@gmail.com";
  const PASSWORD = "andrea11";
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function login(userData) {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    }
  }
  function logout() {
    setAccess(false);
    navigate("/");
  }
  function onSearch(id) {
    const repeat = characters.filter((character) => character.id === +id);
    console.log(repeat);
    if (repeat.length !== 0) {
      window.alert("¡Ya existe un personaje con este ID!");
      return;
    }

    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function onRandom() {
    let id = Math.floor(Math.random() * 826) + 1;
    onSearch(id);
  }

  function onClose(id) {
    const charactersUpdated = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(charactersUpdated);
  }
  return (
    <DivImgBackground className="App">
      {location.pathname !== "/" && (
        <Nav onSearch={onSearch} id={id} setId={setId} onRandom={onRandom} logout={logout} />
      )}
      <Routes>
        <Route path="/" element={<Form login={login} />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />

        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </DivImgBackground>
  );
}

export default App;
