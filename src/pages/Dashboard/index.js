import React, {useState, useEffect, useCallback, useMemo} from 'react';

import api from '../../services/api';
import Header from '../../components/Header';

import { Resumo } from './styles';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  // const loadTasks = async () => {
  //   const response = await api.get('tarefas');
  //   setTasks(response.data);
  // }

  const loadTasks = useCallback(
    async () => {
      const response = await api.get('tarefas');
      setTasks(response.data);
      console.log("loadTasks", response);
    }, []
  );

  useEffect(() => {
    loadTasks()
  }, [loadTasks]);

  const tasks_concluded_qtd = useMemo(
    () => {
      const filtered = tasks.filter(task => {
        return task.concluido === true;
      })

      return filtered.length;
    }, [tasks]
  )

  const tasks_qtd = useMemo(
    () => tasks.length, [tasks]
  )

  return (
    <>
      <Header title={"Resumo"} />   

      <Resumo>
        { tasks_qtd - tasks_concluded_qtd === 0 ? (
          <h2>Parabéns! Você concluiu todas as tarefas!</h2>
        ) : (
          <h2>Existem <b id="teste">{tasks_qtd - tasks_concluded_qtd}</b> tarefas pendentes.</h2>
        )}
        
        <p><b>Total de tarefas:</b> {tasks_qtd}</p> 
        <p><b>Tarefas concluídas:</b> {tasks_concluded_qtd}</p> 
      </Resumo>
    </>
  )
}

export default Dashboard;
