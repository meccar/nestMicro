import { AutoMap } from '@automapper/classes';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
export class UserOutput {
  @Field(() => ID)
  @AutoMap()
  @ApiProperty()
  id: string;

  @Field()
  @AutoMap()
  @ApiProperty()
  firstName: string;

  @Field()
  @AutoMap()
  @ApiProperty()
  lastName: string;

  @Field()
  @AutoMap()
  @ApiProperty()
  userName: string;

  @Field()
  @AutoMap()
  @ApiProperty()
  createdAt: Date;

  @Field()
  @AutoMap()
  @ApiProperty()
  createdBy: string;

  @Field()
  @AutoMap()
  @ApiProperty()
  updatedBy: string;

  @Field(() => Date, { nullable: true })
  @AutoMap()
  @ApiProperty()
  deletedAt?: Date | null | undefined;
}
