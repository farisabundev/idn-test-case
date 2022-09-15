export interface IProfileData {
  img: string,
  full_name: string,
  bio: string,
  following: number,
  followers: number
}

export interface INewsData {
  date: Date | string,
  title: string,
  img: string,
  category: string,
}

export interface ILivestreamData {
  total_live: number,
  title: string,
  img: string,
  category: string,
}

export interface IQuizData {
  img: string,
  category: string,
  title: string,
  total_play: number,
}