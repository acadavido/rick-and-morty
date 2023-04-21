import Card from './Card';

export default function Cards(props) {
   return (
   <div>
      {/* {console.log(props.characters)}
      {props.characters.map((item)=>(
         console.log(item)
      ))} */}
      {props.characters.map( (character) => (
            console.log(character),
            <Card key = {character.id} name={character.name} status={character.status} gender={character.gender} origin={character.name.origin} image={character.image}/>
          ))}
   </div>);
}
