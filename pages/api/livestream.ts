import { faker } from '@faker-js/faker';
import type { NextApiRequest, NextApiResponse } from 'next'
import { ILivestreamData } from '../../types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ILivestreamData>
) {
  res.status(200).json({
    total_live: faker.datatype.number({ min: 0, max: 10000 }),
    title: faker.lorem.words(7) || "",
    img: faker.image.imageUrl() || "",
    category: faker.lorem.word()
  })
}
