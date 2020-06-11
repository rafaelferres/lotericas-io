import { NextApiRequest, NextApiResponse } from "next";

export default async function getAllGames(req: NextApiRequest, res: NextApiResponse){
    res.json({ hello: 'world', method: req.method });
}