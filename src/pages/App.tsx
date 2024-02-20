import { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Forms from '../components/Forms'
import List from '../components/List';
import style from './App.module.scss';
import { ITarefa } from '../types/tarefas';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa ){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false
      
      }
      )));
  }
  return (
    <div className={style.AppStyle}>
      <Forms setTarefas={setTarefas}/>
      <List
      selecionaTarefa={selecionaTarefa} 
      tarefas={tarefas}
       />
      <Cronometro/>
    </div>
  );
}

export default App;
