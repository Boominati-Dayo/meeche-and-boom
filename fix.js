const cloudinary = require('cloudinary').v2;
const mongoose = require('mongoose');
const fs = require('fs');

cloudinary.config({ cloud_name: 'dmwqqfeyq', api_key: '179573526655521', api_secret: 'wWwvVKf9ytJOySdR7bB2URZNTK4' });

mongoose.connect('mongodb+srv://mishaelsema_db_user:boominati237@boominati.e8utj4w.mongodb.net/boominati?appName=boominati').then(async () => {
  const db = mongoose.connection.db;
  
  const p = [
    ['Calmica Casa', 'calmicasa.vercel.app_ (4).png', 'Calmica-Casa-3'],
    ['Navista', 'navista.vercel.app_.png', 'Navista-1'],
    ['Navista', 'navista.vercel.app_ (1).png', 'Navista-2'],
    ['Navista', 'navista.vercel.app_track.png', 'Navista-3'],
  ];
  
  for (const [t, f, id] of p) {
    const r = await cloudinary.uploader.upload('./public/assets/websites_screenshots/' + f, { folder: 'meeche-boom/websites', public_id: id, overwrite: true, format: 'png' });
    console.log('✓ ' + id);
    await new Promise(s => setTimeout(s, 500));
  }
  
  await mongoose.disconnect();
  console.log('Done!');
}).catch(console.error);
