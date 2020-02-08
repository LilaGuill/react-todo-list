import React, { useState } from "react";

const TodoList = ({ todos, setTodos }) => {
  const todoList = todos.map((todo, index) => {
    let task = todo[0];
    let isChecked = todo[1];

    const handleChange = () => {
      const copyTodo = [...todos]; //copie dans un nouveau tableau
      //si la task est faite elle est barrée
      isChecked ? (copyTodo[index][1] = false) : (copyTodo[index][1] = true);
      //mise a jour du state
      setTodos(copyTodo);
    };

    const remove = () => {
      const copyTodo = [...todos];
      copyTodo.splice(index, 1);
      setTodos(copyTodo);
    };

    return (
      <div className="list" key={index}>
        <input type="checkbox" onChange={handleChange} />
        <div className={isChecked ? "list-item crossed" : "list-item"}>
          {task}
        </div>
        <i onClick={remove} className="fas fa-trash"></i>
      </div>
    );
  });

  return <div className="wrapper-list">{todoList}</div>;
};
export default TodoList;
