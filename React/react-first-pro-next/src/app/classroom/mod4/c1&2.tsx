"use client"

import { useEffect, useState } from "react";

const Page = () => {
   /*
   O useEffect é um hook do React que permite executar efeitos colaterais em componentes funcionais.
   Efeitos colaterais podem incluir:
   
   - Chamadas a APIs externas (requisições HTTP);
   - Manipulação direta do DOM (fora do React);
   - Subscrição e cancelamento de eventos, como websockets;
   - Controle de timers e intervalos.
   
   Ele é executado após a renderização do componente, garantindo que as mudanças de estado ou props
   já tenham sido aplicadas antes da execução do efeito.
   */

   /*
   O useEffect possui três partes principais:
   1. Definição da função que será executada;
   2. Determinação de quando essa função será chamada (dependências);
   3. Definição do que acontece quando o componente for desmontado (cleanup).
   */
 
   const [name, setName] = useState('Gui'); 
   const [age, setAge] = useState(90);
   
   useEffect(() => {
      console.log('Executou o useEffect');
   }, [name]);
   
   /*
   Neste caso, o useEffect será executado sempre que o valor de 'name' for alterado.
   Se quisermos que ele execute apenas na primeira renderização, podemos passar um array vazio []
   como segundo argumento, indicando que não há dependências sendo monitoradas.
   */

   return (
      <div>
         <p>Meu nome é {name} e tenho {age} anos.</p>
         <hr/>
         <button className="border border-blue-600 m-3 p-3" onClick={() => setName('Porto')}>Mudar p/ Porto</button>
         <button className="border border-blue-600 m-3 p-3" onClick={() => setName('Harbor')}>Mudar p/ Harbor</button>
         <button className="border border-blue-600 m-3 p-3" onClick={() => setAge(10)}>Mudar p/ 10 anos</button>
         <button className="border border-blue-600 m-3 p-3" onClick={() => setAge(90)}>Mudar p/ 90 anos</button>
      </div>
   );
};

export default Page;