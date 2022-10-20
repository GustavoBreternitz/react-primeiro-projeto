import style from '../list.module.scss';
import {iTarefas} from '../../../types/iTarefa';

interface Props extends iTarefas {
    setSelecionado: (tarefaSelecionada: iTarefas) => void
}

export default function Item({
    tarefa,
    tempo,
    completado,
    selecionado,
    id,
    setSelecionado
}: Props) {
    return(
        <li className={style.item} onClick={() => setSelecionado(    
            {tarefa,
            tempo,
            completado,
            selecionado,
            id})}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    );
}