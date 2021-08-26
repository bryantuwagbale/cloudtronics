
import styled from 'styled-components';

export const CartImg = styled.img`
      width: 150px;
      margin-right: 1rem;
      border-radius: .5rem;
      box-shadow: 0 0 1rem rgba(0, 0, 0, .5);
      opacity: 0.8;
      &:hover{
        opacity: 1;
      }
    `
export const CartInput = styled.div`
        display:flex;
        width: 100px;
        padding: 0;
        margin: 0 .5rem 1rem 0;
        input {
            text-align: center;
        }
 `
 export const ItemWrapper = styled.div`
        display:flex;
        justify-content: space-between;
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