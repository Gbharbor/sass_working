"use client";

import { QuestionItem } from "@/components/mod3/c20QuestionItem";
import { Questions } from "@/data/mod3/c20Questions";
import { useState } from "react";

const Page = () => {
   const [currentQuestion, setCurrentQuestion] = useState(0);
   const title = "Quiz de String";

   // Função que será implementada futuramente
   const handleAnswered = (answer: number) => {
      /* TODO: implementar lógica de resposta */
   };

   return (
      <div className="w-full h-screen flex justify-center items-center bg-blue-600">
         <div className="w-full max-w-xl rounded-md bg-white text-black shadow-black">
            {/* Título do quiz */}
            <div className="p-5 font-bold text-2xl border-gray-300">{title}</div>

            {/* Exibição da pergunta atual */}
            <div className="p-5">
               <QuestionItem
                  question={Questions[currentQuestion]}
                  count={currentQuestion + 1}
                  onAnswer={handleAnswered}
               />
            </div>

            {/* Contador de perguntas */}
            <div className="p-5 text-center border-t border-gray-300">
               {currentQuestion + 1} de {Questions.length}{" "}
               {Questions.length > 1 ? "perguntas" : "pergunta"}
            </div>
         </div>
      </div>
   );
};

export default Page;