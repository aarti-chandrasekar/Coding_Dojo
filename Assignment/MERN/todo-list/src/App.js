import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { AddTodoForm } from './components/AddTodoForm';
import { TodoItem } from './components/TodoItem';

function App() {
  const [todoList, setTodoList] = useState([]);

  // useEffect(() => window.localStorage.setItem("todoList", JSON.stringify(todoList)));
  // useEffect(() => setTodoList(JSON.parse(window.localStorage.getItem("todoList"))));


  const addTodoList = (action) => {
    setTodoList([...todoList,
    {
      action: action,
      isDone: false
    }]);
  }

  const markDoneTodo = (id, isDone) => {
    let newList = [...todoList];
    newList[id].isDone = isDone;
    setTodoList(newList);
  }

  const deleteTodo = (id, isDone) => {
    setTodoList(todoList.filter((val, index) => (index !== id)));
  }


  return (
    <div className="App">
      <AddTodoForm addToList={addTodoList} />

      {todoList.map((item, index) => 
        <TodoItem key={index} id={index} action={item.action} isDone={item.isDone} markDoneTodo={markDoneTodo} deleteTodo={deleteTodo} />
      )}
    </div>
  );
}

export default App;
