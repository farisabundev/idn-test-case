import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonLivestream = () => {
  const SkeletonComponent = () => {
    return (
      <div className='col-6'>
        <Skeleton className='skeleton-livestream'/>
      </div>
    )
  };
  return (
    <div className='row'>
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent />
    </div>
  )
};

export default SkeletonLivestream;