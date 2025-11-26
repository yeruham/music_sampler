import * as Minio from "minio";
import dotenv from 'dotenv'

dotenv.config();

const endpoint =  process.env.MINIO_ENDPOINT || "localhost";
let port; 
try { port = Number(process.env.MINIO_PORT) } catch{ port = 9000 }
const accessKey = process.env.MINIO_ACCESS_KEY || "minioadmin";
const secretKey = process.env.MINIO_SECRET_KEY || "minioadmin";

export const minioClient = new Minio.Client({
  endPoint: endpoint,
  port: port,
  useSSL: false,
  accessKey: accessKey,
  secretKey: secretKey
});


const bucket = "music-sampler";
const bucketExist = await minioClient.bucketExists(bucket);

if (!bucketExist){
    await minioClient.makeBucket(bucket);
}


const accordion = {
    C5: "C:/frontend-projects/music_sampler/client/public/accordion/C5.wav",
    D5: "C:/frontend-projects/music_sampler/client/public/accordion/D5.wav",
    E5: "C:/frontend-projects/music_sampler/client/public/accordion/E5.wav",
    F5: "C:/frontend-projects/music_sampler/client/public/accordion/F5.wav",
    G5: "C:/frontend-projects/music_sampler/client/public/accordion/G5.wav",
    A5: "C:/frontend-projects/music_sampler/client/public/accordion/A5.wav",
    B5: "C:/frontend-projects/music_sampler/client/public/accordion/B5.wav",
  };

  const piano = {
    C6: "C:/frontend-projects/music_sampler/client/public/piano/c6.mp3",
    D6: "C:/frontend-projects/music_sampler/client/public/piano/d6.mp3",
    E6: "C:/frontend-projects/music_sampler/client/public/piano/e6.mp3",
    F6: "C:/frontend-projects/music_sampler/client/public/piano/f6.mp3",
    G6: "C:/frontend-projects/music_sampler/client/public/piano/g6.mp3",
    A6:  "C:/frontend-projects/music_sampler/client/public/guitar/A2.flac",
    B6: "C:/frontend-projects/music_sampler/client/public/piano/b6.mp3",
  };

  const guitar = {
    C2: "C:/frontend-projects/music_sampler/client/public/guitar/C2.flac",
    D2: "C:/frontend-projects/music_sampler/client/public/guitar/D2.flac",
    E2: "C:/frontend-projects/music_sampler/client/public/guitar/E2.flac",
    F2: "C:/frontend-projects/music_sampler/client/public/guitar/F2.flac",
    G2: "C:/frontend-projects/music_sampler/client/public/guitar/G2.flac",
    A2: "C:/frontend-projects/music_sampler/client/public/guitar/A2.flac",
    B2: "C:/frontend-projects/music_sampler/client/public/guitar/B2.flac",
  };

const instruments = [accordion, guitar, piano]
const instrumentsNames = ["accordion", "guitar", "piano"]


const basicUrlOfMinio = "instruments";
// for (let i = 0; i < instruments.length; i++){
//     const instrumentName = instrumentsNames[i];
//     const notes = Object.keys(instruments[i]!)
//     const urls = Object.values(instruments[i]!)
//     for (let j = 0; j < urls.length; j++){
//         const objectName = `${basicUrlOfMinio}/${instrumentName}/${notes[j]}`;
//         await minioClient.fPutObject(bucket, objectName, urls[j]!);
//         // await minioClient.removeObject(bucket, objectName);
//     }
// }

const stream = minioClient.listObjectsV2(bucket, "instruments/accordion/", true);

stream.on("data", (obj) => {
  console.log(obj.name);
});
