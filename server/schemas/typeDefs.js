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
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        leagues: [League]
        players: [Player]
        teams: [Team]
        users: [User]
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!, first: String!, last: String!): Auth
        login(email: String!, password: String!): Auth

        addLeague(userId: ID!, leagueId: ID!): User
        addTeamToUser(userId: ID!, teamId: ID!): User

        addPlayer(teamId: ID!, playerId: ID!): Team
        
        addTeamToLeague(leagueId: ID!, teamId: ID!): League        
    }
`;

module.exports = typeDefs;