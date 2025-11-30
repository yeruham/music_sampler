import { Readable } from 'stream'
import { minioClient } from "../config/minio.js";
import dotenv from "dotenv";

dotenv.config();

const music_bucket = process.env.MINIO_BUCKET || "music-sampler";
const instrumentUrl = "instruments";

export async function getAudioStreamFile(instrument: string, fileName: string): Promise<Readable> {
  try {
    const url = `${instrumentUrl}/${instrument}/${fileName}`
    const stream = await minioClient.getObject(music_bucket, url);
    stream.on("error", (err) => {
      console.log(`${err}: the stream process failed.`);
    })
    return stream;
  } catch (err) {
    console.log(`${err}: cannot get file ${fileName} from ${instrumentUrl}/${instrument}/ url.`);
    throw err;
  }
}

export async function getNotesOfInstrument(instrument: string): Promise<{ [key: string]: string }> {
  const urls: { [key: string]: string } = {};
  const stream = minioClient.listObjectsV2(music_bucket, `${instrumentUrl}/${instrument}/`);
  await new Promise<void>((resolve, reject) => {
    stream.on("data", (obj) => {
      const noteName = obj.name?.split("/")[2];
      if (obj.name && noteName) {
        urls[noteName] = obj.name;
      }
    });
    stream.on("end", () => resolve());
    stream.on("error", (err) => {
      console.log( `${err}: cannot get notes of ${instrument} from ${instrumentUrl}/${instrument} url.` );
      reject(err);
    });
  });
  return urls;
}

export async function getInstruments(): Promise<string[]> {
  const instruments: string[] = [];
  const stream = minioClient.listObjectsV2(music_bucket, `${instrumentUrl}/`);
  await new Promise<void>((resolve, reject) => {
    stream.on("data", (obj) => {
      const perfix = obj.prefix?.split("/")[1];
      if (obj.prefix && perfix) {
        instruments.push(perfix);
      }
    });
    stream.on("end", () => resolve());
    stream.on("error", (err) => {
      console.log( `${err}: cannot get instruments from ${instrumentUrl}/ url.` );
      reject(err)});
  });
  return instruments;
}