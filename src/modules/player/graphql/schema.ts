export default `#graphql
scalar Date

type Mutation {
  Player_createOne(createInput: PlayerCreateInput!): Player!
  Player_updateOne(updateInput: PlayerUpdateInput!): Player!
  Player_deleteOne(deleteInput: PlayerDeleteInput!): Boolean!
}

type Query {
  Player_findOne(findOneInput: PlayerFindOneInput!): Player
  Player_findMany(findManyInput: PlayerFindManyInput!): [Player]!
}

type Player {
  uuid: String!
  name: String!
}

input PlayerCreateInput {
  name: String!
}

input PlayerFindOneInput {
  where: PlayerSearchFieldsInput
}

input PlayerFindManyInput {
  skip: Int
  take: Int
  order: PlayerOrderByInput
  where: PlayerSearchFieldsInput
}

input PlayerOrderByInput {
  name: OrderByEnum
}

input PlayerSearchFieldsInput {
  uuid: String
  name: String
}

input PlayerUpdateInput {
  uuid: String!
  name: String
}

input PlayerDeleteInput {
  uuid: String!
}
`