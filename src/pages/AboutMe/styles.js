import styled from "styled-components";

export const AboutSection = styled.section`
  display: flex;
  align-items: center;
  background-color: #09151e;
  padding-bottom: 60px;
  padding-top: 70px;
  gap: 60px;
`;
export const ProfileImage = styled.img`
  width: 400px;
  height: 380px;
  border-radius: 100%;
  border: 2px solid #fa0707;
  object-fit: fill;
  margin-left: 10px;
`;
export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const AboutTitle = styled.h2`
  color: white;
  font-size: 75px;
`;
export const AboutText = styled.p`
  color: #ffffffff;
  font-size: 25px;
  opacity: 0.5;
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
`;
