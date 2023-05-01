import React, { useState } from "react";
import styled from "styled-components";
import image from "../assets/rick-and-morty.jpg"

const DivStyled = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 10px;
  border-color: #48c9b0;
  box-shadow: 2px 2px 15px #48c9b0;
  width: 400px;
  margin: auto;
  padding: 20px;
`;
const Image = styled.img`
  border-radius: 50%;
  height: 250px;
  width: 250px;
  box-shadow: 2px 2px 15px #48c9b0;
  margin-bottom: 15px;
`;
const Label = styled.label`
  color: #48c9b0;
  font-family: "Raleway", sans-serif;
  font-size: 15px;
  justify-content: center;
  margin: 8px;
`;
const Input = styled.input`
  cursor: pointer;
  margin: 2px;
  padding: 2px;
  border-radius: 5px;
  &:hover {
    background-color: #48c9b0;
    color: black;
  }
`;
const Span = styled.span`
  color: red;
  font-family: "Raleway", sans-serif;
  font-size: 15px;
  justify-content: center;
  margin: 10px;
`;
const ButtonSubmit = styled.button`
  color: #48c9b0;
  font-family: "Raleway", sans-serif;
  font-size: 15px;
  background-color: black;
  border-radius: 5px;
  border-color: #48c9b0;
  height: 30px;
  width: 100px;
  cursor: pointer;
  margin: 10px;
  &:hover {
    background-color: #48c9b0;
    color: black;
  }
`;

const validate = (userData) => {
    const errorsObj = {}
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)===false && userData.email) {
    errorsObj.email= "Invalid email";
  }
  if (/^(?=.*\d).{6,10}$/.test(userData.password)===false  && userData.password){
    errorsObj.password= "The password must be between 6 to 10 characters and must contain at least one number";
  }
  return errorsObj;
}


const Form = ({login}) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [property]: value });
    setErrors(validate({ ...userData, [property]: value}))
  };

  const submitHandler = e => {
    e.preventDefault();
    login(userData)
  }

  return (
    <DivStyled>
      <FormStyled  onSubmit={submitHandler}>
        <Image
          src={image}
          alt="rick-and-morty"
        />
        <Label htmlFor="email">Email: </Label>
        <Input
          type="email"
          name="email"
          onChange={handleChange}
          value={userData.email}
        />
        <Span>{errors.email}</Span>

        <Label htmlFor="password">Password: </Label>
        <Input
          type="password"
          name="password"
          onChange={handleChange}
          value={userData.password}
        />
        <Span>{errors.password}</Span>

        <ButtonSubmit type="submit">
          Submit
        </ButtonSubmit>
      </FormStyled>
    </DivStyled>
  );
};

export default Form;
