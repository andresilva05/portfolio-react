import { useEffect, useState, useRef } from "react";
import { AnimationText } from "./styles";

export default function AnimationAboutMe() {
  const [text, setText] = useState(""); // Inicia com texto vazio
  const [isVisible, setIsVisible] = useState(false); // Controle de visibilidade
  const sectionRef = useRef(null); // Referência à seção

  const fullText = "Sobre Mim";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 } // Ativa quando 50% da seção estiver visível
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect(); // Limpa o observador ao desmontar
  }, []);

  useEffect(() => {
    if (isVisible) {
      let index = 0;
      const interval = setInterval(() => {
        setText(fullText.slice(0, index + 1));
        index++;
        if (index === fullText.length) clearInterval(interval);
      }, 150);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <div ref={sectionRef}>
      <AnimationText isVisible={isVisible}>{text}</AnimationText>
    </div>
  );
}
