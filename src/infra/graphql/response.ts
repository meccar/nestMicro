import { Field, ObjectType } from '@nestjs/graphql';

export interface ClassType<T = any> {
  new (...args: any[]): T;
}

@ObjectType()
export class BaseResponse {
  @Field()
  status: boolean;
}

@ObjectType()
export class ErrorResponse extends BaseResponse {
  @Field()
  message: string;
}

export function SuccessResponse<T>(classRef: ClassType<T>) {
  @ObjectType({ isAbstract: true })
  abstract class SuccessResponseType extends BaseResponse {
    @Field(() => classRef, { nullable: true })
    data: T;

    @Field({ nullable: true })
    message?: string;
  }
  return SuccessResponseType;
}
