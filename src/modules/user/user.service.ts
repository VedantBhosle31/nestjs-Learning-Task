import { Injectable } from '@nestjs/common';
import { NewStudent } from './type/student.input';
// import { UpdateUserInput } from './type/update-user.input';
import { Student } from './user.entity.js';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UpdateDescription } from 'typeorm';
import { UpdateStudent } from './type/updateStudent.input';

@Injectable()
export class UserService {
  async getuser(
    id: string
  ) {
    try {
      let student = await Student.findOne({ where: { id: id } })
      return student;

    } catch (e) {
      throw new Error(e)
    }
  }

  async createuser(
    studentinput: NewStudent
  ) {
    try {
      let newuser = new Student;
      newuser.email = studentinput.email
      newuser.name = studentinput.name

      let saveduser = await newuser.save()
      return saveduser
    } catch (error) {
      throw new Error(error)
    }
  }

  async deleteUser(id: string) {
    try {

      let student = await Student.findOne({
        where: { id: id },
      });
      if (!student) {
        throw new Error("User not found!");
      }

      await student.remove();
      return true;
    } catch (error) {
      console.log(error)
      return false;

    }
  }
  async updateUser(
    id: string,
    inputUser: UpdateStudent
  ) {
    try {

      let student = await Student.findOne({
        where: { id: id },
      });
      if (!student) {
        throw new Error("User not found!");
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
