// Usando states em campos (exemplo básico de input controlado)
'use client'; // Indica que este componente é um Client Component (necessário para usar hooks como useState)
// Importa o hook useState do React
import { useState } from "react";
const Page = () => {
    // Define o estado inicial para o campo de entrada
    // `nameInput` armazena o valor digitado no input
    // `setNameInput` é a função usada para atualizar o valor do estado
    const [nameInput, setNameInput] = useState('');
    // Função chamada quando o botão é clicado
    const handleBtnClick = () => {
        // Exibe o valor atual de `nameInput` em um alerta
        alert(nameInput);
    }
    return (
        // Container principal da página, configurado para ocupar a tela inteira
        <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
            {/* Campo de entrada de texto */}
            <input 
                type="text" // Define o tipo como texto
                className="border border-black p-3 text-xl text-black" // Estilização do campo
                placeholder="Digite seu nome" // Texto exibido quando o campo está vazio
                value={nameInput} // Define o valor do campo como o estado `nameInput`
                onChange={e => setNameInput(e.target.value)} // Atualiza o estado com o valor digitado
            />         
            {/* Exibe o valor atual do campo */}
            <p>Seu nome é: {nameInput}</p>

            {/* Botão que exibe o valor do campo em um alerta */}
            <button 
                onClick={handleBtnClick} // Chama a função `handleBtnClick` ao clicar
                className="bg-blue-500 text-white p-3 rounded-sm mt-4" // Estilização do botão
            >
                Mostrar valor do campo
            </button>
        </div>
    );
};
export default Page;