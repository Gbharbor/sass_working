// Usando states no tempo (exemplo básico de contador que incrementa de 2 em 2)
////State Updater:
'use client'; // Indica que este componente é um Client Component (necessário para usar hooks como useState)
// Importa o hook useState do React
import { useState } from "react";
const Page = () => {
    // Define o estado inicial com useState
    // `count` é o valor atual do estado, começando em 0
    // `setCount` é a função usada para atualizar o estado
    const [count, setCount] = useState(0);

    // Função que será chamada quando o botão for clicado
    const handleBtnClick = () => {
       // Atualiza o estado `count` somando 2 ao valor atual
       setCount(count + 2);
       setCount(c => c + 2);
       setCount(c => c + 2); //seria 6 , but 
       setCount(25); //sempre vai priorizar esse, por ser o ultimo.
    }
    return (
        // Container principal da página, configurado para ocupar a tela inteira
        <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl"> 
            {/* Exibe o valor atual de `count` */}
            <p>{count}</p>
            
            {/* Botão que, ao ser clicado, chama a função `handleBtnClick` */}
            <button 
                onClick={handleBtnClick} // Passa a função de clique como referência
                className="bg-blue-500 text-white p-3 rounded-sm" // Estilização do botão
            >
                +2 {/* Texto exibido no botão */}
            </button>
        </div>
    );
}
export default Page;