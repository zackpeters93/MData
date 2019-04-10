const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 3000;

// In lieu of dotenv
var user= "test";
var pass= "test";
var dbName= "LRMTC19";
var url = 'mongodb://'+ user +':'+ pass +'@localhost:27017/';
// var url = 'mongodb+srv://'+ user +':'+ pass +'@cluster0-ne0rk.mongodb.net/test?retryWrites=true';
// var access= "mongodb+srv://madmin:<password>@cluster0-ne0rk.mongodb.net/test?retryWrites=true"

let database;

app.use(bodyParser.json());
app.use('/profiles', express.static(path.join(__dirname, 'profiles')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/contacts', (req, res) => {
  const contactsCollection = database.collection('contacts');

  contactsCollection.find({}).toArray((err, docs) => {
    return res.json(docs);
  });
});

app.post('/api/contacts', (req, res) => {
  const user = req.body;

  const contactsCollection = database.collection('contacts');

  contactsCollection.insertOne(user, (err, r) => {
    if (err) {
      return res.status(500).json({ error: 'Error inserting new record.' });
    }

    const newRecord = r.ops[0];

    return res.status(201).json(newRecord);
  });
});

app.get('*', (req, res) => {
  return res.sendFile(path.join(__dirname, '../client/index.html'))
});

// Connect function
MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.log(url);
    console.log('Ruh Roh. Something didnt work: ', err);
  } else {
    console.log('Success!! Connected to Server.');

    app.listen(3000, () => {
      var db = client.db(dbName);
      database = db;
      console.log('Listening on port 3000...');
    });

    client.close
  }
});
