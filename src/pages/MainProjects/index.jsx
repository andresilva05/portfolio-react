import {
  Card,
  CardProjects,
  ImgProject,
  LinkProject,
  TextProject,
  TitleProject,
  TitleProjects,
} from "./styles";
// import MyApproach from "../MyApproach";
import burguerImg from "../../assets/burger 1.png";
import contaUserImg from "../../assets/conta-de-usuario.png";
import burguerMenu from "../../assets/hamburguer.png";
import sorteioImg from "../../assets/cassino.png";
import moedasImg from "../../assets/pilha-de-moedas.png";
import jokenpoImg from "../../assets/pedra-papel-tesoura.png";
import responsivoImg from "../../assets/responsivo.png";
import netflixImg from "../../assets/netflix.png";
import starbuksImg from "../../assets/starbucks.png";
import cronometroImg from "../../assets/crono.png";

// Componente para cada card de projeto
// eslint-disable-next-line react/prop-types
function ProjectCard({ imagem, titulo, descricao, link }) {
  return (
    <Card>
      <ImgProject
        src={imagem}
        alt={titulo}
        style={{ width: "70px", height: "70px" }}
      />
      <TitleProject>{titulo}</TitleProject>
      <TextProject>{descricao}</TextProject>
      {link && link !== "#" && (
        <LinkProject href={link} target="_blank" rel="noopener noreferrer">
          Acessar Projeto
        </LinkProject>
      )}
    </Card>
  );
}

export default function MainProjects() {
  const projects = [
    {
      imagem: burguerImg,
      titulo: "CodeClub Burguer",
      descricao:
        "Este projeto é uma aplicação de pedidos para uma hamburgueria, feita em React. Ele permite adicionar e listar pedidos de clientes, com opção de exclusão. As informações são gerenciadas via requisições HTTP usando axios, e a navegação entre páginas é feita com React Router.",
      link: "https://codeclub-burguer.netlify.app",
    },
    {
      imagem: contaUserImg,
      titulo: "Cadastro Usuários",
      descricao:
        "Cadastro de Usuários é uma aplicação simples onde os dados inseridos (nome e idade) são armazenados dinamicamente em um estado local. A interface permite adicionar novos usuários através de um formulário básico e exibe uma lista dos usuários cadastrados. Cada usuário na lista possui um botão de exclusão para remover o respectivo usuário da lista.",
      link: "https://cadastrousuariosimples.netlify.app/",
    },
    {
      imagem: burguerMenu,
      titulo: "Burguer Menu",
      descricao:
        "Projeto Burguer é uma aplicação simples que demonstra operações básicas usando botões interativos. Os botões permitem mostrar todos os produtos, aplicar desconto, somar os preços totais e filtrar produtos veganos de uma lista fictícia de hambúrgueres, e utiliza formatação de moeda em reais para exibir os preços dos produtos.",
      link: "https://burguermenu.netlify.app/",
    },
    {
      imagem: sorteioImg,
      titulo: "Dev Sorteio",
      descricao:
        "O Sorteador de Números Aleatórios é uma aplicação web simples desenvolvida com HTML, CSS e JavaScript. A aplicação permite que o usuário escolha dois números e, em seguida, sorteie um número aleatório dentro do intervalo definido por esses dois números.",
      link: "https://deevsorteaador.netlify.app/",
    },
    {
      imagem: moedasImg,
      titulo: "Conversor de Moedas",
      descricao:
        "O Conversor de Moedas é uma aplicação web desenvolvida com HTML, CSS e JavaScript que permite aos usuários converter o valor do Real Brasileiro (BRL) para diferentes moedas estrangeiras, como Dólar Americano (USD), Libra Esterlina (GBP), Euro (EUR) e Bitcoin (BTC).",
      link: "https://conversoumoedas.netlify.app/",
    },
    {
      imagem: jokenpoImg,
      titulo: "JokenPô",
      descricao:
        "O Jokenpô é uma versão digital do clássico jogo de Pedra, Papel e Tesoura, onde o usuário joga contra a máquina em uma partida rápida e divertida. Desenvolvido com HTML, CSS e JavaScript, o jogo permite ao usuário escolher uma das três opções (Pedra, Papel ou Tesoura) e compete contra a máquina, que faz uma escolha aleatória.",
      link: "https://jokkeenpoo.netlify.app/",
    },
    {
      imagem: responsivoImg,
      titulo: "Projeto Responsivo",
      descricao:
        "O projeto de um site responsivo é uma abordagem de desenvolvimento web que visa criar uma experiência de usuário consistente e agradável em diferentes dispositivos e tamanhos de tela. Utilizando HTML e CSS, o site é projetado para se adaptar dinamicamente às diversas resoluções de tela.",
      link: "https://responsiivoo.netlify.app/",
    },
    {
      imagem: netflixImg,
      titulo: "Netflix",
      descricao:
        "Desenvolvi uma réplica da página de login da Netflix usando HTML, CSS e JavaScript. A página inclui campos de e-mail e senha e botão de login. O design segue o estilo da Netflix, com cores sóbrias e elementos minimalistas, proporcionando uma experiência familiar aos usuários.",
      link: "https://lucent-fenglisu-3c1474.netlify.app/",
    },
    {
      imagem: starbuksImg,
      titulo: "Starbucks",
      descricao: "Descrição ainda não disponível. Projeto em desenvolvimento.",
      link: null,
    },
    {
      imagem: cronometroImg,
      titulo: "Cronômetro",
      descricao: "Descrição ainda não disponível. Projeto em desenvolvimento.",
      link: null,
    },
  ];

  return (
    <div style={{ background: "#191919" }}>
        {/* <MyApproach /> */}
      <TitleProjects id="projetos">Principais Projetos</TitleProjects>
      <CardProjects>
        {projects.map((projeto, index) => (
          <ProjectCard
            key={index}
            imagem={projeto.imagem}
            titulo={projeto.titulo}
            descricao={projeto.descricao}
            link={projeto.link || "#"}
          />
        ))}
      </CardProjects>
    </div>
  );
}
