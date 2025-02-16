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
  text-align: justify;
  padding: 100px; //70px
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 50px; //70px
    text-align: left;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 30px; //70px
    text-align: left;
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
    gap: 10px;
    padding: 10px;

    svg {
      color: #fa0000;
      transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

      &:hover {
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
