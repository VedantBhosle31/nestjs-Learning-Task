import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { Student } from './user.entity';

import { UpdateStudent } from './type/updateStudent.input';
import { NewStudent } from './type/student.input';

export class UserResolver {
  constructor(private readonly userService: UserService) { }

  @Query(() => [Student])
  getuser(@Args('id') id: string) {
    return this.userService.getuser(id)
  }

  @Mutation(() => Student)
  createuser(@Args('studentinput') studentinput: NewStudent) {
    return this.userService.createuser(studentinput)
  }

  @Mutation(() => Boolean)
  deleteUser(@Args('id') id: string) {
    return this.userService.deleteUser(id)
  }

  @Mutation(() => Student)
  updateUser(@Args('id') id: string,
    @Args('inputuser') inputuser: UpdateStudent) {
    return this.userService.updateUser(id, inputuser)
  }
}
