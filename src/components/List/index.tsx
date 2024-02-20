import { ITarefa } from '../../types/tarefas';
import Item from './Item';
import style from './List.module.scss';

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function List(props : Props) {

    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
            }}>
                Estudos do dia
            </h2>
            <div>
                {props.tarefas.map((item, index) => (
                    <Item 
                    selecionaTarefa={props.selecionaTarefa}
                    key={item.id}
                    {...item} />
                ))}
            </div>
        </aside>
    )
}

export default List;