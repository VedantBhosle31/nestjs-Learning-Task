import { InputType, Field, Int, PartialType } from '@nestjs/graphql';


@InputType()
export class EditTodo {

  @Field()
  done: string;

  @Field()
  pending: string;
}
