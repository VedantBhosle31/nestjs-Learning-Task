import { Injectable } from '@nestjs/common';
import { CreateTodo } from './type/create-todo.input';
import { Todo } from './todo.entity';
import { EditTodo } from './type/update-todo.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../student/student.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) { }
  async addElements(createElement: CreateTodo, studentId: string) {
    try {
      const element = new Todo();
      element.done = createElement.done;
      element.pending = createElement.pending;
      const user = await Student.findOne({ where: { id: studentId } });
      element.user = user!;
      return await this.todoRepository.save(element);

    } catch (e) {
      throw new Error(e.message);
    }
  }

  async editElements(editElement: EditTodo, id: string) {
    try {
      const todo = await Todo.findOne({ where: { id: id } });
      if (!todo) throw new Error('Invalid Id');
      if (editElement.done && editElement.pending) {
        todo.done = editElement.done;
        todo.pending = editElement.pending;
      }
      const todoUpdated = await this.todoRepository.save(todo);
      return todoUpdated;
    } catch (e) {
      throw new Error(`error : ${e}`);
    }
  }

  async deleteElements(id: string) {
    try {
      const todo = await Todo.findOne({ where: { id: id } });
      if (!todo) throw new Error('Invalid Id');
      const deleteElement = await this.todoRepository.remove(todo);
      return deleteElement;
    } catch (e) {
      throw new Error(`error : ${e}`);
    }
  }

  async getElement(id: string) {
    try {
      const todo = await this.todoRepository.findOne({ where: { id: id } });
      return todo;
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
