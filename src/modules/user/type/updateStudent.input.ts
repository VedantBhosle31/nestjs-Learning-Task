import { first } from 'rxjs';
import * as studentInput from './student.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
class UpdateStudent {
    @Field()
    name: string;

    @Field()
    email: string;
}
export { UpdateStudent }