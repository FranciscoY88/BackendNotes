const PORT = 8002
const URLMongo = "mongodb+srv://FranciscoY88:uD9DFjJOJVod8mh0vdmh8@cluster0.xswqa.mongodb.net/notes-app?retryWrites=true&w=majority"
const Note = require("./models/Notes");
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const Notes = require("./models/Notes");
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', function(req, res) {
    res.send('hello world');
  });

app.get('/notes', function(req, res){
  Note.find().then((notitas) => {
    return res.status(200).send(notitas)
  })
});

app.post('/notes', function(req, res){
  let nota = new Note({
    "title":req.body.title,
    "description":req.body.description
  });
  const noteSave = nota.save();
  return res.status(200).send(noteSave);
});

app.put('/notes/:id',async function(req, res){
  const _id = req.params.id;
  let nota = {
    "title":req.body.title,
    "description":req.body.description
  }
  await Note.updateOne({_id},nota,{new:true});
  return res.status(200).send({'mensaje':'notita guardada'});
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



