/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  ActionButton,
  Card,
  Container,
  Header,
  ImgProject,
  LinkProject,
  ProjectActions,
  ProjectInfo,
  TextProject,
  TitleProject,
  TitleProjects,
  ImgLogo,
  ModalOverlay,
  ModalContent,
  FullImg,
  ProjectsContainer,
  Subtitle,
} from "./styles";
import burguerImg from "../../assets/img-codeClubBurguer.jpg";
import contaUserImg from "../../assets/conta-de-usuario.png";
import burguerMenu from "../../assets/hamburguer.png";
import sorteioImg from "../../assets/cassino.png";
import moedasImg from "../../assets/pilha-de-moedas.png";
import jokenpoImg from "../../assets/pedra-papel-tesoura.png";
import responsivoImg from "../../assets/responsivo.png";
import netflixImg from "../../assets/netflix.png";
import starbuksImg from "../../assets/starbucks.png";
import cronometroImg from "../../assets/crono.png";
import devburguerImg from "../../assets/img-devburguer.jpg";
import bibliotecaImg from "../../assets/biblioteca.png";
import sistemaProdutosImg from "../../assets/sistema-produtos.png";
import { Globe } from "phosphor-react";
import { MarkGithubIcon } from "@primer/octicons-react";

function ProjectCard({ imagem, titulo, descricao, link, linkGit }) {
  return (
    <Card>
      <ImgProject
        src={imagem}
        alt={titulo}
        style={{ width: "70px", height: "70px" }}
      />
      <TitleProject>{titulo}</TitleProject>
      <TextProject>{descricao}</TextProject>

      {/* Exibir link para acessar o projeto */}
      {link && link !== "#" && (
        <LinkProject href={link} target="_blank" rel="noopener noreferrer">
          Acessar Projeto
        </LinkProject>
      )}

      {/* Verifica se o projeto é o "DevBurguer" e exibe dois botões de GitHub */}
      {titulo === "DevBurguer" &&
        linkGit &&
        linkGit.length > 0 &&
        linkGit.map((gitLink, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <ActionButton key={index}>
            <a href={gitLink} target="_blank" rel="noopener noreferrer">
              <MarkGithubIcon size={32} style={{ verticalAlign: "initial" }} />
            </a>
          </ActionButton>
        ))}

      {/* Exibir um único botão de GitHub para outros projetos */}
      {titulo !== "DevBurguer" && linkGit && (
        <ActionButton>
          <a href={linkGit} target="_blank" rel="noopener noreferrer">
            <MarkGithubIcon size={32} style={{ verticalAlign: "initial" }} />
          </a>
        </ActionButton>
      )}
    </Card>
  );
}

export default function MainProjects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      imagem: devburguerImg,
      titulo: "DevBurguer",
      descricao:
        "Um sistema completo para gerenciamento de pedidos em um restaurante, desenvolvido com React no frontend e Node.js + Express no backend. Utiliza Sequelize para a integração com PostgreSQL, garantindo um fluxo eficiente entre cliente e servidor. O projeto segue boas práticas de código e é projetado para ser escalável e intuitivo.",
      link: null,
      linkGit: [
        "https://github.com/andresilva05/devburguer-interface",
        "https://github.com/andresilva05/devburguer-api",
      ],
    },
    {
      imagem: burguerImg,
      titulo: "CodeClub Burguer",
      descricao:
        "Este projeto é uma aplicação de pedidos para uma hamburgueria, feita em React. Ele permite adicionar e listar pedidos de clientes, com opção de exclusão. As informações são gerenciadas via requisições HTTP usando axios, e a navegação entre páginas é feita com React Router.",
      link: "https://codeclub-burguer.netlify.app",
      linkGit: "https://github.com/andresilva05/DESAFIO-CODECLUB-BURGUER",
    },
    {
      imagem: contaUserImg,
      titulo: "Cadastro Usuários",
      descricao:
        "Cadastro de Usuários é uma aplicação simples onde os dados inseridos (nome e idade) são armazenados dinamicamente em um estado local. A interface permite adicionar novos usuários através de um formulário básico e exibe uma lista dos usuários cadastrados. Cada usuário na lista possui um botão de exclusão para remover o respectivo usuário da lista.",
      link: "https://cadastrousuariosimples.netlify.app/",
      linkGit: "https://github.com/andresilva05/GERENCIADOR-USUARIOS",
    },
    {
      imagem: burguerMenu,
      titulo: "Burguer Menu",
      descricao:
        "Projeto Burguer é uma aplicação simples que demonstra operações básicas usando botões interativos. Os botões permitem mostrar todos os produtos, aplicar desconto, somar os preços totais e filtrar produtos veganos de uma lista fictícia de hambúrgueres, e utiliza formatação de moeda em reais para exibir os preços dos produtos.",
      link: "https://burguermenu.netlify.app/",
      linkGit: "https://github.com/andresilva05/PROJETO-BURGUER",
    },
    {
      imagem: bibliotecaImg,
      titulo: "Sistema de Biblioteca em C",
      descricao:
        "Projeto desenvolvido em C para gerenciamento de livros. Permite cadastrar, listar, excluir e buscar livros, além de gerar relatórios sobre estoque e preços. Aplicação feita em modo console, estruturada em múltiplos arquivos e com foco em organização e boas práticas de código.",
      link: null,
      linkGit: "https://github.com/andresilva05/sistema-controle-biblioteca",
    },
    {
      imagem: sistemaProdutosImg,
      titulo: "Sistema de Cadastro de Produtos (Java POO)",
      descricao:
        "Um sistema feito em Java para cadastrar e organizar produtos, unindo lógica, classes e boas práticas de POO.",
      link: null,
      linkGit:
        "https://github.com/andresilva05/FACULDADE-2-SEMESTRE/tree/main/poo/src/aulas/pre_atividade_avaliativa_23_10/Exercicio",
    },
    {
      imagem: sorteioImg,
      titulo: "Dev Sorteio",
      descricao:
        "O Sorteador de Números Aleatórios é uma aplicação web simples desenvolvida com HTML, CSS e JavaScript. A aplicação permite que o usuário escolha dois números e, em seguida, sorteie um número aleatório dentro do intervalo definido por esses dois números.",
      link: "https://deevsorteaador.netlify.app/",
      linkGit: "https://github.com/andresilva05/DEV-SORTEADOR",
    },
    {
      imagem: moedasImg,
      titulo: "Conversor de Moedas",
      descricao:
        "O Conversor de Moedas é uma aplicação web desenvolvida com HTML, CSS e JavaScript que permite aos usuários converter o valor do Real Brasileiro (BRL) para diferentes moedas estrangeiras, como Dólar Americano (USD), Libra Esterlina (GBP), Euro (EUR) e Bitcoin (BTC).",
      link: "https://conversoumoedas.netlify.app/",
      linkGit: "https://github.com/andresilva05/PROJETO-CONVERTEMOEDAS",
    },
    {
      imagem: jokenpoImg,
      titulo: "JokenPô",
      descricao:
        "O Jokenpô é uma versão digital do clássico jogo de Pedra, Papel e Tesoura, onde o usuário joga contra a máquina em uma partida rápida e divertida. Desenvolvido com HTML, CSS e JavaScript, o jogo permite ao usuário escolher uma das três opções (Pedra, Papel ou Tesoura) e compete contra a máquina, que faz uma escolha aleatória.",
      link: "https://jokkeenpoo.netlify.app/",
      linkGit: "https://github.com/andresilva05/PROJETO-PEDRA-PAPEL-TESOURA",
    },
    {
      imagem: responsivoImg,
      titulo: "Projeto Responsivo",
      descricao:
        "O projeto de um site responsivo é uma abordagem de desenvolvimento web que visa criar uma experiência de usuário consistente e agradável em diferentes dispositivos e tamanhos de tela. Utilizando HTML e CSS, o site é projetado para se adaptar dinamicamente às diversas resoluções de tela.",
      link: "https://responsiivoo.netlify.app/",
      linkGit: "https://github.com/andresilva05/PRIMEIRO-PROJETO-RESPONSIVO",
    },
    {
      imagem: netflixImg,
      titulo: "Netflix",
      descricao:
        "Desenvolvi uma réplica da página de login da Netflix usando HTML, CSS e JavaScript. A página inclui campos de e-mail e senha e botão de login. O design segue o estilo da Netflix, com cores sóbrias e elementos minimalistas, proporcionando uma experiência familiar aos usuários.",
      link: "https://lucent-fenglisu-3c1474.netlify.app/",
      linkGit: "https://github.com/andresilva05/INTERFACE-NETFLIX",
    },
    {
      imagem: starbuksImg,
      titulo: "Starbucks",
      descricao: "Descrição ainda não disponível. Projeto em desenvolvimento.",
      link: null,
      linkGit: null,
    },
    {
      imagem: cronometroImg,
      titulo: "Cronômetro",
      descricao: "Descrição ainda não disponível. Projeto em desenvolvimento.",
      link: null,
      linkGit: null,
    },
  ];

  return (
    <div style={{ background: "#ffffff" }}>
      <TitleProjects id="projetos">Meu trabalho</TitleProjects>
      <Subtitle>Uma coleção de projetos nos quais trabalhei.</Subtitle>

      <ProjectsContainer>
        <Container>
          {projects.map((project, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <Header key={index}>
              {" "}
              {/* Ajusta a largura do card */}
              <ImgLogo
                src={project.imagem}
                alt={`Logo do projeto ${project.titulo}`}
                onClick={() => {
                  setModalOpen(true);
                  setSelectedImage(project.imagem); // Define a imagem do projeto no modal
                }}
              />
              <ProjectInfo>
                <h3>{project.titulo}</h3>
                <p>{project.descricao}</p>
              </ProjectInfo>
              <ProjectActions>
                <ActionButton>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe size={32} />
                    </a>
                  )}
                </ActionButton>

                <ActionButton>
                  {Array.isArray(project.linkGit) &&
                  project.linkGit.length > 1 ? (
                    // Se houver mais de um link, renderiza dois ícones com textos abaixo, na mesma linha
                    project.linkGit.map((gitLink, index) => (
                      <div
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        key={index}
                        style={{
                          display: "inline-flex",
                          flexDirection: "column",
                          alignItems: "center",
                          marginRight: "20px",
                        }}
                      >
                        <a
                          href={gitLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ display: "block", marginBottom: "5px" }} // Espaço entre ícone e texto
                        >
                          <MarkGithubIcon
                            size={32}
                            style={{ verticalAlign: "initial" }}
                          />
                        </a>
                        <span style={{ fontSize: "12px", color: "#555" }}>
                          {index === 0 ? "Front-end" : "Back-end"}{" "}
                          {/* Texto dinâmico */}
                        </span>
                      </div>
                    ))
                  ) : (
                    // Caso contrário, renderiza um único ícone
                    <a
                      href={project.linkGit}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MarkGithubIcon
                        size={32}
                        style={{ verticalAlign: "initial" }}
                      />
                    </a>
                  )}
                </ActionButton>
              </ProjectActions>
            </Header>
          ))}

          {modalOpen && (
            <ModalOverlay onClick={() => setModalOpen(false)}>
              <ModalContent>
                <FullImg
                  src={selectedImage} // Exibe a imagem do projeto no modal
                  alt="Imagem ampliada"
                  className="full-image"
                />
              </ModalContent>
            </ModalOverlay>
          )}
        </Container>
      </ProjectsContainer>
    </div>
  );
}
