import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
    message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    const data = { message: 'Hello from Next.js!' };

    return res.status(200).json(data);
}
