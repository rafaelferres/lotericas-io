import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../utils/dbConnect";
import Modality from "../../models/Modality";

dbConnect();

export default async function getAllGames(req: NextApiRequest, res: NextApiResponse){
    const { method } = req;

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