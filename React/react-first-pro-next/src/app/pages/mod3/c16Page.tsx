"use client"
import { TodoItem } from "@/types/mod3/c16";
import { useState } from "react"
const Page = () => {
    const [itemInput, setIteminput] = useState(''); 
    const [list, setList] = useState<TodoItem[]>([
        {id: 1, label: 'Fazer dever de casa', checked: true},
        {id: 2, label: 'Fazer dever de casa', checked: false}
    ]); 
    const handleAddButton = () => {
        if(itemInput.trim() !== '') return; 
        setList([...list, {id: list.length + 1, label: itemInput, checked: false}]);
        setIteminput('');
    };
    const deleteItem = (id: number) => {
        alert('Deletando item: ');
        setList(
            list.filter((item) => item.id !== id)
        );
    };
    const ToggleItem = (id: number) => {
        let newList = [...list];
        for(let i in newList) {
            if(newList[i].id === id) {
                newList[i].checked = !newList[i].checked;
            };
        };
        setList(newList);
    };
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
                {list.map((item) => (
                    <li key={item.id}>
                        <input onClick={()=>ToggleItem(item.id)} type="checkbox" checked={item.checked} className="w-6 h-6 mr-6" />
                        {item.label} - <button onClick={() => deleteItem(item.id)} className="hover:underline">[deletar]</button>
                    </li>
                ))};
            </ul>
        </div>
    );
}; 