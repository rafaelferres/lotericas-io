import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../../../utils/dbConnect";
import Results from "../../../../../../models/Results";

dbConnect();

export default async function getGameByConcurso(req: NextApiRequest, res: NextApiResponse){
    const { query : { name, concurso }, method } = req;

    switch(method){
        case "GET":
            try{
                var usersProjection = { 
                    __v: false,
                    _id: false,
                    createdAt: false,
                    updatedAt: false
                };

                const games = await Results.findOne({ name: name, concurso: concurso }, usersProjection);
                if(games){
                    res.status(200).json({ success: true, data: games });
                }else{
                    res.status(400).json({ success: false, error: "Esse concurso não possui dados em nossa base de dados!" });
                }
            }catch(err){
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false, error: "invalid request" });
    }
    
}