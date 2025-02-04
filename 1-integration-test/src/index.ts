import express from 'express';
import {client} from './db';

export const app = express();

app.use(express.json());

import { Request, Response } from 'express';

app.post('/sum', async (req: any, res: any) =>{
    
    const {a, b} = req.body;
    if(a> 1000000 || b>1000000){
        return res.status(422).json({
            message:"a and b should be less than 1000000"
        });
        }
        const result=a+b;
        const request = await client.request.create({
            data:{
                a,
                b,
                answer:result,
                type:"ADD"
            }
        });
        res.json({answer:result,id:request.id});
    });