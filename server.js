
const express = require('express');
const app = express();
const routes = require('./routes/routes');
const ctrlr = require('./controllers/controllers');

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

const target = process.env.PORT;
const dbName = process.env.DB_USERNAME;
const dbPw = process.env.DB_PASSWORD;
const dbCluster = process.env.DB_CLUSTER;



const dbURI = `mongodb+srv://${dbName}:${dbPw}@cluster0.gadhouz.mongodb.net/${dbCluster}?retryWrites=true&w=majority`
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((r)=> {
    console.log('connected to database');
    
    app.listen(5000 || target, () => {
        console.log('listening on port 5000');
    })
    
}).catch((err) => {
    console.log('db error. server.js:15: '+err);
});

app.use(cors());

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(ctrlr.cors_use);

app.use(routes);



