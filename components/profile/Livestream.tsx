import { ILivestreamData } from '../../types';
import LivestreamCard from './card/LivestreamCard';
import InfiniteScroll from "react-infinite-scroll-component";

const ProfileLivestream = (props: any) => {
  return(
    <div className='mt-4'>
      {props.dataLivestreams.length ?
        <InfiniteScroll
          dataLength={props.dataLivestreams.length}
          next={() => props.fetchLivestream()}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          >
          <div className='row'>
            {props.dataLivestreams.map((each: ILivestreamData, index: number) => (
              <LivestreamCard data={each} key={index} />
            ))}
          </div>
        </InfiniteScroll>
        :
        <h4>Loading...</h4>
      }
    </div>
  )
}

export default ProfileLivestream;