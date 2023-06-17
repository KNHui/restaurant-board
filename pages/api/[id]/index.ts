import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
    id: string | string[] | undefined
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    const data = { id: req.query.id };

    return res.status(200).json(data);
}
