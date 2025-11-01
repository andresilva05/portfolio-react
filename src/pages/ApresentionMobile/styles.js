import styled from "styled-components";

export const Texto = styled.p`
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
