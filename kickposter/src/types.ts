export type Post = {
  id: number;
  author: string;
  text: string;
};

export type User = {
  id: number;
  username: string;
  password: string;
  loggedIn: boolean;
};
