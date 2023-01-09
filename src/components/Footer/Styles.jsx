import styled, { keyframes } from "styled-components";


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;


export const FooterStyled = styled.footer`

    text-align: center;
`
export const Text = styled.p`
    font-family:'Great Vibes',cursive ;
    color: #c7c1c1;
    font-size: 15px;

`
export const Spin = styled.div`
    
    animation: ${rotate} 3s linear infinite;
    display: inline-block;
    margin: 10px 10px;
`
