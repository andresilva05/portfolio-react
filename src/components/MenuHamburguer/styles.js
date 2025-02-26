import styled from "styled-components";

// Container principal do menu
export const Container = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    clip-path: circle(100px at 90% -15%);
    align-items: center;
    pointer-events: none;
    background: black;
    z-index: 500;
    gap: 40px;
    font-size: 30px;
    padding-top: 125px;
  }

  &.active ul {
    clip-path: circle(1500px at 90% -15%);
    pointer-events: all; /* Habilita interação quando visível */
  }

  li {
    list-style: none;
    padding: 1rem;
    text-align: center;
  }

  a {
    color: #ffeeff;
    font-weight: 700;
    text-decoration: none;
  }

  a:hover {
    color: #c3b0ca;
  }

  // Estilos para o menu desktop
  .menu-desktop {
    display: flex;
    gap: 30px; /* Espaçamento entre os itens */
  }

  @media (max-width: 768px) {
    .menu-desktop {
      display: none; /* Esconde o menu desktop em telas menores */
    }
  }
`;

// Ícone do menu (botão)
export const ContentMobile = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  position: absolute; /* Garante que o ícone esteja acima do menu */
  top: 0;
  right: 0;
  z-index: 1000; /* Define prioridade de exibição acima do menu */
  background-color: transparent; /* Remove fundo */
  cursor: pointer;
  position: fixed;

  @media (min-width: 769px) {
    display: none; /* Esconde o ícone no desktop */
  }
`;
