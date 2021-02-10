import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
// components
import Header from './Components/Header';
import ToDoList from './Components/ToDoList';
import ToDoForm from './Components/ToDoForm';
import Container from 'react-bootstrap/Container';

import API from './API';

const App = () => {
  const [ toDoList, setToDoList ] = useState([]);
  const [ needUpdate, setNeedUpdate] = useState([0]);

  const api = new API("http://127.0.0.1:8000");

  const handleToggle = (id) => {
    let task = toDoList.filter(task => {return task.id == id})[0];
    task.complete = !task.complete;
    api.modifyToDo(task).then(() => {setNeedUpdate([needUpdate[0]+1]);});
  };

  const handleFilter = () => {
    api.deleteToDos().then(() => {setNeedUpdate([needUpdate[0]+1]);});
  }

  const addTask = (task) => {
    api.addToDo({task: task}).then(() => {setNeedUpdate([needUpdate[0]+1]);});
  }

  useEffect(() => {
    api.fetchToDo().then(todos => setToDoList(todos));
  }, needUpdate);

  return (
    
    <div className="App">
      <Header/>
      <Container>
        <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
        <ToDoForm addTask={addTask}/>
      </Container>
    </div>
  );
}

export default App;
