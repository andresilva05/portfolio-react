import styled from "styled-components";

export const SectionApproach = styled.section`
  background-color: #fff;
  padding: 20px;
  margin: 0px auto;
  max-width: 800px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    max-width: 90%;
    flex-direction: column;
    gap: 15px;
  }

  @media (max-width: 480px) {
    max-width: 95%;
    padding: 15px;
  }
`;

export const TitleApproach = styled.h2`
  font-size: 2em;
  color: #333;
  margin-bottom: 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8em;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

export const TextApproach = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: #555;

  @media (max-width: 768px) {
    font-size: 1.1em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;
