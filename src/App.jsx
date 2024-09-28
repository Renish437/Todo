import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [listTodo, setlistTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== "") {
      setlistTodo([...listTodo, inputText]);
    }
  };
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setlistTodo([...newListTodo]);
  };
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">TODO</h1>
        <hr />
        {listTodo.map((li, i) => {
          return (
            <TodoList key={i} index={i} item={li} deleteItem={deleteListItem} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
