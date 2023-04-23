import React from 'react'
import SearchBar from './SearchBar.jsx';
import Random from './Random.jsx';


const Nav = ({ onSearch, id, setId, onRandom}) => {
  return (
    <div>
        <SearchBar onSearch={onSearch} id={id} setId={setId} />
        <Random onRandom={onRandom}/>
    </div>
  )
}

export default Nav