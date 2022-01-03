import { useState } from "react";

interface Todo {
  id:string;
  title: string;
}

export default function Index() {
  const [todoList, setTodoList] = useState<Todo[]>([
    { id:'todo1', title: 'Todo 1' },
    { id:'todo2', title: 'Todo 2' },
  ]);

  const addTodo = ()=> {
    setTodoList((prev)=>[
      ...prev,
      {
        id:`todo:${Math.floor(Math.random() * 1000)}`,
        title: `New todo ${Math.floor(Math.random() * 1000)}`,
      },
    ]);
  }

  return (
    <div>
      <h1>TodoList</h1>
      <ul>
        {todoList.map((todo) => (
          <li
            key={todo.id}
            className='todo'
            >
              {todo.title}
          </li>
        ))}
      </ul>
      <button id={'add-todo'} onClick={addTodo}>
          Add Todo
        </button>
    </div>
  );
}