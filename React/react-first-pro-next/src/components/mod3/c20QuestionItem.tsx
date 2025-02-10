// Importa o tipo Question do arquivo c20question para garantir que os dados da questão tenham a estrutura correta
import { Question } from "@/types/mod3/c20question";  
import { useState } from "react"; // Importa o useState para gerenciar o estado da resposta selecionada

// Define os tipos das propriedades (Props) esperadas pelo componente
type Props = {
   question: Question; // Objeto da questão com pergunta, opções e resposta correta
   count: number; // Número da questão na sequência
   onAnswer: (answer: number) => void; // Função chamada quando o usuário escolhe uma resposta
}

// Componente que exibe uma questão e suas opções de resposta
export const QuestionItem = ({ question, count, onAnswer }: Props) => {
   // Estado para armazenar a resposta selecionada pelo usuário
   const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

   // Função chamada quando o usuário clica em uma resposta
   const checkQuestion = (key: number) => {
      if (selectedAnswer === null) { // Só permite escolher uma resposta uma única vez
         setSelectedAnswer(key); // Atualiza o estado com a resposta selecionada
         onAnswer(key); // Chama a função onAnswer para processar a escolha do usuário
      }
   };

   return (
      <div>
         {/* Exibe a pergunta */}
         <div className="text-3xl font-bold mb-5">{count}. {question.question}</div>

         {/* Lista de opções de resposta */}
         <div>
            {question.options.map((item, key) => {
               // Verifica se a opção é a resposta correta
               const isCorrect = selectedAnswer !== null && key === question.answer;
               // Verifica se a opção é a resposta errada escolhida pelo usuário
               const isWrong = selectedAnswer !== null && key === selectedAnswer && selectedAnswer !== question.answer;
               
               return (
                  <div 
                     key={key} // Define uma chave única para cada opção de resposta
                     onClick={() => checkQuestion(key)} // Chama a função ao clicar na opção
                     className={`
                        border px-3 py-2 rounded-md text-lg mb-4 bg-blue-100 border-blue-300 
                        ${selectedAnswer !== null ? 'cursor-auto' : 'cursor-pointer hover:opacity-60'}
                        ${isCorrect ? 'bg-green-100 border-green-300' : ''} // Muda a cor para verde se for correta
                        ${isWrong ? 'bg-red-100 border-red-300' : ''} // Muda a cor para vermelho se for errada
                     `}
                  >
                     {item} {/* Exibe o texto da opção */}
                  </div>
               );
            })}
         </div>
      </div>
   );
}