export type Post = {
  id: number;
  author: string;
  text: string;
  when: Date;
  likeCount: number;
};

export type User = {
  id: number;
  username: string;
  password: string;
  loggedIn: boolean;
};
