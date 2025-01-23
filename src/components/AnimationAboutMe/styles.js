import styled, { keyframes, css } from "styled-components";

// Animação de fade-in
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px); // Surge levemente de baixo
  }
  to {
    opacity: 1;
    transform: translateY(0); // Fica na posição normal
  }
`;


// Texto animado
export const AnimationText = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color:rgb(255, 255, 255);
  opacity: 0; // Começa invisível
  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${fadeIn} 1s ease-out forwards; // Aplica a animação
    `}
`;
