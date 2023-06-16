//import mysql library
import {MongoClient} from'mongodb';
import { mongoURI } from './secrets.js';
import mysql from "mysql2/promise";
import { connectionInfo } from './secrets.js'



const mongoDataBase = "c11-practice";

//connect to the mysql database
const db1 = await mysql.createConnection(connectionInfo);

const [movieList] = await db1.execute("SELECT * FROM movies")

db1.end();

// console.table(movieList);

const connection = new MongoClient(mongoURI);
await connection.connect();
const db2 = connection.db("Cluster0");

    await db2.collection("movies")
    .insertMany(movieList)


connection.close();
