import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { Student } from './student.entity';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { UpdateStudent } from './type/updateStudent.input';
import { NewStudent } from './type/student.input';

@Resolver(() => Student)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) { }

  @Query(() => Student)
  getuser(@Args('id') id: string) {
    return this.studentService.getuser(id);
  }

  @Mutation(() => Student)
  createuser(@Args('studentinput') studentinput: NewStudent) {
    return this.studentService.createuser(studentinput);
  }

  @Mutation(() => Boolean)
  deleteUser(@Args('id') id: string) {
    return this.studentService.deleteUser(id);
  }

  @Mutation(() => Student)
  updateUser(
    @Args('id') id: string,
    @Args('inputuser') inputuser: UpdateStudent,
  ) {
    return this.studentService.updateUser(id, inputuser);
  }
}
