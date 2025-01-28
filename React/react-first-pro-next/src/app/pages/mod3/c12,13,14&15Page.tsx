//array em states : exibir, adicionar
"use client"
import { TodoItem } from "@/types/mod3/c12,13,14&15";
import { useState } from "react"
const Page = () => {
    const [itemInput, setIteminput] = useState(''); //responsavel p/ manipular nosso campo
    const [list, setList] = useState<TodoItem[]>([
        { label: 'Fazer dever de casa', checked: true},
        { label: 'Fazer dever de casa', checked: false}
    ]); //eu preciso criar um novo array, para poder fazer alteracao, ou seja usar os .push, .pop n ira funcionar na state.
    const handleAddButton = () => {
        //sempre que for fazer uma alteracao que esta dentro de um state, tem que sempre criar um novo array.
        //copio o array original, e crio o novo item que quero add.
        if(itemInput.trim() !== '') return; //ele verifica se ta vazio, ai p/ na hora a execucao, caso contrario msm q n digite nd iria adicionar ao branco.
        setList([...list, {label: itemInput, checked: false}]);
        setIteminput(''); //ao add ele limpa o campo na hora.
    }
    const deleteItem = (index: number) => {
        alert('Deletando item: ' + index);
        setList(
            list.filter((item, key) => key !== index)
        );//n precisa criar um array novo, pq o proprio filter ja retorna um novo array.
    }
    //marca se fiz a tarefa ou nao
    const ToggleItem = (index: number) => {
        let newList = [...list];
        newList[index].checked = !newList[index].checked;
//        for(let i in newList) {
//            if(index === parseInt(i)) {
//                newList[i].checked = !newList[i].checked;
//            }
        setList(newList);
    }    
    return (
        <div className="w-screen h-screen flex flex-col items-center text-2xl">
            <h1 className="text-4xl mt-5">Lista de Tarefas</h1>
            <div>
                <input 
                    type="text"
                    placeholder="o que deseja fazer?"
                    className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
                    value={itemInput}
                    onChange={e => setIteminput(e.target.value)}
                />
                <button onClick={handleAddButton}>Adicionar</button>
            </div>
            <p className="my-4">{list.length} Items na lista</p>
            <ul className="w-full max-w-lg list-disc pl-5">
                {list.map((item, index) => (
                    <li key={index}>
                        <input onClick={()=>ToggleItem(index)} type="checkbox" checked={item.checked} className="w-6 h-6 mr-6" />
                        {item.label} - <button onClick={() => deleteItem(index)} className="hover:underline">[deletar]</button>
                    </li>
                ))};
            </ul>
        </div>
    );
}; 