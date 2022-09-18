const ProfileTabs = (props: any) => {
  const handleChangeTab = (value: string) => {
    props.setSelectedTab(value);
  }

  return(
    <div className='mt-4 row'>
      <div className='col'>
        <button className={`btn btn-tab ${props.selectedTab === 'NEWS' ? 'active' : ''}`} onClick={() => handleChangeTab("NEWS")}>Berita</button>
      </div>
      <div className='col'>
        <button className={`btn btn-tab ${props.selectedTab === 'LIVESTREAM' ? 'active' : ''}`} onClick={() => handleChangeTab("LIVESTREAM")}>Livestream</button>
      </div>
      <div className='col'>
        <button className={`btn btn-tab ${props.selectedTab === 'QUIZ' ? 'active' : ''}`} onClick={() => handleChangeTab("QUIZ")}>Quiz</button>
      </div>
    </div>
  )
}

export default ProfileTabs;