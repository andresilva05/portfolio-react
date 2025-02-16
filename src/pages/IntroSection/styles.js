import styled, { keyframes } from "styled-components";

// Animação fadeIn
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ContainerHeader = styled.header`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%; /* Preenchendo toda a altura */

  @media (max-width: 768px) {
    height: auto; /* Ajusta automaticamente para o conteúdo */
  }

  @media (max-width: 480px) {
    height: auto; /* Garante compatibilidade em telas muito pequenas */
  }
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
    transform: scale(1.5); /* Aplica o efeito de pulse */
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

export const AboutMeContainer = styled.div`
  display: flex;
  gap: 200px;

  @media (max-width: 768px) {
    gap: 50px; /* Mantém o ajuste em telas menores */
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 20px; /* Reduzido ainda mais em telas pequenas */
  }
`;

export const ProfileImage = styled.img`
  width: 340px; //400px
  height: 320px;
  border-radius: 100%;
  object-fit: fill;
  margin-top: 270px;
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-top: 50px; /* Reduzido em telas médias */
  }

  @media (max-width: 480px) {
    margin-top: 20px; /* Ajuste menor para telas pequenas */
  }
`;

export const MyName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  pointer-events: none;
  margin-left: 100px;

  @media (max-width: 768px) {
    margin-left: 50px;
    h1 {
      font-size: 50px; /* Diminuindo o tamanho da fonte em telas menores */
    }
  }

  @media (max-width: 480px) {
    margin-left: 20px;
    h1 {
      font-size: 40px; /* Diminuindo ainda mais em telas muito pequenas */
    }
  }

  h1 {
    color: white;
    font-size: 60px;
    opacity: 0; /* Inicialmente invisível */
    transform: translateY(20px); /* Inicialmente deslocado */
    animation: ${fadeIn} 2s ease-in-out forwards; /* Aplica a animação */
  }

  h2 {
    color: white;
    font-size: 25px;

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  svg,
  img {
    border-radius: 30px;
    transition: all 0.3s ease-in-out;
    width: 32px; /* Tamanho padrão */
    height: 32px; /* Tamanho padrão */

    &:hover {
      background: rgb(7, 7, 7); /* Preenche o fundo com vermelho */
      transform: scale(1.5);
    }
  }

  /* Responsividade */
  @media (max-width: 768px) {
    gap: 8px;
    margin-top: 15px;

    svg,
    img {
      width: 28px; /* Tamanho menor em telas pequenas */
      height: 28px; /* Tamanho menor em telas pequenas */
      transform: scale(1.3); /* Efeito de hover reduzido */
    }
  }

  @media (max-width: 480px) {
    gap: 6px;
    margin-top: 10px;

    svg,
    img {
      width: 24px; /* Tamanho ainda menor em telas muito pequenas */
      height: 24px; /* Tamanho ainda menor em telas muito pequenas */
      transform: scale(1.2); /* Efeito de hover ainda mais discreto */
    }
  }
`;

export const GithubLogo = styled.img``;


export const DownloadCv = styled.button`
  border-radius: 26px; /* Manter o border-radius */
  background: #fa0707;
  height: 50px;
  width: 180px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  margin-top: 15px;

  /* Borda iluminada, sem interferir no border-radius */
  box-shadow: 0 0 10px 4px rgba(250, 7, 7, 0.8);

  /* Transição suave para o efeito */
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    /* Remover a borda iluminada quando o mouse passar */
    box-shadow: 0 0 10px 0 rgba(21, 7, 211, 0);
  }

  a{
    text-decoration: none;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    margin-top: 30px; /* Aumenta o espaçamento superior em telas menores */
  }

  @media (max-width: 480px) {
    margin-top: 100px; /* Aumenta ainda mais o espaçamento em telas muito pequenas */
  }
`;
