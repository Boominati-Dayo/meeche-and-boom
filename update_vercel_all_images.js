const mongoose = require('mongoose');

const LOCAL_URI = 'mongodb+srv://mishaelsema_db_user:boominati237@boominati.e8utj4w.mongodb.net/boominati?appName=boominati';

async function updateVercelDB() {
  // Connect to local to get image URLs
  await mongoose.connect(LOCAL_URI);
  const localDb = mongoose.connection.db;
  
  // Get all projects with images from LOCAL database
  const localProjects = await localDb.collection('projects').find({}).toArray();
  
  console.log('Local DB has', localProjects.length, 'projects');
  
  // Group by title to find images
  const projectImages = {};
  localProjects.forEach(p => {
    projectImages[p.title] = p.images || [];
    console.log(`${p.title}: ${p.images?.length || 0} images`);
  });
  
  await mongoose.disconnect();
  
  console.log('\nProjectImages object created with all images!');
  console.log(JSON.stringify(projectImages, null, 2));
}

updateVercelDB().catch(console.error);
