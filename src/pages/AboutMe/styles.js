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
    text-align: center;
    align-items: center;
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
