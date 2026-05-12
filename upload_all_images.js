const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

cloudinary.config({
  cloud_name: 'dmwqqfeyq',
  api_key: '179573526655521',
  api_secret: 'wWwvVKf9ytJOySdR7bB2URZNTK4'
});

const screenshotsDir = './public/assets/websites_screenshots';

const projectMapping = {
  'joanas-reborn-babies': [
    'joanas-reborn-babies.vercel.app_.png',
    'joanas-reborn-babies.vercel.app_ (1).png',
    'joanas-reborn-babies.vercel.app_ (2).png',
    'joanas-reborn-babies.vercel.app_ (3).png',
    'joanas-reborn-babies.vercel.app_ (4).png',
    'joanas-reborn-babies.vercel.app_admin_login.png'
  ],
  'cavalier-king-charles-rehoming': [
    'cavalierkingcharlesrehomingcenter.com_.png',
    'cavalierkingcharlesrehomingcenter.com_ (1).png',
    'cavalierkingcharlesrehomingcenter.com_puppies_69c5e8fda81d5d9b21210e09.png'
  ],
  'dolores-silicone': [
    'dolores-silicone.vercel.app_ (1).png',
    'dolores-silicone.vercel.app_ (2).png',
    'dolores-silicone.vercel.app_ (3).png',
    'dolores-silicone.vercel.app_ (4).png'
  ],
  'eazypost-llc': [
    'eazypost-llc.vercel.app_ (1).png',
    'eazypost-llc.vercel.app_ (2).png',
    'eazypost-llc.vercel.app_ (3).png',
    'eazypost-llc.vercel.app_ (4).png'
  ],
  'global-track-courier': [
    'global-track-courier.vercel.app_.png'
  ],
  'lithia-auto': [
    'lithia-auto.vercel.app_.png',
    'lithia-auto.vercel.app_inventory.png'
  ],
  'morgan-doxie-kernel': [
    'morgan-doxie-kernel.vercel.app_ (1).png'
  ],
  'navista': [
    'navista.vercel.app_.png',
    'navista.vercel.app_ (1).png',
    'navista.vercel.app_track.png'
  ],
  'recoverly-trust-bank': [
    'recoverlytrustbank.com_.png',
    'recoverlytrustbank.com_ (1).png',
    'recoverlytrustbank.com_ (2).png',
    'recoverlytrustbank.com_ (3).png'
  ],
  'rothschild-foundation': [
    'rothschild-foundation.vercel.app_.png',
    'rothschild-foundation.vercel.app_ (1).png'
  ],
  'tesla-capital': [
    'tesla-capital.vercel.app_ (1).png',
    'tesla-capital.vercel.app_ (2).png'
  ],
  'zip-xpress-logistics': [
    'zip-xpresslogistics.com_.png',
    'zip-xpresslogistics.com_ (1).png',
    'zip-xpresslogistics.com_ (2).png',
    'zip-xpresslogistics.com_ (3).png'
  ],
  'calmica-casa': [
    'calmicasa.vercel.app_ (2).png',
    'calmicasa.vercel.app_ (3).png',
    'calmicasa.vercel.app_ (4).png'
  ]
};

async function uploadAndUpdate() {
  for (const [slug, files] of Object.entries(projectMapping)) {
    console.log(`\n${slug}:`);
    const images = [];
    
    for (const file of files) {
      const filePath = path.join(screenshotsDir, file);
      if (fs.existsSync(filePath)) {
        const result = await cloudinary.uploader.upload(filePath, {
          folder: 'meeche-boom/websites',
          public_id: file.replace(/[()]/g, '').replace(/\s+/g, '-'),
          overwrite: true
        });
        images.push(result.secure_url);
        console.log(`  - ${file}: ${result.secure_url.substring(0, 60)}...`);
      } else {
        console.log(`  - ${file}: FILE NOT FOUND`);
      }
    }
    
    console.log(`  Total: ${images.length} images`);
  }
}

uploadAndUpdate().catch(console.error);
