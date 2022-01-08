import { Controller, Get, Post } from '@nestjs/common';

interface Todo {
  id: string;
  title: string;
}

const todos = [
  { id: 'todo1', title: 'Todo 1' },
  { id: 'todo2', title: 'Todo 2' },
];

@Controller('todo')
export class TodoController {
  @Get()
  findAll(): Todo[] {
    return todos;
  }

  @Post()
  addPost() {
    const newTodo = {
      id: `${Math.floor(Math.random() * 1000)}`,
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
    };
    return newTodo;
  }
}
