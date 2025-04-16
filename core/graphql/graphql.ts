
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateUserInput {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
}

export interface UpdateUserInput {
    id: number;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    userName?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export interface UserOutput {
    id: string;
    firstName: string;
    lastName: string;
    userName: string;
    createdAt: DateTime;
    createdBy: string;
    updatedBy: string;
    deletedAt?: Nullable<DateTime>;
}

export interface IQuery {
    getUser(id: number): UserOutput | Promise<UserOutput>;
}

export interface IMutation {
    createUser(input: CreateUserInput): UserOutput | Promise<UserOutput>;
    updateUser(input: UpdateUserInput): UserOutput | Promise<UserOutput>;
}

export type DateTime = any;
type Nullable<T> = T | null;
