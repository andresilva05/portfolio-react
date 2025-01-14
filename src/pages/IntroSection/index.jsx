import { useEffect, useRef, useState } from "react";
import {
  ContainerHeader,
  MyName,
  NavItem,
  NavList,
  StyledNav,
  Title,
} from "./styles";
import TypingAnimation from "../../components/TypingContainer";
// import Particles from "react-tsparticles

// import ParticlesBackground from "../../components/ParticlesBackground";

export default function IntroSection() {
  const headingRef = useRef(null); // Referência para o <h1>
  const [silvaColor, setSilvaColor] = useState("#fa0707"); // Estado para a cor de "Silva"
  // const [desenvolvedorColor, setDesenvolvedorColor] = useState("#ffffff"); // Estado para a cor de "Programador"

  useEffect(() => {
    const h1Element = headingRef.current;

    if (h1Element) {
      // Adiciona a classe `visible` após um pequeno delay
      setTimeout(() => {
        h1Element.classList.add("visible");
      }, 100); // Ajuste o delay se necessário
    }

    // Alterna as cores de "Silva"
    const silvaInterval = setInterval(() => {
      setSilvaColor((prevColor) =>
        prevColor === "#fa0707" ? "#0e274b" : "#fa0707"
      );
    }, 2000);



    // Limpa os intervalos ao desmontar o componente
    return () => {
      clearInterval(silvaInterval);
    };
  }, []);

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
            <a href="#contato">Fale comigo</a>
          </NavItem>
        </NavList>
      </StyledNav>
      <MyName>
        <h1>
          Olá, sou <br />
        </h1>
        <h1 ref={headingRef}>
          André <span style={{ color: silvaColor }}>Silva</span>
        </h1>
        <TypingAnimation />
      </MyName>
    </ContainerHeader>
  );
}
