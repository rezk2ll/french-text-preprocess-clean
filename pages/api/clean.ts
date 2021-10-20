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
    const { body: { text } } = req;

    return text ?
      res.status(200).json({ message: clean(text) }) :
      res.status(400).json({ message: 'No text provided' });
  }

  return res.status(500).json({ message: 'Use POST' });
}
