export const typeDefs = `#graphql
   type Game {
    id: ID!
    titulo: String!
    plataforma:[String!]!
    analises: [Analise!]
   }
   type Analise{
    id: ID!
    avaliacao: Int!
    conteudo: String!
    autor: Autor!
    game: Game!
   }
   type Autor {
    id:ID!
    nome: String!
    verificado: Boolean!
    analises: [Analise!]
   }
   type Query {
    games: [Game]
    game(id: ID!): Game
    analises:[Analise]
    analise(id:ID!) : Analise
    autores:[Autor]
    autor(id:ID!): Autor
   }
   type Mutation{
    addGame(game: AddGameInput!): Game
    deleteGame(id:ID!):[Game]
    updateGame(id:ID!, edits:EditGameInput): Game

   }
   input AddGameInput{
    titulo: String!
    plataforma: [String!]!
   }
   input EditGameInput {
    titulo: String,
    plataforma: [String!]
   }
`