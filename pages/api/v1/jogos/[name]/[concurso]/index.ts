import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../../../utils/dbConnect";
import Results from "../../../../../../models/Results";
import Requests from "../../../../../../models/Requests";
import Cors from 'cors';

const cors = Cors({
    methods: ['GET', 'HEAD'],
    origin: "*"
});


dbConnect();

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
      fn(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
  
        return resolve(result)
      })
    })
}

export default async function getGameByConcurso(req: NextApiRequest, res: NextApiResponse){
    await runMiddleware(req, res, cors);
    
    res.setHeader('Cache-Control', 'public, max-age=120, stale-while-revalidate=60');
    
    const { query : { name, concurso }, method } = req;
    var _reqData = {
        ip: req.headers['x-real-ip'] || req.connection.remoteAddress,
        method: method,
        date: new Date(),
        url: req.url
    };

    await Requests.create(_reqData);
    
    switch(method){
        case "GET":
            try{
                var usersProjection = { 
                    __v: false,
                    _id: false,
                    createdAt: false,
                    updatedAt: false
                };
                if(concurso == "lasted"){
                    const games = await Results.find({name: name}).sort({_id:-1}).limit(1);
                    res.status(200).json({ success: true, data: games});
                }else{
                    const games = await Results.findOne({ name: name, concurso: concurso }, usersProjection);
                    if(games){
                        res.status(200).json({ success: true, data: games });
                    }else{
                        res.status(400).json({ success: false, error: "Esse concurso não possui dados em nossa base de dados!" });
                    }
                }
            }catch(err){
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false, error: "invalid request" });
    }
    
}