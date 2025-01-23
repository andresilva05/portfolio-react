import styled from "styled-components";

export const TypingContainer = styled.h3`
  font-size: 2rem;
  font-family: "Roboto Mono", monospace; /* Fonte estilizada */
  display: inline-block;
  padding-right: 5px;
  background: linear-gradient(
    90deg,
    #ff073a,
    #007bff
  ); /* Gradiente azul e vermelho */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; /* Faz o gradiente aparecer no texto */
  border-right: 3px solid #fa0707; /* Cursor de digitação */
  animation: blink 0.75s infinite step-end;

  @keyframes blink {
    0%,
    50%,
    100% {
      border-color: transparent;
    }
    25%,
    75% {
      border-color: rgba(250, 7, 7, 0.61);
    }
  }

  /* Responsividade */
  @media (max-width: 768px) {
    font-size: 1.5rem; /* Reduzindo o tamanho da fonte em telas menores */
  }

  @media (max-width: 480px) {
    font-size: 1.2rem; /* Tamanho ainda menor em telas muito pequenas */
  }
`;
