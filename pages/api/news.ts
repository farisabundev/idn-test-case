import { faker } from '@faker-js/faker';
import type { NextApiRequest, NextApiResponse } from 'next'
import { INewsData } from '../../types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dummyArr: INewsData[] = [];

  for (let index = 0; index < 20; index++) {
    const each: INewsData = {
      date: faker.date.past(),
      title: faker.lorem.words(7),
      img: faker.image.imageUrl(),
      category: faker.lorem.word(),
    }

    dummyArr.push(each);
  };

  res.status(200).json({
    data: dummyArr
  })
}
