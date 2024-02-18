import React from 'react';
import Button from '../Button';

function List() {
    const tarefas = [
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
    ]
    return (
        <aside>
            <h2>
                Estudos do dia
            </h2>
            <div style={{ marginLeft: '20px' }}>
                {tarefas.map((item, index) => (
                    <div key={index}>
                        <h3> {item.tarefa} </h3>
                        <span> {item.tempo} </span>
                    </div>
                ))}
            </div>
        </aside>
    )
}

export default List;