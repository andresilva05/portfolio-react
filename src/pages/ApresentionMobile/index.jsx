import { useState, useEffect } from "react";
import { Texto } from "./styles"; // importa do styles.js

export function Apresentacao() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <Texto>
      {isMobile
        ? "Sou Wilson André, desenvolvedor full stack. Vamos tirar seu projeto do papel?"
        : "Olá, eu sou o Wilson André – apaixonado por tecnologia e dedicado a transformar ideias em experiências digitais únicas. Minha jornada no desenvolvimento começou com uma base sólida em HTML, CSS e JavaScript, e evoluiu para dominar frameworks modernos como React e React Native, além do universo Node.js. Recentemente, concluí o curso DevClub FullStack PRO (140 horas, ministrado por Rodolfo Mori, com conclusão em 30/12/2024), onde aprofundei meus conhecimentos em tecnologias essenciais e ferramentas como Git, GitHub, Figma, Insomnia, Docker e Beekepper. Essa experiência me permitiu desenvolver projetos front-end incríveis – incluindo meu próprio portfólio – e integrar APIs de forma dinâmica, consolidando uma visão completa do ciclo de desenvolvimento web. Além disso, iniciei minha trajetória acadêmica em Sistemas para Internet no Instituto Federal de Araraquara, onde mergulhei em C e lógica de programação. Apesar de ter interrompido temporariamente meus estudos devido a um acidente, estou determinado a retornar e continuar evoluindo. Estou sempre em busca de novas técnicas e tendências para criar soluções criativas, eficientes e responsivas que encantem os usuários. Vamos transformar suas ideias em realidade?"}
    </Texto>
  );
}
