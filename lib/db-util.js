import { MongoClient } from 'mongodb';

export async function connectDatabase() {
  const connectionString = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_CLUSTERNAME}.dagew8u.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(connectionString);

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}
