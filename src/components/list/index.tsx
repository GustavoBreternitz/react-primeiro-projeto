import Item from "./item";
import style from './list.module.scss';
import {iTarefas} from '../../types/iTarefa';

function List({tarefas}: {tarefas: iTarefas[]}) {
    return(
        <aside className={style.listaTarefas}>
            <ul>
                {tarefas.map((item, index)=>(
                    <Item 
                        key={index}
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                    />
                ))}
            </ul>
        </aside>
    );
}

export default List;