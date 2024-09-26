const typeDefs = `
    type League {
        _id: ID
        leagueName: String!
    }
    type Player {
        _id: ID
        playerFirstName: String!
        playerLastName: String!
        playerPoints: Int!
        playerPosition: String!
        playerteam: String!
    }
    type Team {
        _id: ID
        teamName: String!
        teamPoints: Int
    }
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        first: String!
        last: String!
    }
    type Auth {
    token: ID!
    user: User
    }

    type Query {
        leagues: [League]!
        Players: [Player]!
        Teams: [Team]!
        Users: [User]!
        login: [login]
    }

    type Mutation {
        addLeague(leagueName: String!): League

        addPlayer(playerFirstName: String!, playerLastName: String!, playerPoints: Int!, playerPosition: String!, playerteam: String!): Player

        addTeam(teamName: String!, teamPoints: Int): User

        addUser(username: String!, email: String!, password: String!, first: String!, last: String!): Auth

        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;
