import express from 'express';
import * as db from './util/data.js';

const app = express();

app.use(express.json());
const PORT = 8080;

app.get('/recipes',(req, res)=>{
    try{
        const recipes = get.GetRecipes(req.params.id);
        if(!recipes){
            return res.status(404).json({message: 'Not found'})
        }
        res.status(200).json(recipes)
    }catch(err){
        return res.status(500).json({message: 'Database Error' + err.message})
    }
})

app.post('/recipes',(req, res)=>{
    try{
        const {title, content} = req.body;
        if(!title || !content){
            return res.status(400).json({message: 'Invalid'})
        }
        
    }catch(err){
        return res.status(500).json({message: 'Database Error' + err.message})
    }
})

app.listen(PORT, () => {
    console.log(`App listents on ${PORT}`)
    
})