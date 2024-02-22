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

  function finalizarTarefa(){
    if(selecionado){
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id){
          return{
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa
      }))
    }
  }
  return (
    <div className={style.AppStyle}>
      <Forms setTarefas={setTarefas}/>
      <List
      selecionaTarefa={selecionaTarefa} 
      tarefas={tarefas}
       />
      <Cronometro 
      selecionado={selecionado}
      finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
}

export default App;
