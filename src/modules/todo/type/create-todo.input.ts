import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTodo {

  @Field()
  done: string;

  @Field()
  pending: string;

  @Field()
  user_id: string;
}





