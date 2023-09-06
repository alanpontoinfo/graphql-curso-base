import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'


//dados

import db from './d_base.js'

// types

import { typeDefs } from './schema.js'


// resolvers

const resolvers = {
    Query: {
        games() {
            return db.games
 
        },
        game(_, args){

            return db.games.find((game) => game.id === args.id)
        },
        autores() {
            return db.autores
        },
        autor(_, args) {
            return  db.autores.find((autor)=> autor.id === args.id)
        },
        analises(){
            return db.analises
        },
        analise(_, args){
           return db.analises.find((analise)=> analise.id === args.id)
        }
    },
    Game: {
        analises(parent){
            return db.analises.filter((r)=> r.game_id === parent.id)
        }
    },
    Analise: {
        autor(parent){
            return db.autores.find((a)=> a.id ===parent.id)
        },
        game(parent){
            return db.games.find((g)=> g.id === parent.id)
        }
    },
    Autor:{
        analises(parent){
            return db.analises.filter((r)=> r.autor_id === parent.id)
        }
    },
    Mutation: {
        addGame(_, args){
            let game = {
                ...args.game,
                id: Math.floor(Math.random() * 10000).toString()
            }
            db.games.push(game)
            return game
        },
        deleteGame(_, args){
            db.games = db.games.filter((g)=> g.id !== args.id)
        
        return db.games
    },
    updateGame(_, args){
        db.games=db.games.map((g) =>{
            if (g.id === args.id) {
                return {...g, ...args.edits}
            }
            return g
        })
        return db.games.find((g)=> g.id === args.id)
    }
  }
}

//server setup

const server = new ApolloServer({
    typeDefs,
    resolvers

})

const { url } = await startStandaloneServer(server,{
    listen : {port:4000}
})

console.log(`Server funcionando em :${url}`)