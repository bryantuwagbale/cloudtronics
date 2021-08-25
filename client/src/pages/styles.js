import styled from 'styled-components';
export const FormDiv = styled.div `
position: fixed;
top:20%;
left:35%;
min-width: 30%;
max-width: 40%;
max-height: 76%;
overflow: auto;
backdrop-filter: blur(10px);
padding: 1.5rem;
box-shadow: 0 0 1rem rgba(0, 0, 0, .5);
border-radius: .5rem;
background-color: rgba(255, 255, 255, 0.3);
button {
  margin:1%;
  margin-bottom:2%;
  background-color: #2D232E;
  color: white;
  border-radius: .5rem;
  align-self: center;
  &:hover {
      background-color: grey;
  }
 
  }
  img {
    border-radius: .5rem;
    width:300px;
    box-shadow: 0 0 1rem rgba(0, 0, 0, .5);
    opacity: 0.8;
    &:hover{
      opacity: 1;
    }
}
`

export const Form = styled.form`
    width:100%;
`
export const InputDiv = styled.div`
text-align: left;
    label {
        color:black;
        font-size: medium;  
    }
    
`

export const FormH2 = styled.h2` 
  font-size: 1.5rem;
  border-bottom: 1px solid var(--dark);
  padding-bottom: .5rem;
  margin: 1rem 0;
`
