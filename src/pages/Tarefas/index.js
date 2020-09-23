import React, {useState, useEffect} from 'react';
import { FiCircle, FiCheckCircle, FiDelete } from "react-icons/fi";

import api from '../../services/api';

import Header from '../../components/Header';
import Input from '../../components/Input';

import { Form, ErrorMessage, Tasks } from './styles';


const Tarefas = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const loadTasks = async () => {
    try {
      const response = await api.get('tarefas');
      console.log('loadTasks', response.data);

      setTasks(response.data);
    } catch (error) {
      console.log('loadTasks error', error);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  async function handleAddTask(e){
    e.preventDefault();

    if(newTask === ""){
      setErrorMessage("Digite a tarefa a ser adicionada")
      return;
    }

    const params = {
      descricao: newTask,
      concluido: false
    };

    try {
      await api.post('tarefas', params);

      loadTasks();
      setNewTask('');
      setErrorMessage('');

    } catch (error) {
      console.log('handleAddTask error', error);
    }

    console.log("form submitted");
  }

  const handleTask = async (task) => {
    const params = {
      ...task,
      concluido: !task.concluido,
    }

    await api.put(`tarefas/${task.id}`, params);

    loadTasks();
  };

  const removeTask = async (task) => {
    await api.delete(`tarefas/${task.id}`);
    loadTasks();
  }

  return (
    <>
      <Header title="Lista de Tarefas" />

      <Form onSubmit={handleAddTask}>
        <Input 
          value={newTask} 
          onChange={e => setNewTask(e.target.value)}
          type="text"
          placeholder="Digite a nova tarefa aqui..." 
        />

        <button type="submit">Criar</button>
      </Form>

      { errorMessage && 
        <ErrorMessage>{errorMessage}</ErrorMessage>
      }

      <Tasks>
        { tasks.map((task) => (
            <div key={task.id}>
              <strong>{task.descricao}</strong>
              <span>
                { task.concluido ? (
                  <>
                    <FiDelete size={22} onClick={() => removeTask(task)} style={{marginRight: 10}} />
                    <FiCheckCircle size={22} onClick={() => handleTask(task)} />
                  </>
                ) : (
                  <FiCircle size={22} onClick={() => handleTask(task)} />
                )}
              </span>
            </div>
          )
        ) }
      </Tasks>
    </>
  )
}

export default Tarefas;
