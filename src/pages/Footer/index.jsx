
import { InformationFooter, FooterContainer, Myname, InfoText } from "./styles";
import { MarkGithubIcon } from "@primer/octicons-react";

export default function Footer() {
  return (
    <InformationFooter id="contato">
      <FooterContainer>
        <Myname>© 2025 WilsonDev. Todos os direitos reservados.</Myname>
        <InfoText>
          <a
            href="https://github.com/andresilva05"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MarkGithubIcon
              size={32}
              style={{ verticalAlign: "initial", color: "#fff" }}
            />
          </a>
        </InfoText>
      </FooterContainer>
    </InformationFooter>
  );
}
