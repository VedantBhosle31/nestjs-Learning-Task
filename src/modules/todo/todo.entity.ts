import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Student } from '../student/student.entity';

@Entity()
@ObjectType()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  done: string;

  @Column()
  @Field()
  pending: string;

  @ManyToOne(() => Student, user => user.todos, {
    cascade: false
  })
  @Field(() => Student)
  user: Student;

}

