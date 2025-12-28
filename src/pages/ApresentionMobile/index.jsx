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
        : "Desenvolvedor web em formação, criando aplicações no front-end com JavaScript e React, com base em back-end usando Node.js e Java, focado em construir soluções bem estruturadas e evoluir para atuação full stack."}
    </Texto>
  );
}
