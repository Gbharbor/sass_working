//array em states : exibir
"use client"
import { TodoItem } from "@/types/mod3/c12";
import { useState } from "react"
const Page = () => {
    const [list, setList] = useState<TodoItem[]>([
        { label: 'Fazer dever de casa', checked: false},
        { label: 'Fazer dever de casa', checked: false}
    ]); //eu preciso criar um novo array, para poder fazer alteracao, ou seja usar os .push, .pop n ira funcionar na state.
    return (
        <div className="w-screen h-screen flex flex-col items-center text-2xl">
            <h1 className="text-4xl mt-5">Lista de Tarefas</h1>

            <div>
                <input 
                    type="text"
                    placeholder="o que deseja fazer?"
                    className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
                />
                <button>Adicionar</button>
            </div>
            <ul className="w-full max-w-lg list-disc pl-5">
                {list.map(item => (
                    <li>{item.label} - <button className="hover:underline">[deletar]</button></li>
                ))}
            </ul>
        </div>
    );
};