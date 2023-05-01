import React from 'react'
import Cards from '../components/Cards'

const Home = ({characters, onClose}) => {
  return (
    <div>
        <Cards characters={characters} onClose={onClose}/>
    </div>
  )
}

export default Home