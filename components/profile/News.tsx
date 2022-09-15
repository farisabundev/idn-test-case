import { useEffect, useState } from 'react';
import { INewsData } from '../../types';
import NewsCard from './card/NewsCard';

const ProfileNews = (props: any) => {
  return(
    <div className='mt-4'>
      {props.dataNews.data?.length ?
        props.dataNews.data.map((each: INewsData, index: number) => (
          <NewsCard data={each} key={index} />
        ))
        :
        "empty"
      }
    </div>
  )
}

export default ProfileNews;