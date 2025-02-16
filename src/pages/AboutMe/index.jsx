import AnimationAboutMe from "../../components/AnimationAboutMe";
import { AboutSection, AboutText, ContainerSkill, TextSection } from "./styles";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { IoGitBranch } from "react-icons/io5";

export default function AboutMe() {
  return (
    <AboutSection id="sobre">
      <TextSection>
        <AnimationAboutMe />
        <AboutText>
          Olá, eu sou o Wilson André – apaixonado por tecnologia e dedicado a
          transformar ideias em experiências digitais únicas. Minha jornada no
          desenvolvimento começou com uma base sólida em HTML, CSS e JavaScript,
          e evoluiu para dominar frameworks modernos como React e React Native,
          além do universo Node.js. Recentemente, concluí o curso DevClub
          FullStack PRO (140 horas, ministrado por Rodolfo Mori, com conclusão
          em 30/12/2024), onde aprofundei meus conhecimentos em tecnologias
          essenciais e ferramentas como Git, GitHub, Figma, Insomnia, Docker e
          Beekepper. Essa experiência me permitiu desenvolver projetos front-end
          incríveis – incluindo meu próprio portfólio – e integrar APIs de forma
          dinâmica, consolidando uma visão completa do ciclo de desenvolvimento
          web. Além disso, iniciei minha trajetória acadêmica em Sistemas para
          Internet no Instituto Federal de Araraquara, onde mergulhei em C e
          lógica de programação. Apesar de ter interrompido temporariamente meus
          estudos devido a um acidente, estou determinado a retornar e continuar
          evoluindo. Estou sempre em busca de novas técnicas e tendências para
          criar soluções criativas, eficientes e responsivas que encantem os
          usuários. Vamos transformar suas ideias em realidade?
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
