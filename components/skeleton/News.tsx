import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonNews = () => {
  const SkeletonComponent = () => {
    return (
      <div className='col-12 news-card'>
        <div className="d-flex justify-content-between">
          <div className='title-section'>
            <div>
              <label className='fs-11 fc-grey'>
                <Skeleton style={{ width: '70%' }} />
              </label>
            </div>
            <div>
              <label className='fs-16 fw-bold-900'>
                <Skeleton count={3} />
              </label>
            </div>
          </div>
        </div>

        <div className="mt-1">
          <Skeleton style={{ width: '10%' }} />
        </div>
      </div>
    )
  };
  return (
    <>
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent />
    </>
  )
};

export default SkeletonNews;