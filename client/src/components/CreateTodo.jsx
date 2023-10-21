import React from 'react'
import { useState, useEffect } from 'react';

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
               body: JSON.stringify ({
                    todo: {"TODO_NAME": newTodo}
               })
          })
          if(!response.ok) {
               throw new Error("You fucked up!");
          } else {
          const data = await response.json();
          console.log(data);
          setTodos([...todos, data]);
          setNewTodo("")
          }
     }
     async function removeTodo() {

     }

  return (
    <div>
     <h1>Add Task:</h1>
     <form action="post" onSubmit={(e) => addTodo(e)}>
     <input type="text" value={newTodo} onChange={(event) => setNewTodo(event.target.value)}/>
     <button>Add Task</button>
     </form>
     {todos?.map((todo,index)=> (
          <div key={index}>
               <p>{todo.TODO_NAME}</p>
               <button onClick={() => removeTodo(index)}>x</button>
          </div>
     ))}
    </div>
  )
}
