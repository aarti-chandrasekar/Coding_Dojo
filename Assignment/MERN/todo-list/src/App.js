import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { AddTodoForm } from './components/AddTodoForm';
import { TodoItem } from './components/TodoItem';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isModified, setIsModified] = useState(0);

  useEffect(() => {
    setTodoList(JSON.parse(sessionStorage.getItem("todoList")) || [])
    // alert("On load " + JSON.parse(sessionStorage.getItem("todoList")));
  }, []);

  useEffect(() => {
    // alert("Update - " + isModified);
    if (isModified !== 0) {
      sessionStorage.setItem("todoList", JSON.stringify(todoList));
      // alert("Not first time");
    }
  }, [isModified]);


  const addTodoList = (action) => {
    setTodoList([...todoList,
    {
      action: action,
      isDone: false
    }]);
    setIsModified(isModified + 1);
  }

  const markDoneTodo = (id, isDone) => {
    let newList = [...todoList];
    newList[id].isDone = isDone;
    setTodoList(newList);
    setIsModified(isModified + 1);
  }

  const deleteTodo = (id, isDone) => {
    setTodoList(todoList.filter((val, index) => (index !== id)));
    setIsModified(isModified + 1);
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
