import Item from "./item";
import style from './list.module.scss';
import {iTarefas} from '../../types/iTarefa';

interface Props {
    tarefas: iTarefas[],
    setSelecionado: (tarefaSelecionada: iTarefas) => void
}

function List({tarefas, setSelecionado}: Props) {
    return(
        <aside className={style.listaTarefas}>
            <ul>
                {tarefas.map((item, index)=>(
                    <Item 
                        id={item.id}
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                        completado={item.completado}
                        selecionado={item.selecionado}
                        setSelecionado = {setSelecionado}
                    />
                ))}
            </ul>
        </aside>
    );
}

export default List;