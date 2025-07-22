import React, { useEffect, useState } from "react";
import "./index.css";

const TODO_List = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [item, setItem] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleAddTodo = () => {
    if (item.trim() === "") return;
    const itemdetail = {
      id: todoList.length + 1,
      text: item.trim(),
      completed: false,
    };
    setTodoList((prev) => [...prev, itemdetail]);
    setItem("");
  };

  const handleToggleCompleted = (id) => {
    setTodoList(
      todoList.map((t) => {
        if (t.id === id)
          return {
            ...t,
            completed: !t.completed,
          };
        else {
          return t;
        }
      })
    );
  };

  const handleDelete = (id) => {
    setTodoList(
      todoList.filter((t) => {
        return t.id !== id;
      })
    );
  };

  useEffect(() => {
    const storedTODO = JSON.parse(localStorage.getItem("todoItem"));
    if (storedTODO) setTodoList(storedTODO);
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (hasLoaded) localStorage.setItem("todoItem", JSON.stringify(todoList));
  }, [todoList, hasLoaded]);

  console.log(todoList);

  return (
    <div className="main-container">
      <h1 style={{ marginBottom: "2rem" }}>TODO Machine Coding</h1>
      <div className="container">
        <input
          type="text"
          placeholder="Enter Todo"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          autoFocus
        />
        <button onClick={handleAddTodo} className="add-btn">
          Add
        </button>
      </div>
      <div className="list-container">
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id}>
              <div className="content">
                <input
                  className="checkbox-style"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleCompleted(todo.id)}
                />
                <span className={todo.completed ? "strike-through" : ""}>
                  {todo.text}
                </span>
              </div>
              <button onClick={() => handleDelete(todo.id)} className="del-btn">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TODO_List;
