import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
     res.status(200).send({access_token: 'tokenData', refresh_token: 'refresh_token'});
  } catch (error) {
    res.status(500).send((error as any).message);
  }
}
