import { Injectable } from '@nestjs/common';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { Student } from './student.entity';
import { UpdateStudent } from './type/updateStudent.input';
import { NewStudent } from './type/student.input';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async getuser(id: string) {
    try {
      let student = await Student.findOne({ where: { id: id } });
      return student;
    } catch (e) {
      throw new Error(e);
    }
  }

  async createuser(studentinput: NewStudent) {
    try {
      let newuser = new Student();
      newuser.email = studentinput.email;
      newuser.name = studentinput.name;

      let saveduser = await newuser.save();
      return saveduser;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteUser(id: string) {
    try {
      let student = await Student.findOne({
        where: { id: id },
      });
      if (!student) {
        throw new Error('User not found!');
      }

      await student.remove();
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async updateUser(id: string, inputUser: UpdateStudent) {
    try {
      let student = await Student.findOne({
        where: { id: id },
      });
      if (!student) {
        throw new Error('User not found!');
      }

      if (inputUser.name != null) {
        student.name = inputUser.name;
      }

      if (inputUser.email != null) {
        student.email = inputUser.email;
      }

      await student.save();
      return student;
    } catch (error) {
      throw new Error(error);
    }
  }
}
