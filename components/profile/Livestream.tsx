import InfiniteScroll from "react-infinite-scroll-component";
import { ILivestreamData } from '../../types';

import LivestreamCard from './card/LivestreamCard';
import SkeletonLivestream from '../skeleton/Livestream';

const ProfileLivestream = (props: any) => {
  return(
    <div className='mt-4'>
      {props.dataLivestreams.length ?
        <InfiniteScroll
          dataLength={props.dataLivestreams.length}
          next={() => props.fetchLivestream()}
          hasMore={true}
          loader={<SkeletonLivestream />}
          >
          <div className='row'>
            {props.dataLivestreams.map((each: ILivestreamData, index: number) => (
              <LivestreamCard data={each} key={index} />
            ))}
          </div>
        </InfiniteScroll>
        :
        <SkeletonLivestream />
      }
    </div>
  )
}

export default ProfileLivestream;