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

  const handleMenuItemClick = (e) => {
    setMenuOpen(false); // Fecha o menu ao clicar em um item
    const target = e.target.getAttribute("href");
    if (target) {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Rola a página até a seção
      }
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
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
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a href="#home" onClick={handleMenuItemClick}>
                Home
              </a>
            </li>
            <li>
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a href="#sobre" onClick={handleMenuItemClick}>
                Sobre
              </a>
            </li>
            <li>
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a href="#projetos" onClick={handleMenuItemClick}>
                Projetos
              </a>
            </li>
            <li>
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a href="#contato" onClick={handleMenuItemClick}>
                Fale comigo
              </a>
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
