const express = require('express');
const cors = require("cors");
const ObjectId = require("mongodb").ObjectId;
const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config()
const app = express()

const port = process.env.PORT || 5000;


//use middleware
app.use(cors());
app.use(express.json())


//monir
//OenJ3isYvCDwUcrE

//MongoDB
const uri = "mongodb+srv://monir:OenJ3isYvCDwUcrE@geniuscarusers.jkay7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
  try{
    await client.connect();
    const userCollection = client.db("GeniusCar").collection("user");
    const servicesCollection = client.db("ServicesCollection").collection("services");

    //POST API
    app.post('/user', async(req, res)=>{
      const newUser = req.body;
      res.send(newUser);
      const result = await userCollection.insertOne(newUser)

    })
    
    app.get('/serviceId', async (req, res)=>{
      const id = await req.body.serviceId;
      console.log(id);
    })
    //GET API
    app.get('/', async(req, res)=>{
      res.send("Server is running . Dont Worry!!")
    })
    app.get('/users', async (req, res)=>{
      const query = {};
      const cursor = userCollection.find(query);
      const users = await cursor.toArray();
      res.send(users)
    })

    app.get('/services', async (req, res)=>{
      const cursor = servicesCollection.find({});
      const services = await cursor.toArray();
      res.send(services)
    })

    //Delete API
    app.delete('/user/:id', async (req,res)=>{
      const id =req.params.id;
      const query = {_id: ObjectId(id)};
      const result = await userCollection.deleteOne(query);
      res.send(result)
    })

  }
  finally{

  }

}
run().catch(console.dir)


app.listen(port, ()=>{
    console.log("Server is running");
})