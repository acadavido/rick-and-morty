import styled from "styled-components";


const DivCard = styled.div`
   font-family: 'Raleway', sans-serif;
   display: flex;
   flex-direction: column;
   width: 300px;
   margin: 10px;
   border-radius:15px;
   overflow: hidden;
   box-shadow: 2px 2px 15px #48C9B0;
   transition: transform .2s;
   &:hover{
      transform: scale(1.05);
   };
   
`
const DivImg = styled.div`
   display:inline-block;
   position:relative;
   object-fit:cover;
`
const ButtonX = styled.button`
   position: absolute;
   right: 8px;
   top: 8px;
   color: #48C9B0;
   font-weight: bold;
   font-size: 1rem;
   background-color: black;
   border-radius: 20%;
   width: 30px;
   height: 30px;
   cursor: pointer;
   &:hover{
      color: black;
      background-color: #48C9B0;
   }
`
const H2Name = styled.h2`
   position: absolute;
   left:50px;
   bottom:2px;
   background-color: black;
   width: 200px;
   padding-bottom: 5px;
   border-radius: 5px;
   color: #48C9B0;
   font-size: 1.2rem;
   
`
const H2Property = styled.h2`
   color: #48C9B0;
   font-size: 1rem;
   
`

const DivInfo = styled.div`
   display: flex;
   justify-content: space-between;
   background-color: black;
   padding: 0 30px;
`

export default function Card({onClose, image, name, status, gender, id}) {
   return (
      <DivCard>
         <DivImg>
            <ButtonX onClick={()=>onClose(id)}>X</ButtonX>
            <img src={image} alt='' />
            <H2Name>{name}</H2Name>
         </DivImg>
         <DivInfo>
            <H2Property>{status}</H2Property>
            {/* <H2Property>{props.species}</H2Property> */}
            <H2Property>{gender}</H2Property>
            {/* <H2Property>{props.name.origin}</H2Property> */}
         </DivInfo>
      </DivCard>
   );
}
