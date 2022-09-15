import { faker } from '@faker-js/faker';
import type { NextApiRequest, NextApiResponse } from 'next'
import { QuizData } from '../../types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<QuizData>
) {
  res.status(200).json({
    img: faker.image.imageUrl() || "",
    category: faker.lorem.word(),
    total_play: faker.datatype.number({ min: 0, max: 10000 }),
    title: faker.lorem.words(7) || "",
  })
}
