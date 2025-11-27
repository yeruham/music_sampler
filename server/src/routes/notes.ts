import express from 'express'
import { getInstruments, getNotesOfInstrument, getAudioStreamFile } from '../services/minioNotes.js'
 

export const notesRouter = express.Router();

notesRouter.get('/', async (req, res) => {
    try{
        const instruments = await getInstruments();
        res.status(200).send({instruments: instruments});
    }
    catch{
        const message = "Error: cannot get instruments";
        res.status(404).send({message: message});
    }
})

notesRouter.get('/:instrument', async (req, res) => {
    const instrument = req.params.instrument;
    try{
        const instruments = await getNotesOfInstrument(instrument);
        res.status(200).send({instruments: instruments});
    }
    catch (err){
        // const message =  `Error: cannot get any notes of ${instrument}`;
        res.status(404).send({message: err});
    }
})

notesRouter.get('/:instrument/:note', async (req, res) => {
    const instrument = req.params.instrument;
    const note = req.params.note;
    try{
        const stream = await getAudioStreamFile(instrument, note);
        res.setHeader("Content-Type", "audio/mpeg");
        stream.pipe(res);
    }
    catch (err){
        // const message = `Error: cannot get ${note} file of ${instrument}`;
        res.status(404).send({message: err});
    }
})