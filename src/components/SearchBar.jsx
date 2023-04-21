import styled from "styled-components";

const DivSearch = styled.div`
   display: flex;
   justify-content: end;
`
const InputSearch = styled.input`
   border-radius: 5px;
   padding: 10px;
   margin: 5px;
`

const ButtonAgregar = styled.button`
   color: #48C9B0;

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

export default function SearchBar(props) {
   return (
      <DivSearch>
         <InputSearch type='search'  placeholder="Busca tu personaje"/>
         <ButtonAgregar onClick={props.onSearch}>Agregar</ButtonAgregar>
      </DivSearch>
   );
}
