import type { NextPage } from 'next'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProfileBio from '../../components/profile/Bio';
import ProfileQuiz from '../../components/profile/Quiz';
import ProfileTabs from '../../components/profile/Tabs';
import { IQuizData } from '../../types';

const ProfileQuizPage: NextPage = () => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState('QUIZ')
  const [profileData, setProfileData] = useState({
    img: "",
    full_name: "",
    bio: "",
    following: 0,
    followers: 0
  });
  const [allQuizzes, setAllQuizzes] = useState(Array<IQuizData>);

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    try {
      const response = await fetch('/api/quiz');
      const data = await response.json();
      const result = [...allQuizzes, ...data.data]

      setAllQuizzes(result);
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
        <title>Profile | Quiz</title>
      </Head>
      <div className='profile'>
        <ProfileTabs selectedTab={selectedTab} setSelectedTab={(val:string) => changeRoute(val)}/>
        <ProfileQuiz dataQuizzes={allQuizzes} fetchQuiz={() => fetchQuiz()}/>
      </div>
    </>
  )
}

export default ProfileQuizPage;