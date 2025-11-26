import { minioClient } from "../config/minio.js";
import dotenv from "dotenv";

dotenv.config();

const music_bucket = process.env.MINIO_BUCKET || "music-sampler";
const instrumentUrl = "instruments";

export function getAudioFile(instrument: string, fileName: string) {
  try {
    const url = `${instrumentUrl}/${instrument}/${fileName}`
    const stream = minioClient.getObject(music_bucket, url);
    return stream;
  } catch (err) {
    console.log(`Error: cannot get file ${fileName} from ${instrumentUrl}/${instrument}/ url. \n` + err );
  }
}

export async function getNotesOfInstrument(instrument: string): Promise<{ [key: string]: string }> {
  const urls: { [key: string]: string } = {};
  try {
    const stream = minioClient.listObjectsV2(music_bucket, `${instrumentUrl}/${instrument}/`);
    await new Promise<void>((resulve) => {
      stream.on("data", (obj) => {
        const noteName = obj.name?.split("/")[2];
        if (obj.name && noteName) {
          urls[noteName] = obj.name;
        }
      });
      stream.on("end", () => resulve());
    });
  } catch (err) {
    console.log(`Error: cannot get urls-notes from ${instrumentUrl}/${instrument}/ url. \n` + err );
  }
  return urls;
}

export async function getInstruments(): Promise<string[]> {
  const instruments: string[] = [];
  try {
    const stream = minioClient.listObjectsV2(music_bucket, `${instrumentUrl}/`);
    await new Promise<void>((resulve) => {
      stream.on("data", (obj) => {
        const perfix = obj.prefix?.split("/")[1];
        if (perfix) {
          instruments.push(perfix);
        }
      });
      stream.on("end", () => resulve());
    });
  } catch (err) {
    console.log( `Error: cannot get instruments from ${instrumentUrl}/ url. \n` + err );
  }
  return instruments;
}