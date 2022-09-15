import type { NextPage } from 'next'
import Head from 'next/head';
import { ReactElement, useEffect, useState } from 'react';
import ProfileBio from '../../components/profile/Bio';
import ProfileLivestream from '../../components/profile/Livestream';
import ProfileNews from '../../components/profile/News';
import ProfileQuiz from '../../components/profile/Quiz';
import ProfileTabs from '../../components/profile/Tabs';
import { ILivestreamData, INewsData, IQuizData } from '../../types';

const ProfilePage: NextPage = () => {
  const [selectedTab, setSelectedTab] = useState('NEWS')
  const [profileData, setProfileData] = useState({
    img: "",
    full_name: "",
    bio: "",
    following: 0,
    followers: 0
  });
  const [allNews, setAllNews] = useState(Array<INewsData>)
  const [allLiveStreams, setAllLivestreams] = useState(Array<ILivestreamData>)
  const [allQuizzes, setAllQuizzes] = useState(Array<IQuizData>)

  useEffect(() => {
    fetchProfile();

  }, []);

  const fetchProfile = async() => {
    try {
      const response = await fetch('/api/profile');
      const data = await response.json();

      setProfileData(data);

      if (data) {
        fetchAllData();
      }
    } catch (error) {
      throw error;
    }
  };

  const fetchAllData = async() => {
    try {
      const urls = [
        '/api/news',
        '/api/livestream',
        '/api/quiz',
      ];

      const responses = await Promise.all(urls.map(url => fetch(url)));
      const datas = await Promise.all(responses.map(each_data => each_data.json()));

      for (let index = 0; index < datas.length; index++) {
        switch (index) {
          case 0:
            setAllNews(datas[index]);
            break;

          case 1:
            setAllLivestreams(datas[index]);
            break;

          case 2:
            setAllQuizzes(datas[index]);
            break;
        
          default:
            break;
        }
      }
    } catch (error) {
      throw error;
    }
  }

  const TabSection = () => {
    switch (selectedTab) {
      case "NEWS":
        return <ProfileNews dataNews={allNews} />  
      case "LIVESTREAM":
        return <ProfileLivestream dataLivestreams={allLiveStreams}/>
      case "QUIZ":
        return <ProfileQuiz dataQuizzes={allQuizzes}/>
      default:
        return <></>
    }
  }

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div className='container mt-5 profile'>
        <ProfileBio profileData={profileData} />
        <ProfileTabs setSelectedTab={(val:string) => setSelectedTab(val)}/>
        <TabSection />
      </div>
    </>
  )
}

export default ProfilePage;