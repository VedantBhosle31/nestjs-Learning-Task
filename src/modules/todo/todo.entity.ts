import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseEntity, Column, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from '../user/user.entity';

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
    cascade: true
  })
  @Field(() => Student)
  user: Student;


}

