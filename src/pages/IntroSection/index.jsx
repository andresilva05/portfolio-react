import {
  ContainerHeader,
  MyName,
  NavItem,
  NavList,
  StyledNav,
  Title,
} from "./styles";

export default function IntroSection() {
  return (
      <ContainerHeader>
        <StyledNav>
          <Title>
            Portfo<span>lio</span>
          </Title>

          <NavList>
            <NavItem>
              <a className="home" href="#inicio">
                Home
              </a>
            </NavItem>
            <NavItem>
              <a href="#sobre">Sobre</a>
            </NavItem>
            <NavItem>
              <a href="#projetos">Projetos</a>
            </NavItem>
            <NavItem>
              <a href="#contatos">Fale comigo</a>
            </NavItem>
          </NavList>
        </StyledNav>
        <MyName>
          <h1>
            André <span>Silva</span>
          </h1>
          <h3>Programador Front End</h3>
        </MyName>
      </ContainerHeader>
  );
}
