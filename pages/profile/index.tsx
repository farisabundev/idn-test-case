import type { NextPage } from 'next'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProfileNews from '../../components/profile/News';
import ProfileTabs from '../../components/profile/Tabs';
import { INewsData } from '../../types';

const ProfilePage: NextPage = (props) => {
  const router = useRouter();

  const [selectedTab, setSelectedTab] = useState('NEWS');
  const [allNews, setAllNews] = useState(Array<INewsData>);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch('/api/news');
      const data = await response.json();

      setAllNews(data);
    } catch (error) {
      throw error;
    }
  };

  const handleChangeTab = (val: string) => {
    setSelectedTab(val);

    switch (val) {
      case "NEWS":
        router.push('/profile/news', undefined, { shallow: true });
        break;
      case "LIVESTREAM":
        router.push('/profile/livestream', undefined, { shallow: true });
        break;
      case "QUIZ":
        router.push('/profile/quiz', undefined, { shallow: true });
        break;
    }
  };

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div className='profile'>
        <ProfileTabs selectedTab={selectedTab} setSelectedTab={(val:string) => handleChangeTab(val)}/>
        <ProfileNews dataNews={allNews} />  
      </div>
    </>
  )
}

export default ProfilePage;