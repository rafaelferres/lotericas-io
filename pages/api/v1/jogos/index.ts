import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../utils/dbConnect";
import Modality from "../../../../models/Modality";
import Requests from "../../../../models/Requests";
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

export default async function getAllGames(req: NextApiRequest, res: NextApiResponse){
    await runMiddleware(req, res, cors);
    res.setHeader('Cache-Control', 'public, max-age=120, stale-while-revalidate=60');
    const { method } = req;
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
                    url: false
                };

                const games = await Modality.find({}, usersProjection);
                res.status(200).json({ success: true, data: games });
            }catch(err){
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false, error: "invalid request" });
    }
    
}