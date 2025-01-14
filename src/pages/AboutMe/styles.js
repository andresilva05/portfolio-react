import styled from "styled-components";

export const AboutSection = styled.section`
  display: flex;
  align-items: center;
  background-color: #09151e;
  padding-bottom: 60px;
  padding-top: 70px;
  gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }

  @media (max-width: 480px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const ProfileImage = styled.img`
  width: 400px;
  height: 380px;
  border-radius: 100%;
  border: 2px solid #fa0707;
  object-fit: fill;
  margin-left: 10px;

  @media (max-width: 768px) {
    width: 300px;
    height: 280px;
  }

  @media (max-width: 480px) {
    width: 250px;
    height: 230px;
  }
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

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

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ContactButton = styled.button`
  color: #ffffff;
  background: #fa0707;
  height: 50px;
  width: 180px;
  font-size: 18px;
  border: none;
  border-radius: 26px;
  cursor: pointer;

  &:hover {
    background-color: #000000;
    border: 3px solid #ee2d2d;
    transition: 0.5s;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 45px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    width: 130px;
    height: 40px;
    font-size: 14px;
  }
`;
