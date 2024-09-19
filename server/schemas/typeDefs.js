const typeDefs = `
    type League {
        _id: ID
        leagueName: String!
    }
    type Player {
        _id: ID
        playerFirstName: String!
        playerLastName: String!
        playerPoints: Number!
        playerPosition: String!
        playerteam: String!
    }
    type Team {
        _id: ID
        teamName: String!
        teamPoints: Number
    }
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        first: String!
        last: String!
    }

    type Query {
        leagues: [League]!
        Players: [Player]!
        Teams: [Team]!
        Users: [User]!
    }

    type Mutation {
        addLeague(leagueName: String!): League

        addPlayer(playerFirstName: String!, playerLastName: String!, playerPoints: Number!, playerPosition: String!, playerteam: String!): Player

        addTeam(teamName: String!, teamPoints: Number): Team

        addUser(username: String!, email: String!, password: String!, first: String!, last: String!): User

    }
`

module.exports = typeDefs;