const cloudinary = require('cloudinary').v2;
const mongoose = require('mongoose');
const fs = require('fs');

cloudinary.config({ cloud_name: 'dmwqqfeyq', api_key: '179573526655521', api_secret: 'wWwvVKf9ytJOySdR7bB2URZNTK4' });

mongoose.connect('mongodb+srv://mishaelsema_db_user:boominati237@boominati.e8utj4w.mongodb.net/boominati?appName=boominati').then(async () => {
  const db = mongoose.connection.db;
  
  const files = [
    ['Lithia Auto', 'lithia-auto.vercel.app_.png', 'Lithia-Auto-1'],
    ['Lithia Auto', 'lithia-auto.vercel.app_inventory.png', 'Lithia-Auto-2'],
    ['Global Track Courier', 'global-track-courier.vercel.app_.png', 'Global-Track-Courier-1'],
    ['Tesla Capital', 'tesla-capital.vercel.app_ (1).png', 'Tesla-Capital-1'],
    ['Tesla Capital', 'tesla-capital.vercel.app_ (2).png', 'Tesla-Capital-2'],
    ['Calmica Casa', 'calmicasa.vercel.app_ (2).png', 'Calmica-Casa-1'],
    ['Calmica Casa', 'calmicasa.vercel.app_ (3).png', 'Calmica-Casa-2'],
    ['Calmica Casa', 'calmicasa.vercel.app_ (4).png', 'Calmica-Casa-3'],
    ['Navista', 'navista.vercel.app_.png', 'Navista-1'],
    ['Navista', 'navista.vercel.app_ (1).png', 'Navista-2'],
    ['Navista', 'navista.vercel.app_track.png', 'Navista-3'],
  ];
  
  const results = {};
  
  for (const [title, file, publicId] of files) {
    const filePath = './public/assets/websites_screenshots/' + file;
    if (fs.existsSync(filePath)) {
      const result = await cloudinary.uploader.upload(filePath, { folder: 'meeche-boom/websites', public_id: publicId, overwrite: true, format: 'png' });
      if (!results[title]) results[title] = [];
      results[title].push(result.secure_url);
      console.log('✓ ' + publicId);
      await new Promise(r => setTimeout(r, 300));
    }
  }
  
  for (const [title, images] of Object.entries(results)) {
    await db.collection('projects').updateOne({ title: title }, { $set: { images: images } });
    console.log(title + ': ' + images.length + ' images updated');
  }
  
  await mongoose.disconnect();
  console.log('\n✅ Done!');
}).catch(console.error);