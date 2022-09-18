import { faker } from '@faker-js/faker';
import type { NextApiRequest, NextApiResponse } from 'next'
import { ILivestreamData } from '../../types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dummyArr: ILivestreamData[] = [];

  for (let index = 0; index < 10; index++) {
    const each: ILivestreamData = {
      total_live: faker.datatype.number({ min: 0, max: 10000 }),
      title: faker.lorem.sentence(Math.floor(Math.random() * 10) + 7),
      img: faker.image.imageUrl(480, 640, 'cat', true),
      category: faker.lorem.word()
    };

    dummyArr.push(each);
  }

  res.status(200).json({
    data: dummyArr
  })
}
