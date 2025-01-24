import styled from "styled-components";

export const AboutSection = styled.section`
  display: flex;
  align-items: center;
  background-color: #09151e;
  padding-bottom: 60px;
  padding-top: 70px;
  gap: 60px;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }

  @media (max-width: 480px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    text-align: center; /* Centraliza o texto da div para telas menores */
    align-items: center; /* Alinha ao centro os filhos da div */
  }
`;

export const AboutTitle = styled.h2`
  color: white;
  font-size: 75px;

  @media (max-width: 768px) {
    font-size: 50px;
  }

  @media (max-width: 480px) {
    font-size: 40px;
  }
`;

export const AboutText = styled.p`
  color: #ffffff;
  font-size: 25px;
  opacity: 0.5;
  text-align: left;
  padding: 20px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ContainerSkill = styled.div`
  text-align: center;

  display: flex;
  flex-direction: column;
  cursor: pointer;

  h1 {
    color: #fff;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 5px;
    padding: 10px;

    svg {
      color: #fa0000;
      box-shadow: 0 0 10px 4px rgba(250, 7, 7, 0.8);
      border-radius: 25px;
      transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
      background-color:rgb(3, 3, 3);

      &:hover {
        box-shadow: 0 0 15px 6px rgba(250, 7, 7, 1);
        transform: scale(1.2);
      }
    }
  }

  svg {
    transition: all 0.3s ease-in-out;
    width: 32px; /* Tamanho padrão */
    height: 32px; /* Tamanho padrão */

    &:hover {
      transform: scale(1.5);
    }
  }
`;
