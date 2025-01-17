import { IoCloseSharp } from "react-icons/io5";
import { NavItem, NavList, StyledNav } from "../../pages/IntroSection/styles";
import { Container, ContentMobile } from "./styles";
import { TiThMenu } from "react-icons/ti";
import { useEffect, useState } from "react";

export default function MenuHamburguer() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Atualiza o estado com base na largura da tela
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize); // Atualiza o estado quando a tela é redimensionada
    return () => {
      window.removeEventListener("resize", handleResize); // Remove o listener ao desmontar o componente
    };
  }, []);

  return (
    <>
      {isMobile ? (
        // Menu mobile
        <Container className={menuOpen ? "active" : ""}>
          <ContentMobile onClick={toggleMenu}>
            {menuOpen ? (
              <IoCloseSharp color="white" />
            ) : (
              <TiThMenu color="white" />
            )}
          </ContentMobile>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
            <li>
              <a href="#contato">Fale comigo</a>
            </li>
          </ul>
        </Container>
      ) : (
        // Menu desktop
        <StyledNav>
          <NavList className="menu-desktop">
            <NavItem>
              <a href="#sobre">Sobre</a>
            </NavItem>
            <NavItem>
              <a href="#projetos">Projetos</a>
            </NavItem>
            <NavItem>
              <a href="#contato">Fale comigo</a>
            </NavItem>
          </NavList>
        </StyledNav>
      )}
    </>
  );
}
