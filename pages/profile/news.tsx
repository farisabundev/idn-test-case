import type { NextPage } from 'next'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { INewsData } from '../../types';
import ProfileNews from '../../components/profile/News';
import ProfileTabs from '../../components/profile/Tabs';

const ProfileNewsPage: NextPage = () => {
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
      const result = [...allNews, ...data.data];

      setAllNews(result);
    } catch (error) {
      throw error;
    }
  };

  const changeRoute = (val: string) => {
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
        <title>Profile | News</title>
      </Head>
      <div className='profile'>
        <ProfileTabs selectedTab={selectedTab} setSelectedTab={(val:string) => changeRoute(val)}/>
        <ProfileNews dataNews={allNews} fetchNews={() => fetchNews()}/>
      </div>
    </>
  )
}

export default ProfileNewsPage;