import AnimationAboutMe from "../../components/AnimationAboutMe";
import { AboutSection, AboutText, ContainerSkill, TextSection } from "./styles";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { IoGitBranch } from "react-icons/io5";

export default function AboutMe() {
  return (
    <AboutSection>
      <TextSection>
        <AnimationAboutMe />
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
        <ContainerSkill>
          <h1>Habilidades:</h1>
          <div>
            <FaHtml5 size={32} color="#fa0000" />
            <IoLogoCss3 size={32} color="#fa0000" />
            <FaJs size={32} color="#fa0000" />
            <FaReact size={32} color="#fa0000" />
            <FaNodeJs size={32} color="#fa0000" />
            <IoGitBranch size={32} color="#fa0000" />
          </div>
        </ContainerSkill>
      </TextSection>
    </AboutSection>
  );
}
