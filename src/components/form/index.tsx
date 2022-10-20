import React, { useState } from "react";
import Button from "../button";
import style from './form.module.scss';
import {iTarefas} from '../../types/iTarefa';
import { v4 } from 'uuid';
interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<iTarefas[]>>
}

function Form({setTarefas} : Props){
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");

    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        setTarefas(tarefasAntigas => [...tarefasAntigas, {
            tempo, 
            tarefa,
            completado: false,
            selecionado: false,
            id: v4()
        }])
        setTarefa('');
        setTempo('00:00');
    }

    return(
        <form action="#" className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="study">
                    Estudo
                </label>
                <input 
                    id="study"
                    name="study"
                    type="text"
                    placeholder="O que vamos estudar?"
                    value={tarefa}
                    onChange={evento => setTarefa(evento.target.value)}
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="time">
                    Tempo
                </label>
                <input 
                    type="time"
                    step="1"
                    id="time"
                    name="time"
                    min="00:00:00"
                    max="24:00:00"
                    value={tempo}
                    onChange={evento => setTempo(evento.target.value)}
                />
            </div>
            <Button 
                type="submit"
                texto="Adicionar"
            />
        </form>
    );
}

export default Form;