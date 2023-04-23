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

export default function Cards({characters, onClose}) {
   return (
   <DivCards>
      {/* {console.log(props.characters)}
      {props.characters.map((item)=>(
         console.log(item)
      ))} */}
      {characters.map( (character) => (
            <Card key={character.id} name={character.name} status={character.status} gender={character.gender} origin={character.name.origin} image={character.image} onClose={onClose} id={character.id}/>
          ))}
   </DivCards>);
}
