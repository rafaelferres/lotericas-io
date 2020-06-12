import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../../utils/dbConnect";
import Results from "../../../../../models/Results";

dbConnect();

export default async function getGamesByName(req: NextApiRequest, res: NextApiResponse){
    res.setHeader('Cache-Control', 'public, max-age=120, stale-while-revalidate=60');
    
    const { query : { name }, method } = req;
    
    switch(method){
        case "GET":
            try{
                var usersProjection = { 
                    __v: false,
                    _id: false,
                    createdAt: false,
                    updatedAt: false
                };

                const games = await Results.find({ name: name }, usersProjection);
                if(games.length > 0){
                    res.status(200).json({ success: true, data: games });
                }else{
                    res.status(400).json({ success: false, error: "Esse jogo não possui dados em nossa base de dados!" });
                }
            }catch(err){
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false, error: "invalid request" });
    }
    
}