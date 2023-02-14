const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
// const mongoose = require("mongoose");

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db(process.env.DB_NAME);

module.exports = { client, db };
