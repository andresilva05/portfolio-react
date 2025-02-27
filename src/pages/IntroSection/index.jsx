import { useEffect, useRef, useState } from "react";
import {
  ContainerHeader,
  MyName,
  StyledNav,
  Title,
  ProfileImage,
  AboutMeContainer,
  SocialIcons,
  GithubLogo,
  DownloadCv,
} from "./styles";
import TypingAnimation from "../../components/TypingContainer";
import MenuHamburguer from "../../components/MenuHamburguer";
import AboutMeImg from "../../assets/MeImg.jpg";
import GithubImg from "../../assets/github-icon.png";
import { LinkedinLogo, WhatsappLogo, InstagramLogo } from "phosphor-react";

export default function IntroSection() {
  const headingRef = useRef(null); // Referência para o <h1>
  const [silvaColor, setSilvaColor] = useState("#fa0707"); // Estado para a cor de "Silva"

  useEffect(() => {
    const h1Element = headingRef.current;

    if (h1Element) {
      // Adiciona a classe visible após um pequeno delay
      setTimeout(() => {
        h1Element.classList.add("visible");
      }, 100);
    }

    const silvaInterval = setInterval(() => {
      setSilvaColor((prevColor) =>
        prevColor === "#fa0707" ? "#007bff" : "#fa0707"
      );
    }, 2000);

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
      <AboutMeContainer>
        <MyName>
          <h2>Olá, sou</h2>
          <h1 ref={headingRef}>
            {" "}
            André <span style={{ color: silvaColor }}>Silva</span>
          </h1>
          <TypingAnimation />
          <SocialIcons>
            <a
              href="https://www.linkedin.com/in/wilson-andr%C3%A9-de-melo-silva-9b9b39235/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo size={32} color="#fa0000" />
            </a>
            <a
              href="https://wa.me/5514998467362"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappLogo size={32} color="#fa0000" />
            </a>
            <a
              href="https://github.com/andresilva05"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo src={GithubImg} />
            </a>
            <a
              href="https://www.instagram.com/__andre.silva17/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogo size={32} color="#fa0000" />
            </a>
          </SocialIcons>

          <DownloadCv>
            <a
              href="/public/Curriculo-Front_end.pdf"
              download="CV-Wilson-André_Desenvolvedor-FrontEnd.pdf"
            >
              Download CV
            </a>
          </DownloadCv>
        </MyName>
        <div style={{ width: "min-content" }}>
          <ProfileImage src={AboutMeImg} />
        </div>
      </AboutMeContainer>
    </ContainerHeader>
  );
}
