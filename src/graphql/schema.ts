import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export enum LanguageCode {
  en = 'en',
  fr = 'fr'
}

export interface Mutation {
  Player_createOne: Player;
  Player_deleteOne: Scalars['Boolean'];
  Player_updateOne: Player;
}


export type MutationPlayer_createOneArgs = {
  createInput: PlayerCreateInput;
};


export type MutationPlayer_deleteOneArgs = {
  deleteInput: PlayerDeleteInput;
};


export type MutationPlayer_updateOneArgs = {
  updateInput: PlayerUpdateInput;
};

export enum OrderByEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

export interface Player {
  name: Scalars['String'];
  uuid: Scalars['String'];
}

export interface PlayerCreateInput {
  name: Scalars['String'];
}

export interface PlayerDeleteInput {
  uuid: Scalars['String'];
}

export interface PlayerFindManyInput {
  order?: InputMaybe<PlayerOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerSearchFieldsInput>;
}

export interface PlayerFindOneInput {
  where?: InputMaybe<PlayerSearchFieldsInput>;
}

export interface PlayerOrderByInput {
  name?: InputMaybe<OrderByEnum>;
}

export interface PlayerSearchFieldsInput {
  name?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['String']>;
}

export interface PlayerUpdateInput {
  name?: InputMaybe<Scalars['String']>;
  uuid: Scalars['String'];
}

export interface Query {
  Player_findMany: Array<Maybe<Player>>;
  Player_findOne?: Maybe<Player>;
}


export type QueryPlayer_findManyArgs = {
  findManyInput: PlayerFindManyInput;
};


export type QueryPlayer_findOneArgs = {
  findOneInput: PlayerFindOneInput;
};



export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;