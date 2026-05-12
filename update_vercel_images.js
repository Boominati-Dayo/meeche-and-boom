const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://mishaelsema_db_user:boominati237@boominati.e8utj4w.mongodb.net/boominati?appName=boominati';

const projectImages = {
  "Joana's Reborn Babies": [
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778536550/meeche-boom/websites/oazy2uhrjmncxgvzalzc.png",
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778536558/meeche-boom/websites/ybenzhys1ulmabt2tegq.png",
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778536573/meeche-boom/websites/mxqf96yf4blx0gfoyv6q.png",
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778536596/meeche-boom/websites/l7npehhy3wgvjhphvp3a.png",
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778536599/meeche-boom/websites/bclcsizt8z1clpdnej10.png"
  ],
  "PeptideLab": [],
  "Recoverly Trust Bank": [
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778536608/meeche-boom/websites/nfhjurpqvxz5wkjxwzml.png",
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778536614/meeche-boom/websites/tstjkzrp4vodwqwek7ta.png",
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778536621/meeche-boom/websites/kcdzxbo92nusfcmerjq8.png",
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778536626/meeche-boom/websites/ziegonj8uuoytlv9ms7q.png"
  ],
  "Cavalier King Charles Rehoming": [
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778536652/meeche-boom/websites/dgct9xbtvnivpecadtor.png",
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778536666/meeche-boom/websites/l1yvogo49q2t0cdbwlka.png"
  ],
  "ZipXpress Logistics": [
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778536687/meeche-boom/websites/cgslalnmiuiykioec0w8.png",
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778536690/meeche-boom/websites/f5uopd9svmegb5fmewo5.png",
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778536693/meeche-boom/websites/wnehzwgoe4hnlp4cvxha.png",
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778536695/meeche-boom/websites/d8nnxim7lscxmphnodde.png"
  ],
  "Tiffany Dawson Rehoming": [],
  "Dolores Silicone": [
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778536704/meeche-boom/websites/mrlfso62r3cc5alhuse4.png",
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778536715/meeche-boom/websites/rwd9edlaknjvccfmr9tp.png",
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778536728/meeche-boom/websites/oykovo0fdpb7kozjzfb7.png"
  ],
  "Lithia Auto": [
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778536748/meeche-boom/websites/h531zfhlxurtnipoiznq.png",
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778536757/meeche-boom/websites/qzum6fqcexjfblnojopr.png"
  ],
  "Global Track Courier": [
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778536783/meeche-boom/websites/je9dzv5pn2utpfpxad3v.png"
  ],
  "Tesla Capital": [
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778536796/meeche-boom/websites/ttscei7rkvfvfdviebx8.png",
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778536808/meeche-boom/websites/cau0ux1hujpu0epxeqts.png"
  ],
  "EazyPost LLC": [
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778536988/meeche-boom/websites/qy2fqxxttacetbovuz3c.png",
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778537000/meeche-boom/websites/hitxtfh2o91ws8xtzxun.png",
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778537007/meeche-boom/websites/p3vuegvg9oezyhuac3dz.png",
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778537026/meeche-boom/websites/rvshdiwcj5obj2jrxbgy.png"
  ],
  "Puppy Planet": [],
  "Morgan Doxie Kernel": [
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778537081/meeche-boom/websites/ti2pjpjeg9u18naep1wx.png"
  ],
  "Rothschild Foundation": [
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778537163/meeche-boom/websites/d1q3rhcvrtptv4egncrc.png",
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778537164/meeche-boom/websites/tlljz1wqmhr1pjvv9rcv.png"
  ],
  "Calmica Casa": [
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778537174/meeche-boom/websites/f11bkt6poaayxhrtytpw.png",
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778537181/meeche-boom/websites/jkb3ipucyge9by4elz4j.png",
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778537189/meeche-boom/websites/btkrlvkdogq037nnol0p.png"
  ],
  "Vote Mr Jean Baptiste": [],
  "Navista": [
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778537199/meeche-boom/websites/f7ogyuocsog4szpediin.png",
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778537208/meeche-boom/websites/gujffmg5oesem4aparyz.png",
    "https://res.cloudinary.com/dmwqqfeyq/image/upload/v1778537211/meeche-boom/websites/rffqunixidh9fesfyyet.png"
  ]
};

async function updateImages() {
  await mongoose.connect(MONGODB_URI);
  const db = mongoose.connection.db;
  
  for (const [title, images] of Object.entries(projectImages)) {
    const result = await db.collection('projects').updateOne(
      { title: title },
      { $set: { images: images } }
    );
    console.log(`${title}: ${images.length} images (matched: ${result.matchedCount})`);
  }
  
  console.log('\nAll images updated!');
  await mongoose.disconnect();
}

updateImages().catch(console.error);
