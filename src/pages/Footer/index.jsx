import {
  InformationFooter,
  InfoText,
  Myname,
  SocialContainer,
  SocialLink,
} from "./styles";

import LinkedInIcon from "../../assets/linkedin.png";
import PhoneIcon from "../../assets/telefone.png";
import GmailIcon from "../../assets/logotipo-do-gmail.png";

const renderSocialLinks = () => (
  <SocialContainer>
    <SocialLink
      href="https://www.linkedin.com/in/wilson-andr%C3%A9-de-melo-silva-9b9b39235/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={LinkedInIcon} alt="LinkedIn" />
    </SocialLink>
    <SocialLink
      href="tel:+5514998467362"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={PhoneIcon} alt="Telefone" />
    </SocialLink>
    <SocialLink
      href="mailto:andre.silva.dev05@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={GmailIcon} alt="Gmail" />
    </SocialLink>
  </SocialContainer>
);

export default function Footer() {
  return (
    <InformationFooter id="contato">
      <Myname>Wilson André de Melo Silva</Myname>
      <InfoText>Para mais informações</InfoText>
      {renderSocialLinks()}
    </InformationFooter>
  );
}
