// Importando os componentes Square e Circle de uma forma organizada e explicativa
// Aqui, Square foi importado como um componente default, podendo ser renomeado, e Circle foi importado de forma específica.
// Isso permite flexibilidade no uso e organização dos componentes dentro do projeto.

//import { Square } from "@/components/square"
//import { Circle } from "@/components/circle"  
//import { Person } from "@/components/Person";
//import { GeoForm } from "@/components/geoform";
import {Card} from "@/components/card";

// Criando o componente Page como uma arrow function
const Page = () => {
    // O componente retorna um único elemento (no caso, uma div com outros elementos dentro dela)
    return (
        <div>
            {/* Cabeçalho principal com classe Tailwind CSS para estilização */}
            <h1 className="font-bold text-2xl">Hello World</h1>

            {/* Subtítulo para complementar o cabeçalho principal */}
            <h3>Olá, mundo!</h3>

            {/* Renderizando os componentes Square e Circle dentro da página */}
            {/* Renderizando os componentes GeoForm, tirando a necessidade de usar o Square e cirle.*/}
            {/*<GeoForm />*/} 
            {/*<Square />*/} 
            {/*<Circle />*/} 
            {/*<Person
               name = "Elon musk"
               avatar="dasda.com"
               roles={["CEO1","ceo space"]}
            />  
            <Person
               name = "Elon musk"
               avatar="dasda.com"
               roles={["CEO1","ceo space"]}
            /> */}
            
               <h1 className="text-3xl font-bolt italic">Frase de efeito</h1>
               <p className="text-right text-sm">Autor Desconhecido</p>
               <Card phrase="Alguma frase top" author="Coach de milhoes" /> 
            
        </div>           
    );
};

// Exportando o componente para ser usado em outras partes do projeto
// A exportação default permite que o componente seja importado com um nome à escolha do desenvolvedor
export default Page;

/* 
Explicações adicionais:

1. JSX (JavaScript XML):
   - O código dentro da função parece HTML, mas é JSX, uma sintaxe usada pelo React para criar interfaces de usuário.

2. Retorno único:
   - React exige que um componente retorne um único elemento pai. Por isso, usamos a <div> para envolver os elementos internos.

3. Tailwind CSS:
   - Quando usamos Tailwind CSS, a propriedade `class` do HTML é substituída por `className` no JSX.

4. Importações:
   - Podemos importar componentes de duas formas: default (como Square) e específica (como Circle).
   - O componente default pode ser renomeado no momento da importação, mas componentes específicos devem manter o nome original.

5. Organização de componentes:
   - É uma boa prática organizar os componentes e comentários no código para facilitar a leitura e manutenção.
*/