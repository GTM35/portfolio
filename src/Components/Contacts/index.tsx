import Line from "../Line";
import {
  Contact,
  ContactsGroup,
  ContactsTitle,
  ContainerContacts,
  Headline,
  IconSocials,
  MainContacts,
  SocialContacts,
  TextContact,
} from "./style";

import iconEmail from "../../assets/images/icon-email.svg";
import IconTel from "../../assets/images/icon-tel.svg";
import IconWpp from "../../assets/images/icon-wpp.svg";

import IconLinkedin from "../../assets/images/icon-linkedin.svg";
import IconTwitch from "../../assets/images/icon-twitch.svg";
import IconGithub from "../../assets/images/icon-github.svg";

const Contacts = () => {
  return (
    <>
      <Line />
      <ContactsTitle>Contatos</ContactsTitle>
      <ContainerContacts id="Contacts">
        <MainContacts>
          <Headline>
            Gostaria de falar sobre projetos, oportunidades ou trocar
            experiências?
          </Headline>
          <ContactsGroup>
            <Contact>
              <IconSocials href="mailto:gustavotmsilva35@gmail.com">
                <img src={iconEmail} alt="Ícone de E-mail" />
              </IconSocials>
              <TextContact>gustavotmsilva35@gmail.com</TextContact>
            </Contact>
            <Contact>
              <IconSocials href="https://wa.me/5511977800799" target="_blank">
                <img src={IconWpp} alt="Ícone Whatsapp" />
              </IconSocials>
              <TextContact>+55 11 97780-0799</TextContact>
            </Contact>
            <Contact>
              <IconSocials href="tel:+5511977800799" target="_blank">
                <img src={IconTel} alt="Ícone Telefone" />
              </IconSocials>
              <TextContact>+55 11 97780-0799</TextContact>
            </Contact>
          </ContactsGroup>
        </MainContacts>
        <SocialContacts>
          <Headline>
            Acompanhe de perto o meu trabalho e fique por dentro de todas as
            novidades nos canais abaixo.
          </Headline>
          <ContactsGroup>
            <Contact>
              <IconSocials
                href="https://www.linkedin.com/in/gtm035/"
                target="_blank"
              >
                <img src={IconLinkedin} alt="Ícone Linkedin" />
              </IconSocials>
            </Contact>
            <Contact>
              <IconSocials href="https://github.com/GTM35" target="_blank">
                <img src={IconGithub} alt="Ícone Github" />
              </IconSocials>
            </Contact>
            <Contact>
              <IconSocials
                href="https://www.twitch.tv/gustavo_coder"
                target="_blank"
              >
                <img src={IconTwitch} alt="Ícone Twitch" />
              </IconSocials>
            </Contact>
          </ContactsGroup>
        </SocialContacts>
      </ContainerContacts>
    </>
  );
};

export default Contacts;
