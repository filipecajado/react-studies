import { useState } from 'react';
import Item from './Item';
import style from './List.module.scss';

function List() {
    const [tarefas, setTarefas] = useState( [
        {
            tarefa: 'React',
            tempo: '02:00:00'
        },
        {
            tarefa: 'Javascript',
            tempo: '01:00:00'
        },
        {
            tarefa: 'TypeScript',
            tempo: '03:00:00'
        }
    ])
    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                setTarefas([...tarefas, {tarefa: "Estudar estados", tempo: "01:00:00"}])
            }}>
                Estudos do dia
            </h2>
            <div>
                {tarefas.map((item, index) => (
                    <Item 
                    key={index}
                    {...item} />
                ))}
            </div>
        </aside>
    )
}

export default List;