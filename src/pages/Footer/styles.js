import styled from "styled-components";

export const InformationFooter = styled.footer`
  background: rgb(10, 0, 27);
  margin-top: -2px;
  padding: 0 20px 0 20px;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  padding: 5rem 1rem;
  margin: auto;
  color: rgb(255, 255, 255);

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
  font-size: 1rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 26px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const InfoText = styled.div`
  color: #ffffff;
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;