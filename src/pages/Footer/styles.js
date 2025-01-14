import styled from "styled-components";

export const InformationFooter = styled.footer`
  background-color: #000000;
  padding-top: 100px;
  padding-bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding-top: 80px;
    padding-bottom: 100px;
  }

  @media (max-width: 480px) {
    padding-top: 60px;
    padding-bottom: 80px;
  }
`;

export const Myname = styled.h5`
  color: #ffffff;
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 26px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const InfoText = styled.p`
  color: #ffffff;
  font-size: 18px;
  margin-top: 14px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

export const ContactLinks = styled.div``;

export const Links = styled.a``;

export const SocialContainer = styled.div`
  display: flex;
  gap: 20px;

  img {
    height: 24px;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const SocialLink = styled.a`
  background-color: #f9004d;
  padding: 15px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    height: 45px;
    width: 45px;
    padding: 12px;
  }

  @media (max-width: 480px) {
    height: 40px;
    width: 40px;
    padding: 10px;
  }
`;
