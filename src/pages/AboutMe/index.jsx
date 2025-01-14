import AboutMeImg from "../../assets/MeImg.jpg";
import {
  AboutSection,
  AboutText,
  AboutTitle,
  ContactButton,
  ProfileImage,
  TextSection,
} from "./styles";

export default function AboutMe() {
  return (
    <AboutSection>
      <ProfileImage src={AboutMeImg} />
      <TextSection>
        <AboutTitle id="sobre">Sobre mim</AboutTitle>
        <AboutText>
          Olá, sou Wilson André, Programador Front-End e apaixonado por
          tecnologia! Meu objetivo é transformar ideias em soluções reais por
          meio do desenvolvimento web. Tenho experiência na criação de
          aplicações utilizando HTML, CSS e JavaScript, além de já ter concluído
          o módulo de React no meu curso. Durante meus estudos, desenvolvi uma
          aplicação completa, integrando front-end dinâmico e consumo de APIs, o
          que me proporcionou uma visão prática e sólida do desenvolvimento
          moderno. Estou sempre em busca de novas técnicas e tendências para
          aprimorar minhas habilidades e criar experiências digitais
          envolventes, funcionais e responsivas. Meu compromisso é oferecer
          soluções criativas e eficientes que atendam às necessidades dos
          usuários, mantendo-me atualizado com as inovações do setor.
        </AboutText>
        <ContactButton>Entre em contato</ContactButton>
      </TextSection>
    </AboutSection>
  );
}
