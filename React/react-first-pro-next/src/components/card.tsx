/* 1. **Exemplo Básico: Props Obrigatórias e Opcionais**
Aqui você verá como uma prop opcional (`author`) influencia o comportamento do componente.*/


import React from "react";

type CardProps = {
  phrase: string;
  author?: string; // O `author` é opcional
};

export const Card = ({ phrase, author }: CardProps) => {
  return (
    <div className="w-96 border p-4">
      <h3 className="text-xl font-bold italic">{phrase}</h3>
      {author && <p className="text-right text-sm">— {author}</p>}
      {!author && <p className="text-right text-sm">— Autor Desconhecido</p>}
    </div>
  );
};

// Testando o componente:
const App = () => {
  return (
    <div className="flex flex-col gap-4">
      <Card phrase="A persistência é o caminho do êxito." author="Charles Chaplin" />
      <Card phrase="O sucesso nasce do querer, da determinação e persistência." />
    </div>
  );
};

export default App;

/* O que acontece:
- Se você passar o `author`, ele aparece.
- Se não passar, exibe "Autor Desconhecido".


### 2. **Exemplo: Condicional Simples com `&&`**
Usar o operador `&&` para renderizar elementos apenas se uma condição for verdadeira.*/

const CardWithAnd = ({ phrase, author }: CardProps) => {
  return (
    <div className="w-96 border p-4">
      <h3 className="text-xl font-bold italic">{phrase}</h3>
      {author && <p className="text-right text-sm">— {author}</p>}
    </div>
  );
};


<CardWithAnd phrase="A simplicidade é a sofisticação final." />;

/* 3. **Exemplo: Operador Ternário para Mais Controle**
Se quiser personalizar a exibição dependendo de `author`, use o operador ternário.*/

const CardWithTernary = ({ phrase, author }: CardProps) => {
  return (
    <div className="w-96 border p-4">
      <h3 className="text-xl font-bold italic">{phrase}</h3>
      <p className="text-right text-sm">
        {author ? `— ${author}` : "— Autor Desconhecido"}
      </p>
    </div>
  );
};

/* 4. **Exemplo Avançado: Renderização Condicional com Estilos Dinâmicos**
Vamos alterar o estilo dependendo se o `author` foi passado.*/


const CardWithDynamicStyles = ({ phrase, author }: CardProps) => {
  return (
    <div
      className={`w-96 border p-4 ${
        author ? "border-green-500" : "border-red-500"
      }`}
    >
      <h3 className="text-xl font-bold italic">{phrase}</h3>
      {author ? (
        <p className="text-right text-sm">— {author}</p>
      ) : (
        <p className="text-right text-sm text-gray-500">— Autor Desconhecido</p>
      )}
    </div>
  );
};

<CardWithDynamicStyles phrase="A coragem é a resistência ao medo." author="Mark Twain" />;
<CardWithDynamicStyles phrase="A coragem é a resistência ao medo." />;

/* #### Resultado:
- Se o `author` estiver presente, a borda será verde.
- Se não estiver, a borda será vermelha.
*/