import style from '../List.module.scss';

export default function Item({tarefa, tempo}: { tarefa: string, tempo: string}){
    
    return(
        <div className={style.item}>
            <h3> {tarefa} </h3>
            <span> {tempo} </span>
        </div>
    )
}