import React from 'react'
import styled from 'styled-components'

const AboutDiv = styled.div`
   display: grid;
   place-content: center;
`
const AboutP = styled.div`
   font-size: 2rem;
   background-color:  #48C9B0;
   border-radius: 5px;
   border-color: #48C9B0;
   box-shadow: 2px 2px 15px #48C9B0;
   font-family: 'Raleway', sans-serif;
   width: 500px;
   margin-top:80px;
   padding: 30px;
`

const About = () => {
  return (
    <AboutDiv>
      <AboutP>
        Hello, in this application developed in React you can add characters from the Rick and Morty series, using the ids found in the Rick and Morty API. You can choose a number between 1 and 826 and you can also add characters randomly.
      </AboutP>
    </AboutDiv> 

  )
}

export default About