"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./page.module.css";

const poems = [
  [
    "O povo implora pela frase do dia,",
    "E Uccelli responde com apatia.",
    "Enquanto o povo esta em desespero,",
    "Uccelli se diverte em um puteiro.",
    "Algum dia as frases voltarão?",
    "Não!!! Enquanto Uccelli continuar sendo um cuzão."
  ],
  [
    "Quando uccelli anunciou:",
    '"A palavra do dia voltou"',
    "Todo mundo acreditou.",
    "Já se foram 2 semanas",
    "E o povo ele engana.",
    "Nenhuma palavra bacana...",
    "É um puta sacana!",
    "\n",
    "Todos os aliados",
    "Ficaram revoltados",
    "Agora estão armados.",
    "E buscam justiça adoidado.",
    "\n",
    "Uccelli é asqueroso",
    "Um covarde criminoso",
    "Ele é o homem mais maldoso!"
  ],
  [
    "Estudei o dia inteiro,",
    "trabalhei igual pedreiro.",
    "Para me animar:",
    "A palavra do dia iria bastar",
    "\n",
    "É uma grande baixaria,",
    "estou implorando pelo seu retorno.",
    "Mas vc é um tremendo corno!",
    "Mais uma vez não teve palavra do dia"
  ],
  [
    "Eu fiz um site,",
    "E duvido alguem dar copyright.",
    "Equanto isso Uccelli foge do fight,",
    "e a palavra do dia não veio nessa night",
    "\n",
    "Mais um dia, mais uma tristeza,",
    "como pode tanta avareza ?",
    "Tantas palavras em sua cabeça",
    "como pode ser que a situação permaneça ?",
    "\n",
    "Espero que você pereça,",
    "e de todas as palavras você esqueça.",
    "Se eu nao tiver a palavra do dia",
    "É melhor você ficar de vigia..."
  ],
  [
    "Uccelli ainda me ignora,",
    "eu tenho que estudar agora,",
    "não entendo transferência de calor,",
    "alguém me ajuda pelo amor!",
    "\n",
    "Uccelli não tem compaixão",
    "Para se curar dessa condição,",
    "basta uma única ação:",
    "Palavra do dia é a solução",
    "\n",
    "Algum dia ele deixará de ser arrombado ?",
    "Acho que sabemos o resultado",
    "Ele e o Rian são iguais",
    "Ambos são tremendos animais!"
  ],
  [
    "Estou em um restaurante",
    "pedi um lamen com laxante",
    "e como sobremesa:",
    "A palavra do dia seria uma beleza",
    "\n",
    "Mas Uccelli não se importa,",
    "to indo ai na sua porta.",
    "Vê se não afina.",
    "Isso é punição divina!",
    "\n",
    "Três oitão na cabeça",
    "'sobe em cima da mesa'",
    "farei com que você pereça.",
    "Virou minha sobremesa!!!"
  ]
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPoem = () => {
    setCurrentIndex((prev) => (prev + 1) % poems.length);
  };

  const prevPoem = () => {
    setCurrentIndex((prev) => (prev - 1 + poems.length) % poems.length);
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Dedicado a Lucas Uccelli</h1>

      <main className={styles.carousel}>
        <div className={styles.poemContainer}>
          <button className={`${styles.arrow} ${styles.left}`} onClick={prevPoem}>
            <ChevronLeft size={32} />
          </button>

          <div>
            {/* Título para o poema */}
            <h2 className={styles.poemTitle}>Poesia de escárnio {currentIndex + 1}</h2>

            {/* Poema */}
            <ol className={styles.poem}>
              {poems[currentIndex].map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ol>
          </div>

          <button className={`${styles.arrow} ${styles.right}`} onClick={nextPoem}>
            <ChevronRight size={32} />
          </button>
        </div>
      </main>
    </div>
  );
}
