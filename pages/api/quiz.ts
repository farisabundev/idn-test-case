import { faker } from '@faker-js/faker';
import type { NextApiRequest, NextApiResponse } from 'next'
import { IQuizData } from '../../types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dummyArr: IQuizData[] = [];

  for (let index = 0; index < 10; index++) {
    const each: IQuizData = {
      img: faker.image.city(300, 300, true),
      category: faker.lorem.word(),
      total_play: faker.datatype.number({ min: 0, max: 10000 }),
      title: faker.lorem.sentence(Math.floor(Math.random() * 20) + 7),
    };

    dummyArr.push(each);
  }
  res.status(200).json({
    data: dummyArr
  })
}
