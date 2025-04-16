import { AutoMap } from '@automapper/classes';
import { InputType, Field, ID } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { UpdateUserInput as IUpdateUserInput } from 'src/core/graphql/graphql';

@InputType()
export class UpdateUserInput implements IUpdateUserInput {
  @Field()
  @AutoMap()
  @ApiProperty({
    description: 'The id of the user',
    example: 1,
  })
  id: number;

  @Field(() => String, { nullable: true })
  @AutoMap()
  @ApiProperty({
    description: 'The first name of the user',
    example: 'John',
  })
  firstName?: string | null;

  @Field(() => String, { nullable: true })
  @AutoMap()
  @ApiProperty({
    description: 'The last name of the user',
    example: 'Doe',
  })
  lastName?: string | null;

  @Field(() => String, { nullable: true })
  @AutoMap()
  @ApiProperty({
    description: 'The username for the user',
    example: 'johndoe123',
  })
  userName?: string | null;

  @Field(() => String, { nullable: true })
  @AutoMap()
  @ApiProperty({
    description: 'The email for the user',
    example: 'johndoe123@gmail.com',
  })
  email?: string | null;

  @Field(() => String, { nullable: true })
  @AutoMap()
  @ApiProperty({
    description: 'The password for the user',
    example: 'Admin@123',
  })
  password?: string | null;
}
