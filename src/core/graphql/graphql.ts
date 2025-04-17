
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateUserInput {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
}

export class UpdateUserInput {
    id: number;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    userName?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export class User {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
    deletedAt?: Nullable<Date>;
}

export class UserResponse {
    status: boolean;
    message?: Nullable<string>;
    data?: Nullable<User>;
}

export abstract class IQuery {
    abstract getUser(id: number): Nullable<UserResponse> | Promise<Nullable<UserResponse>>;
}

export abstract class IMutation {
    abstract createUser(input: CreateUserInput): UserResponse | Promise<UserResponse>;

    abstract updateUser(input: UpdateUserInput): UserResponse | Promise<UserResponse>;

    abstract deleteUser(id: number): boolean | Promise<boolean>;
}

type Nullable<T> = T | null;
