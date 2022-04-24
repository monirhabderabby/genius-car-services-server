const express = require('express');
const cors = require("cors");
require("dotenv").config()
const app = express()

const port = process.env.PORT || 5000;


//use middleware
app.use(cors());
app.use(express.json())


//monir
//OenJ3isYvCDwUcrE

//MongoDB

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://monir:OenJ3isYvCDwUcrE@geniuscarusers.jkay7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("MongoDB is Connected");
//   client.close();
});


//
app.get('/', (req, res)=>{
    res.send(users)
})

app.listen(port, ()=>{
    console.log("Server is running");
})