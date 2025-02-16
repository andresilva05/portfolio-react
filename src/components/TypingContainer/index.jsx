import { useEffect, useState } from "react"; 
import { TypingContainer } from './styles'; // Importação correta do styled component

export default function TypingAnimation() {
  const [text, setText] = useState(""); // Inicia com texto vazio
  const fullText = "DESENVOLVEDOR FRONT END";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1)); // Atualiza o texto corretamente
      index++;

      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval); // Limpeza do intervalo quando o componente for desmontado
  }, []);

  return <TypingContainer>{text}</TypingContainer>; // Exibe o texto animado
}
