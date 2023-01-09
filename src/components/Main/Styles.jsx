import { keyframes } from "styled-components";
import styled from "styled-components";


const rotate = keyframes`
 0% {
    transform: translateX(0);
  }
  100% {
    transform:translateX(calc(20vh - 30px));
  }
`;


export const MainStyled = styled.main`

    width: 600px;
    height: 500px;
    
    margin-left: 350px;
    margin-top: 200px;
    text-align: center;
`
export const Text = styled.p`
    font-family:'Great Vibes',cursive ;
    color: #c7c1c1;
    font-size: 25px;
    transition: all 1s;
    cursor: pointer;
    &:hover{
        color: #d44c50;
        font-size: 35px;
        
    }


`

export const DivImage = styled.div`
   
  
    margin-top: 50px;
    animation-name: ${rotate};
    animation-duration: 2s ;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite; 
    animation-direction: alternate-reverse;

`