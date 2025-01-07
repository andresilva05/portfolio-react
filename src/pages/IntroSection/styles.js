import styled from "styled-components";

export const ContainerHeader = styled.header``;
export const Title = styled.h2`
  color: #ffffff;
  font-size: 35px;
  font-weight: 500;
  span {
    color: #fa0707;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 25px;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 50px;
`;

export const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #fff;
    font-size: 25px;
  }
  a:hover {
    color: #fa0707;
    transition: 0.5s;
  }
  .home {
    display: none;
  }
`;

export const MyName = styled.div`
  pointer-events: none;
  margin: 340px 0 40px 20px;

  h1 {
    color: white;
    font-size: 60px;

    span {
      color: #fa0707;
    }
  }
  h3 {
    color: white;
    font-size: 25px;
  }
`;
