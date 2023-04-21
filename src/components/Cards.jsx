import Card from './Card';
import styled from 'styled-components';

const DivCards = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   width: 80%;
   margin: auto;
`

export default function Cards(props) {
   return (
   <DivCards>
      {/* {console.log(props.characters)}
      {props.characters.map((item)=>(
         console.log(item)
      ))} */}
      {props.characters.map( (character) => (
            console.log(character),
            <Card key = {character.id} name={character.name} status={character.status} gender={character.gender} origin={character.name.origin} image={character.image}/>
          ))}
   </DivCards>);
}
