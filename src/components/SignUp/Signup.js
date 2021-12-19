// rafce
import React, {useState} from 'react';
import styled from 'styled-components';



const StyledFormWrapper = styled.div`
position: absolute; 
   left: 800px;
   top:100px;
   width: 400px;
   padding-top: 20px;
  margin-right: 600px;
  height: 500px;
  background-color: brown;
  color: white;

`;

const StyledForm = styled.form`
height: 400px;
  width: 400px;
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  justify-content: center;
`;

const StyledInput = styled.input`
 padding: 20px;
  border-radius: 3px;
  /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.137); */
  margin-bottom: 20px;
  border: 1px solid lightgray;
  /* border: none; */
  background: #fff;
  font-size: 16px;
  color: rgb(0, 0, 32);
  outline: none;
  
`;

const StyledTextArea = styled.textarea`
 padding: 20px;
  border-radius: 3px;
  /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.137); */
  margin-bottom: 20px;
  border: 1px solid lightgray;
  /* border: none; */
  background: #fff;
  font-size: 16px;
  color: rgb(0, 0, 32);
  outline: none;
  
`;
const StyledButton = styled.button`
   padding: 20px;
  border: none;
  background-color: rgb(2, 2, 110);
  font-weight: 500;
  font-size: 20px;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin-top: 10px;
`;

const Contact = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <StyledFormWrapper>
        <StyledForm className = "form">
          <br/>
            <h1>Sign Up</h1>
              <br/><br/>
            <label>First Name</label>
            <StyledInput placeholder = "First Name" 
            onChange = { (e) => setName(e.target.value)}
            />

            <label>Last Name</label>
            <StyledInput placeholder = "Last Name" 
            onChange = { (e) => setName(e.target.value)}
            />
            
            <label>Email</label>
            <StyledInput placeholder = "Email" 
            value = {email} 
            onChange = { (e) => setEmail(e.target.value)}
            />

            <StyledButton type = "submit">Submit</StyledButton>
        </StyledForm>
        </StyledFormWrapper>
    )
}

export default Contact
