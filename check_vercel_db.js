const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://mishaelsema_db_user:boominati237@boominati.e8utj4w.mongodb.net/boominati?appName=boominati';

async function check() {
  await mongoose.connect(MONGODB_URI);
  const db = mongoose.connection.db;
  const collections = await db.listCollections().toArray();
  console.log('Collections:', collections.map(c => c.name));
  
  const projects = await db.collection('projects').find({}).limit(2).toArray();
  console.log('\nSample project:', JSON.stringify(projects[0], null, 2));
  
  await mongoose.disconnect();
}

check().catch(console.error);
