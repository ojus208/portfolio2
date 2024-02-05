// mongodb.js

import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI


let client
let clientPromise


  client = new MongoClient(uri)
  clientPromise = client.connect()
  // console.log(clientPromise)

export default clientPromise
