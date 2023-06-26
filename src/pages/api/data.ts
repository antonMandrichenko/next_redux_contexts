import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    if(req.headers.authorization && req.headers.authorization.split(' ')[1] === 'tokenData') {
        res.status(200).send(['test1', 'test2']);
    }
     res.status(401);
  } catch (error) {
    res.status(500).send((error as any).message);
  }
}
