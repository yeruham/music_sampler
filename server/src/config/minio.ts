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