import express from 'express'
import { getMelodyByName, getMelodysNames, putMelody } from '../services/minioMelodys.js'; 


export const melodysRouter = express.Router();

melodysRouter.get('/', async (req, res) => {
    try {
        const melodysNames = await getMelodysNames();
        res.status(200).send(melodysNames);
    }
    catch (err){
        res.status(404).send({message: err});
    }
})


melodysRouter.post('/:name', async (req, res) => {
    try {
        const newMelody = req.body;
        const melodyName = req.params.name;
        console.log(newMelody)
        console.log(typeof newMelody)
        if (newMelody && "instrument" in newMelody && "melody" in newMelody){
            await putMelody(newMelody, melodyName);
            const message = `melody ${melodyName} added successfully`;
            res.status(201).send({message: message});
        }
        else{
            const message = `melody object must contain instrument and melody`;
            res.status(400).send({message: message});
        }
    }
    catch (err){
        res.status(404).send({message: err});
    }
})

melodysRouter.get('/:name', async (req, res) => {
    try {
        const melodyName = req.params.name;
        const melody = await getMelodyByName(melodyName);
        if (melody){
            res.status(200).send(melody);
        }
        else{
            const message = `melody ${melodyName} doesn't found`;
            res.status(404).send({message: message});
        }
    }
    catch (err){
        res.status(404).send({message: err});
    }
})