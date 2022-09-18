import { IQuizData } from '../../types';
import QuizCard from './card/QuizCard';
import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonQuiz from '../skeleton/Quiz';

const ProfileQuiz = (props: any) => {
  return (
    <div className='mt-4'>
      {props.dataQuizzes?.length ?
        <InfiniteScroll
          dataLength={props.dataQuizzes.length}
          next={() => props.fetchQuiz()}
          hasMore={true}
          loader={<SkeletonQuiz />}
        >
          <div className='row'>
            {props.dataQuizzes.map((each: IQuizData, index: number) => (
              <QuizCard data={each} key={index} />
            ))}
          </div>
        </InfiniteScroll>
        :
        <SkeletonQuiz />
      }
    </div>
  )
}

export default ProfileQuiz;