import { useState, useEffect } from "react";
import { Todo } from "@nx-sample/data";


export default function Index() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('/api/todo')
      .then((_) => _.json())
      .then(setTodoList);
  }, []);

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