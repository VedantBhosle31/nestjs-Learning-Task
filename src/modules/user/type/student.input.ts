import { InputType, Int, Field } from '@nestjs/graphql';


@InputType()
class NewStudent {
  @Field()
  name: string;

  @Field()
  email: string;

}
export { NewStudent }

export function CreateUserInput(CreateUserInput: any) {
  throw new Error('Function not implemented.');
}
