import type { NextPage } from 'next'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProfileBio from '../../components/profile/Bio';
import ProfileLivestream from '../../components/profile/Livestream';
import ProfileTabs from '../../components/profile/Tabs';
import { ILivestreamData } from '../../types';

const ProfileLivestreamPage: NextPage = () => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState('LIVESTREAM')
  const [profileData, setProfileData] = useState({
    img: "",
    full_name: "",
    bio: "",
    following: 0,
    followers: 0
  });
  const [allLiveStreams, setAllLivestreams] = useState(Array<ILivestreamData>);

  useEffect(() => {
    fetchLivestream();
  }, []);

  const fetchLivestream = async () => {
    try {
      const response = await fetch('/api/livestream');
      const data = await response.json();
      const result = [...allLiveStreams, ...data.data];

      setAllLivestreams(result);
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
        <title>Profile | Livestream</title>
      </Head>
      <div className='profile'>
        <ProfileTabs selectedTab={selectedTab} setSelectedTab={(val:string) => changeRoute(val)}/>
        <ProfileLivestream dataLivestreams={allLiveStreams} fetchLivestream={() => fetchLivestream()}/>
      </div>
    </>
  )
}

export default ProfileLivestreamPage;