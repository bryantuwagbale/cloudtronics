import styled from 'styled-components';
export const CartDiv = styled.div `
position: fixed;
top:30%;
left:38%;
min-width: 30%;
max-width: 40%;
max-height: 60%;
backdrop-filter: blur(10px);
overflow: auto;
padding: 1.5rem;
box-shadow: 0 0 1rem rgba(0, 0, 0, .5);
border-radius: .5rem;
background-color: rgba(255, 255, 255, 0.3);
button {
  background-color: #2D232E;
  color: white;
  border-radius: .5rem;
  align-self: center;
  &:hover {
      background-color: grey;
  }
}
`

export const CartH2 = styled.h2` 
  font-size: 1.5rem;
  border-bottom: 1px solid var(--dark);
  padding-bottom: .5rem;
  margin: 1rem 0;
`

export const Close = styled.div`
  position: absolute;
  top: .5rem;
  right: .5rem;
  cursor: pointer;
  color: white;
  padding-right: 1%;
  padding-left: 1%;
  background-color: red;
  border-radius: 1.5rem;

  &:hover {
    color:white;
    background-color:green;
  }
`
export const CartClosed = styled.div`
  position: fixed;
  top: 15%;
  right: 1%;
  font-size: 2rem;
  cursor: pointer;
  border-radius: 50%;
  padding-left: .2rem;
  width: 50px;
  height: 50px;
  &:hover {
    background-color: white;
    border-style: solid;
    border-color: black;
    `