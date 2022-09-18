import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonComponent = (props: any) => {
  return(
    <div className="col-6">
      <div className="quiz-card mb-5">
        <div className="thumbnail-wrapper">
          <Skeleton className='quiz-skeleton-image'/>
        </div>

        <div className="category">
          <Skeleton style={{ width: "20%" }}/>
        </div>
        
        <div>
          <label className="title">
            <Skeleton count={3}/>
          </label>
          <div className="fs-12 fc-grey">
            <Skeleton style={{ width: "30%" }}/>
          </div>
        </div>
      </div>
    </div>
  )
}

const SkeletonQuiz = () => {
  return(
    <div className='row'>
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent />
    </div>
  )
}

export default SkeletonQuiz;