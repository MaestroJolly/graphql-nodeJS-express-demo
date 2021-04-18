"use strict";

const app = require('express')();
const { graphqlHTTP } = require('express-graphql');
const { appConfig } = require('./config');

app.use('/graphql', graphqlHTTP);

app.get('/', (req, res) => {
    res.json({
        api: "Version 1.0",
        message: "Graphql server with NodeJS and Express JS..."
    });
});

app.listen(appConfig.port, () => {
    console.log(`Application is listening to port ${appConfig.port}...`)
})