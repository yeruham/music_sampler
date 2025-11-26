import express from 'express'
import { getInstruments, getNotesOfInstrument } from '../services/minioMusic.js'
 

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