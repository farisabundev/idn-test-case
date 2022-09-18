import { faker } from '@faker-js/faker';
import type { NextApiRequest, NextApiResponse } from 'next'
import { INewsData } from '../../types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dummyArr: INewsData[] = [];

  for (let index = 0; index < 10; index++) {
    const each: INewsData = {
      date: faker.date.past(),
      title: faker.lorem.sentence(Math.floor(Math.random() * 10) + 7),
      img: faker.image.imageUrl(640, 480, 'news', true),
      category: faker.lorem.word(),
    }

    dummyArr.push(each);
  };

  res.status(200).json({ data: dummyArr });
}
