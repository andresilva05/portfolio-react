import styled from "styled-components";

export const ContainerHeader = styled.header`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h2`
  color: #ffffff;
  font-size: 35px;
  font-weight: 500;
  span {
    color: #fa0707;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 25px;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Garante que os itens fiquem nas extremidades */
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 25px;

  @media (max-width: 768px) {
    flex-direction: row; /* Mantém os itens na mesma linha */
    justify-content: space-between; /* Mantém o espaçamento em telas menores */
  }

  @media (max-width: 480px) {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 15px;
  }
`;


export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

export const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #fff;
    font-size: 25px;
    transition: transform 0.2s ease-in-out, color 0.5s; /* Suaviza transform e a mudança de cor */
  }

  a:hover {
    color: #fa0707; /* Altera a cor ao passar o mouse */
    transform: scale(1); /* Aplica o efeito de pulse */
  }

  .home {
    display: none;
  }

  @media (max-width: 768px) {
    a {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    a {
      font-size: 18px;
    }
  }
`;

export const MyName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Preenche toda a altura da tela */
  text-align: center; /* Centraliza o texto */
  pointer-events: none;

  h1 {
    color: white;
    font-size: 60px;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 2s ease-in-out forwards; /* Animação */

    span {
      color: #fa0707;
    }
  }

  h3 {
    color: white;
    font-size: 25px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 50px;
    }

    h3 {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 40px;
    }

    h3 {
      font-size: 18px;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
