import { useEffect, useRef, useState } from "react";
import { ContainerHeader, MyName, StyledNav, Title } from "./styles";
import TypingAnimation from "../../components/TypingContainer";
import MenuHamburguer from "../../components/MenuHamburguer";

export default function IntroSection() {
  const headingRef = useRef(null); // Referência para o <h1>
  const [silvaColor, setSilvaColor] = useState("#fa0707"); // Estado para a cor de "Silva"

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

        <MenuHamburguer />
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
