import React from "react";
import { useState, useEffect } from "react";

export default function CreateTodo() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  async function addTodo(e) {
    e.preventDefault();
    const response = await fetch("/api/users/1/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: { TODO_NAME: newTodo },
      }),
    });
    if (!response.ok) {
      throw new Error("You fucked up!");
    } else {
      const data = await response.json();
      console.log(data);
      setTodos([...todos, data]);
      setNewTodo("");
    }
  }
  async function removeTodo() {}

  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-y-4">
      <h1 className="text-2xl">Add Task:</h1>
      <form className="space-x-5" action="post" onSubmit={(e) => addTodo(e)}>
        <input
          placeholder="Add a task..."
          className="border-b border-black py-1 px-3"
          type="text"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button className="border border-sky-400 px-3 py-1 rounded-md hover:bg-sky-400 hover:text-white transition">
          Add Task
        </button>
      </form>
      {todos?.map((todo, index) => (
        <div key={index}>
          <p>{todo.TODO_NAME}</p>
          <button onClick={() => removeTodo(index)}>x</button>
        </div>
      ))}
    </div>
  );
}
