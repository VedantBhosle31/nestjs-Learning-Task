import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Todo } from '../todo/todo.entity';

@Entity('Student')
@ObjectType('Student')
export class Student extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @Field({ nullable: true })
  @Column('text', {
    nullable: true,
    unique: true
  })
  email: string;



  @OneToMany(() => Todo, (todos) => todos.user, {
    cascade: true,
  })
  @Field(() => [Todo], { nullable: true })
  todos: Todo[];
}
