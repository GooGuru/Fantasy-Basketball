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
        teamName: String!
        teamPoints: Number
    }
    type User {
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

        addPlayer(playerFirstName: String!, playerLastName: String!, playerPoints: Number!, playerPosition: String!, playerteam: String!)

        addTeam(teamName: String!, teamPoints: Number)

        addUser(username: String!, email: String!, password: String!, first: String!, last: String!)

    }
`

module.exports = typeDefs;