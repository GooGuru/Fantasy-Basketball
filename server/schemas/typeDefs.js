const typeDefs = `
    type League {
        _id: ID
        leagueName: String!
        country: String!
        season: Int!
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

    type Query {
        leagues: [League]!
        Players: [Player]!
        Teams: [Team]!
        Users: [User]!
        getExternalLeagues: [League]!       
    }

    type Mutation {
        addLeague(leagueName: String!): League

        addPlayer(playerFirstName: String!, playerLastName: String!, playerPoints: Int!, playerPosition: String!, playerteam: String!): Player

        addTeam(teamName: String!, teamPoints: Int): Team

        addUser(username: String!, email: String!, password: String!, first: String!, last: String!): User

    }
`;

module.exports = typeDefs;
