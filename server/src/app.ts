import express from 'express'
import dotenv from 'dotenv'
import { notesRouter } from './routes/notes.js';

dotenv.config();

const app = express();
let port;
try { port = Number(process.env.APP_PORT) } catch{ port = 9000 }

app.use('/instruments', notesRouter);


app.listen(port, () => {
    console.log(`app start on http://localhost:${port}`);
})
