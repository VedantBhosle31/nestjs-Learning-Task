import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
import { CreateTodo } from './type/create-todo.input';
import { EditTodo } from './type/update-todo.input';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) { }

  @Mutation(() => Todo)
  addElement(@Args('createElement') createElement: CreateTodo
    , @Args('studentID') studentID: string) {
    return this.todoService.addElements(createElement, studentID)
  }

  @Mutation(() => Todo)
  editElements(@Args('editElement') editElements: EditTodo,
    @Args('id') id: string) {
    return this.todoService.editElements(editElements, id)
  }

  @Mutation(() => Todo)
  deleteElements(@Args('id') id: string) {
    return this.todoService.deleteElements(id)
  }

  @Query(() => Todo)
  getElement(@Args('id') id: string) {
    return this.todoService.getElement(id)
  }

}
