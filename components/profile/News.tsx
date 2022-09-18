import { INewsData } from '../../types';
import NewsCard from './card/NewsCard';
import InfiniteScroll from "react-infinite-scroll-component";

const ProfileNews = (props: any) => {
  return(
    <div className='mt-4'>
      {props.dataNews.length ?
        <InfiniteScroll
          dataLength={props.dataNews.length}
          next={() => props.fetchNews()}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <div className='row'>
            {props.dataNews.map((each: INewsData, index: number) => (
              <NewsCard data={each} key={index} />
            ))}
          </div>
        </InfiniteScroll>
        :
        <h4>Loading...</h4>
      }
    </div>
  )
}

export default ProfileNews;