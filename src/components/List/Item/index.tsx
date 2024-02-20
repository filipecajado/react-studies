import { ITarefa } from '../../../types/tarefas';
import style from '../List.module.scss';

interface Props extends ITarefa{
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}


export default function Item({tarefa, tempo, completado, selecionado, id, selecionaTarefa }: Props){
    
    return(
        <div className={` ${style.item} ${selecionado ? style.itemSelecionado : ""} `} onClick={() => selecionaTarefa({
            tarefa,
            tempo,
            completado,
            selecionado,
            id
        })}>
            <h3> {tarefa} </h3>
            <span> {tempo} </span>
        </div>
    )
}