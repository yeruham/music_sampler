import express from 'express'
import { getInstruments, getNotesOfInstrument, getAudioFile } from '../services/minioMusic.js'
 

export const instrumentsRouter = express.Router();

instrumentsRouter.get('/', async (req, res) => {
    try{
        const instruments = await getInstruments();
        res.status(200).send({instruments: instruments});
    }
    catch{
        res.status(404).send({message: "Error: cannot get instruments"})
    }
})

instrumentsRouter.get('/:instrument', async (req, res) => {
    const instrument = req.params.instrument;
    try{
        const instruments = await getNotesOfInstrument(instrument);
        res.status(200).send({instruments: instruments})
    }
    catch{
        res.status(404).send({message: `Error: cannot get any notes of ${instrument}`})
    }
})

instrumentsRouter.get('/:instrument/:note', async (req, res) => {
    const instrument = req.params.instrument;
    const note = req.params.note;
    try{
        const stream = await getAudioFile(instrument, note);
        res.setHeader("Content-Type", "audio/mpeg");
        if (stream){
            stream.pipe(res);
        }
        else{
            res.status(404).send({message: `Error: cannot get ${note} file of ${instrument}`});
        }
    }
    catch{
        res.status(404).send({message: `Error: cannot get ${note} file of ${instrument}`});
    }
})