import { AutoMap } from '@automapper/classes';
import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserInput as ICreateUserInput } from 'src/core/graphql/graphql';

@InputType()
export class CreateUserInput implements ICreateUserInput {
  @Field()
  @AutoMap()
  @ApiProperty({
    description: 'The first name of the user',
    example: 'John',
  })
  firstName: string;

  @Field()
  @AutoMap()
  @ApiProperty({
    description: 'The last name of the user',
    example: 'Doe',
  })
  lastName: string;

  @Field()
  @AutoMap()
  @ApiProperty({
    description: 'The username for the user',
    example: 'johndoe123',
  })
  userName: string;

  @Field()
  @AutoMap()
  @ApiProperty({
    description: 'The email for the user',
    example: 'johndoe123@gmail.com',
  })
  email: string;

  @Field()
  @AutoMap()
  @ApiProperty({
    description: 'The password for the user',
    example: 'Admin@123',
  })
  password: string;
}
