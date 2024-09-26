const typeDefs = `
    type League {
        _id: ID
        leagueName: String!
        teams: [Team]
    }
    type Player {
        _id: ID
        playerFirstName: String!
        playerLastName: String!
        playerPoints: Int
        playerPosition: String
        playerTeam: String
    }
    type Team {
        _id: ID
        teamName: String!
        teamPoints: Int
        players: [Player]
    }
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        first: String
        last: String
        leagues: [League]
        teams: [Team]
    }

    type Query {
        leagues: [League]
        players: [Player]
        teams: [Team]
        users: [User]
    }

    type Mutation {
        addLeague(leagueName: String!): League

        addPlayer(playerFirstName: String!, playerLastName: String!, playerPoints: Int!, playerPosition: String!, playerteam: String!): Player

        addTeam(teamName: String!, teamPoints: Int): Team

        addUser(username: String!, email: String!, password: String!, first: String!, last: String!): User

        login(email: String!, password: String!): login
    }
`;

module.exports = typeDefs;
