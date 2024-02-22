import { ITarefa } from '../../../types/tarefas';
import style from '../List.module.scss';

interface Props extends ITarefa{
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}


export default function Item({tarefa, tempo, completado, selecionado, id, selecionaTarefa }: Props){
    
    return(
        <div className={` ${style.item} ${selecionado ? style.itemSelecionado : ""} ${completado ? style.itemCompletado : ""} `} 
        onClick={() => !completado && selecionaTarefa({
            tarefa,
            tempo,
            completado,
            selecionado,
            id
        })}>
            <h3> {tarefa} </h3>
            <span> {tempo} </span>
            {completado && <span className={style.concluido}> </span>}
        </div>
    )
}