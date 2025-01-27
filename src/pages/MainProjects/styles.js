import styled from "styled-components";
import backgroundCard from "../../assets/fundo-portfólio.jpg";

export const TitleProjects = styled.h2`
  color: #ffffff;
  font-size: 75px;
  text-align: center;
  padding-top: 30px;

  @media (max-width: 768px) {
    font-size: 60px;
  }

  @media (max-width: 480px) {
    font-size: 45px;
  }
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
  background: url(${backgroundCard});
  height: 427px;
  width: 290px;
  border-radius: 20px;
  padding: 20px 35px;
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: 350px;
    width: 240px;
    padding: 15px 25px;
  }

  @media (max-width: 480px) {
    height: 300px;
    width: 200px;
    padding: 10px 20px;
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
