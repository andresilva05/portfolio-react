import styled from "styled-components";

export const TitleProjects = styled.h2`
  color: rgb(0, 0, 0);
  font-size: 3rem;
  text-align: center;
  padding-top: 30px;
  font-family: "Montserrat", serif;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 60px;
  }

  @media (max-width: 480px) {
    font-size: 45px;
  }
`;

export const Subtitle = styled.p`
  font-family: "Montserrat", serif;
  font-weight: 200;
  text-align: center;
  font-size: 20px;
`;

export const CardProjects = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 20px;
    margin-top: 50px;
  }

  @media (max-width: 480px) {
    gap: 15px;
    margin-top: 30px;
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  width: calc(33.33% - 20px); /* Ajuste para 3 por linha */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 1024px) {
    width: calc(50% - 20px); /* 2 por linha em telas médias */
  }

  @media (max-width: 768px) {
    width: 100%; /* 1 por linha em telas pequenas */
  }
`;

export const ImgProject = styled.img`
  height: 70px;
  width: 70px;
  margin-inline: auto;

  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
  }

  @media (max-width: 480px) {
    height: 50px;
    width: 50px;
  }
`;

export const TitleProject = styled.h5`
  color: #ffffff;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const TextProject = styled.p`
  color: #ececec;
  font-size: 11px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 10px;
  }

  @media (max-width: 480px) {
    font-size: 9px;
  }
`;

export const LinkProject = styled.a`
  background-color: #e93939fb;
  cursor: pointer;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 25px;
  text-decoration: none;

  &:hover {
    background-color: #000000;
    border: 3px solid #ee2d2d;
    transition: 0.5s;
  }

  @media (max-width: 768px) {
    padding: 8px 18px;
  }

  @media (max-width: 480px) {
    padding: 6px 15px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px; /* Definir uma largura máxima pode ajudar no layout */
  margin: 0 auto; /* Centraliza na página */
`;
export const Header = styled.div`
  width: 100%;
  max-width: 400px; /* Ajuste conforme necessário */
  height: 500px; /* Ajuste conforme necessário */
  margin: 0 auto;
  padding: 1rem;
  border-radius: 2rem;
  border: 1px solid rgba(43, 105, 251, 0.12);
  box-shadow: rgba(43, 105, 251, 0.06) 0px 0px 1rem 1rem;
  position: relative;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Distribui os elementos */

  /* Responsividade */
  @media (max-width: 768px) {
    max-width: 90%;
    height: auto;
    padding: 0.8rem;
  }

  @media (max-width: 375px) {
    max-width: 95%;
    border-radius: 1rem;
    padding: 0.5rem;
  }
`;

export const ImgLogo = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  border-radius: 0.8rem;
  border: 1px solid rgba(43, 105, 251, 0.12);
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1); /* Zoom dentro da div */
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  color: rgb(10, 0, 27);
  background: rgb(250, 254, 255);
  box-shadow: rgb(250, 254, 255) 0px 0px 20px 20px;
  position: relative;
  /* z-index: 1; */
  margin-top: -70px;
  border-radius: 0.8rem;
`;
export const ProjectActions = styled.div`
  font-size: 1.5rem;
  /* z-index: 3; Aumenta o z-index para ficar acima da sombra */
  padding-left: 10px;
  display: flex;
`;
export const ContaActionButtoniner = styled.div``;
export const ActionButton = styled.div`
  position: relative;
  /* z-index: 1; */

  a {
    color: rgb(10, 0, 27);
    text-decoration: none;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;
export const ModalContent = styled.div`
  background: white;
  padding: 10px;
  border-radius: 8px;
`;

export const FullImg = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 5px;
`;
export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Ou "center" para centralizar */
  gap: 20px; /* Espaço entre os cards */
  padding: 20px;
`;
