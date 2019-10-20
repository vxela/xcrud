'use strict';

require('dotenv').load();

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const tunnel = require('tunnel-ssh');
const passport = require('passport');
const dbConfig = require('./dbconfig');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 5002;

const projectRoute = require('./project-api/project-route');

app.set('secretKey', process.env.secretKey); //Set Key for json lulxzzzzzzz xxx  web token
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

if (process.env.NODE_ENV == 'production') {
    tunnel(dbConfig.config, error => {
        if (error) {
            console.log('SSH connection error: ' + error);
        } else {
            console.log('SSH connection successful');
        }
        mongoose.connect(
            `mongodb://127.0.0.1:27017/TaskMe`,
            {
                auth: { authSource: 'admin' },
                user: process.env.MONGO_USER,
                pass: process.env.MONGO_PASSWORD,
                useNewUrlParser: true
            }
        ); //Using template literals for subbing in variable

        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'DB connection error:'));
        db.once('open', () => {
            // Connect
            console.log('DB connection to DigitalOcean successful');
        });
    });
} else {
    mongoose.connect(
        `mongodb://${process.env.MLAB_USER}:${
            process.env.MLAB_PASSWORD
        }@ds123513.mlab.com:23513/taskme`,
        { useNewUrlParser: true }
    );
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'DB connection error:'));
    db.once('open', () => {
        // Connect
        console.log('DB connection to MLAB successful');
    });
}

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);


app.use(passport.initialize());

app.get('/', (req, res) => {
    res.send({ express: 'You are now connected to the Backend' });
});

app.use('/project', projectRoute);

app.listen(port, () => console.log(`Listening on port: ${port}`));
