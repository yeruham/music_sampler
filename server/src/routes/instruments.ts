import express from 'express'
import { getInstruments, getNotesOfInstrument, getAudioStreamFile } from '../services/minioInstruments.js'
 

export const instrumentsRouter = express.Router();

instrumentsRouter.get('/', async (req, res) => {
    try{
        console.log("try to get instruments")
        const instruments = await getInstruments();
        console.log(instruments);
        res.status(200).send({instruments: instruments});
    }
    catch{
        res.status(404).send({message: "Error: cannot get instruments"})
    }
})

instrumentsRouter.get('/:instrument', async (req, res) => {
    const instrument = req.params.instrument;
    try{
         console.log("try to get instruments notes")
        const instruments = await getNotesOfInstrument(instrument);
        console.log(instrument);
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
         console.log("try to get file")
        const stream = await getAudioStreamFile(instrument, note);
        console.log(stream)
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