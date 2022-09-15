import { useEffect, useState } from 'react';

const ProfileTabs = (props: any) => {
  const handleChangeTab = (value: string) => {
    props.setSelectedTab(value);
  }

  return(
    <div className='mt-4 d-flex align-items-center justify-content-between'>
      <button className='btn btn-tab' onClick={() => handleChangeTab("NEWS")}>Berita</button>
      <button className='btn btn-tab' onClick={() => handleChangeTab("LIVESTREAM")}>Livestream</button>
      <button className='btn btn-tab' onClick={() => handleChangeTab("QUIZ")}>Quiz</button>
    </div>
  )
}

export default ProfileTabs;