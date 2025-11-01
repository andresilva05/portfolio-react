import AnimationAboutMe from "../../components/AnimationAboutMe";
import { AboutSection, ContainerSkill, TextSection } from "./styles";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { IoGitBranch } from "react-icons/io5";
import { Apresentacao } from "../ApresentionMobile";

export default function AboutMe() {
  return (
    <AboutSection id="sobre">
      <TextSection>
        <AnimationAboutMe />
        <Apresentacao />
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
