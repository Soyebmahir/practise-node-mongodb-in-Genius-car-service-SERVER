const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');

const app =express()
const port = process.env.PORT || 5000;

//middleware
app.use(cors())
app.use(express.json()) //without this we cant parse data we get from req.body



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.y63bj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("Genius car DB connected");
  // perform actions on the collection object
  client.close();
});


app.get('/',(req,res)=>{
    res.send('preparing for backend')
})
app.listen(port,()=>{
    console.log('listening to port',port);
})