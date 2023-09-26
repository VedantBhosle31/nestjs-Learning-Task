import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { Student } from './user.entity';
import { CreateUserInput } from './type/student.input';
import { UpdateStudent } from './type/updateStudent.input';

@Resolver(() => Student)
export class UserResolver {
  constructor(private readonly userService: UserService) { }


}
