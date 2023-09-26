import { InputType, Int, Field } from '@nestjs/graphql';


@InputType()
class NewStudent {
  @Field()
  name: string;

  @Field()
  email: string;

}
export { NewStudent }


