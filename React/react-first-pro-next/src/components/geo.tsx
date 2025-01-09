// Criando e exportando os componentes Square e Circle de forma organizada

// Componente Square - exportado como default
// Representa um quadrado estilizado com texto inspirador dentro
const Square = () => {
    return (
        <div className="w-52 h-52 bg-orange-700 text-white">
            Texto qualquer inspirador.
        </div>
    );
};

// Componente Circle - exportado de forma específica
// Representa um círculo estilizado com texto dentro
export const Circle = () => {
    return (
        <div className="w-52 h-52 bg-orange-800 text-white rounded-full">
            Círculo
        </div>
    );
};

// Exportando o componente Square como default
// Isso permite que ele seja importado com qualquer nome em outros arquivos
export default Square;

/* 
Explicações adicionais:

1. JSX (JavaScript XML):
   - O código dentro das funções parece HTML, mas é JSX, uma sintaxe usada pelo React para criar interfaces de usuário.

2. Tailwind CSS:
   - Para estilização, usamos classes utilitárias do Tailwind CSS diretamente nos elementos JSX.

3. Exportação:
   - Square é exportado como default, o que permite sua importação com qualquer nome.
   - Circle é exportado de forma nomeada, exigindo que seja importado exatamente como definido.

4. Boas práticas:
   - Sempre use nomes de componentes iniciando com letra maiúscula.
   - Mantenha comentários explicativos para facilitar a manutenção do código.
*/