// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { clean } from '../../lib/clean';

type Data = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { body } = req;

    if (body.text) {
      res.status(200).json({
        message: clean(body.text)
      });
    } else {
      res.status(400).json({
        message: 'No text provided'
      });
    }
  }
  res.status(500).json({ message: 'Use POST' });
}
