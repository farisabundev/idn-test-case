import '../styles/globals.scss';
import '../styles/skeleton.scss';
import '../styles/profile.scss';
import '../styles/news.scss';
import '../styles/livestream.scss';
import '../styles/quiz.scss';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-loading-skeleton/dist/skeleton.css';

import type { AppProps } from 'next/app';

import { useEffect, useState } from 'react';
import ProfileBio from '../components/profile/Bio';

function MyApp({ Component, pageProps }: AppProps) {
  const [profileData, setProfileData] = useState({
    img: "",
    full_name: "",
    bio: "",
    following: 0,
    followers: 0
  });

  useEffect(() => {
    fetchProfile();

    window.scrollTo(0,0);
  }, []);

  const fetchProfile = async() => {
    try {
      const response = await fetch('/api/profile');
      const data = await response.json();

      setProfileData(data);
    } catch (error) {
      throw error;
    }
  };
  return (
    <>
    <div className='container mt-5'>
      <ProfileBio profileData={profileData} />
      <Component {...pageProps} profileData={profileData} />
    </div>
    </>
  )
}

export default MyApp
