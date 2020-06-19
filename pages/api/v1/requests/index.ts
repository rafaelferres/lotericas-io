import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../utils/dbConnect";
import Requests from "../../../../models/Requests";

dbConnect();

export default async function getAllRequests(req: NextApiRequest, res: NextApiResponse){
    res.setHeader('Cache-Control', 'public, max-age=120, stale-while-revalidate=60');
    const { method } = req;

    switch(method){
        case "GET":
            try{
                const requests = await Requests.countDocuments({});
                res.status(200).json({ success: true, data: requests });
            }catch(err){
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false, error: "invalid request" });
    }
    
}