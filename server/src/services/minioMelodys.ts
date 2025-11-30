import { minioClient } from "../config/minio.js";
import dotenv from "dotenv";

dotenv.config();

const music_bucket = process.env.MINIO_BUCKET || "music-sampler";
const melodysUrl = "melodys";

export async function getMelodysNames(): Promise<string[]> {
  let melodysIds: string[] = [];
  const stream = minioClient.listObjectsV2(music_bucket, `${melodysUrl}/`);
  await new Promise<void>((resolve, reject) => {
    stream.on("data", (obj) => {
    const perfix = obj.prefix?.split("/")[1];
      if ( obj.prefix && perfix) {
        melodysIds.push(perfix);
      }
    });
    stream.on("end", () => resolve());
    stream.on("error", (err) => {
      console.log(`${err}: cannot get melodys-names from ${melodysUrl}/ url.`);
      reject(err);
    });
  });
  return melodysIds;
}

export async function putMelody( melody: object, melodyName: string ): Promise<void> {
  try {
    const jsonMelody = JSON.stringify(melody);
    await minioClient.putObject(music_bucket, `${melodysUrl}/${melodyName}.json`, jsonMelody);
  } catch (err) {
    console.log(`${err}: cannot put object ${melody} at ${melodysUrl}/ url.`);
    throw err;
  }
}

export async function getMelodyByName( melodyName: string ): Promise<object | undefined> {
  let melody;
  const stream = await minioClient.getObject(music_bucket, `${melodysUrl}/${melodyName}.json`);
  await new Promise<void>((resolve, reject) => {
    let data = "";
    stream.on("data", (chunk) => {
        data += chunk.toString();
    });
    stream.on("end", () => {
        melody = JSON.parse(data);
        resolve();
    });
    stream.on("error", (err) => {
      console.log(
        `${err}: cannot get object ${melodyName} at ${melodysUrl}/ url.`
      );
      reject(err);
    });
  });
  return melody;
}
