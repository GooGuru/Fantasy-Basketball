const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');


const server = new ApolloServer({

});


const db = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 3001;

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Connected to http://localhost:${PORT}`);
    });
})


