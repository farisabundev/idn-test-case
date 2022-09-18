import { INewsData } from '../../types';
import NewsCard from './card/NewsCard';
import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonNews from '../skeleton/News';

const ProfileNews = (props: any) => {
  return (
    <div className='mt-4'>
      {props.dataNews.length ?
        <InfiniteScroll
          dataLength={props.dataNews.length}
          next={() => props.fetchNews()}
          hasMore={true}
          loader={<SkeletonNews />}
        >
          <div className='row'>
            {props.dataNews.map((each: INewsData, index: number) => (
              <NewsCard data={each} key={index} />
            ))}
          </div>
        </InfiniteScroll>
        :
        <SkeletonNews />
      }
    </div>
  )
}

export default ProfileNews;