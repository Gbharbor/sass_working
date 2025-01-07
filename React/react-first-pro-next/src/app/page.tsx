// Criando o componente Page
function Page() {
    // O componente retorna um único elemento (no caso, uma div com h1 e h3 dentro dela)
    return (
        <div>
            <h1 className="font-bold text-2xl">Hello World</h1>
            <h3>Olá, mundo!</h3>
        </div>
    );
}

// Exportando o componente para que ele seja visível no projeto
export default Page;

/*
Explicações:
- React exige que o componente retorne um único elemento. Por isso usamos uma <div> como elemento pai.
- O código parece ser HTML, mas na verdade é JSX (JavaScript XML), usado no React.
- Para usar Tailwind CSS, substituímos 'class' por 'className'.
- Se não exportarmos o componente (com export default), ele não será acessível e causará erro ao abrir no navegador.

//||ARROW FUNCTION OPTION||\\
const Page = () => {
       return (
        <div>
            <h1 className="font-bold text-2xl">Hello World</h1>
            <h3>Olá, mundo!</h3>
        </div>
    );
}
export default Page;
*/