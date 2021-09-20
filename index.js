const PORT = 8002
const URLMongo = "mongodb+srv://FranciscoY88:uD9DFjJOJVod8mh0vdmh8@cluster0.xswqa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const Note = require("./models/Notes");
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
/*
app.get('/', function(req, res) {
    res.send('hello world');
  });
*/
app.get('/notes', function(req, res){
  Note.find().then((notitas) => {
    return res.status(200).send(notitas)
  })
});

mongoose.connect(URLMongo,(err) => {
    if (err) {
      console.log("Database connection failed");
    } else {
      // DATABASE
      console.log("Database connected");
      app.listen(PORT, (err) => {
        if (err) {
          console.log("Server connection failed");
        } else {
          // SERVER
          console.log(`Server on port ${PORT}`);
        }
      });
    }
  });



