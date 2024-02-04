import { create } from "domain";
import { Post, User } from "./types";

const authors = ["ruby", "opal", "onyx", "emerald", "pyrite", "gold", "silver"];
const postsBodies = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed velit dignissim sodales ut eu.",
  "Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Diam sollicitudin tempor id eu. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Cursus risus at ultrices mi.",
  "Nibh cras pulvinar mattis nunc. Magna sit amet purus gravida quis. Quis risus sed vulputate odio ut enim blandit volutpat.",
  "Purus in massa tempor nec feugiat. Ut tristique et egestas quis ipsum suspendisse. Imperdiet nulla malesuada pellentesque elit eget.",
  "Diam ut venenatis tellus in metus vulputate eu. Viverra tellus in hac habitasse platea. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.",
  "Eleifend mi in nulla posuere sollicitudin. Purus in massa tempor nec feugiat. Ut tristique et egestas quis ipsum suspendisse.",
  "Laoreet id donec ultrices tincidunt. A arcu cursus vitae congue mauris rhoncus.",
];

const Now = new Date();

export const getPostsBackend = () => {
  return JSON.parse(localStorage.getItem("posts")!!);
};

export const setPostsBackend = () => {
  return localStorage.setItem("posts", JSON.stringify(posts));
};

export const createPost = (id: number, author: string, text: string): Post => {
  return {
    id,
    author,
    text,
    when: new Date(Now.getTime() - Math.random() * 1000 * 60 * 60 * 24 * 2),
    likeCount: Math.floor(Math.random() * 250),
  };
};

const posts: Post[] = authors.map((author, idx) =>
  createPost(idx, author, postsBodies[idx])
);

export const loadInitialData = function () {
  if (!localStorage.getItem("posts")) {
    localStorage.setItem("posts", JSON.stringify(posts));
  }
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([]));
  }
};

export const getLoggedInUser = function () {
  const users = localStorage.getItem("users");
  const usersDeserialized: User[] = JSON.parse(users!!);
  return usersDeserialized.find((user) => user.loggedIn);
};

export const loadMoreData = () => {
  let currentPosts: Array<Post> = JSON.parse(localStorage.getItem("posts")!!);
  let currentCount = currentPosts.length;
  currentPosts.push(
    createPost(
      currentCount,
      authors[(authors.length * Math.random()) | 0],
      postsBodies[(postsBodies.length * Math.random()) | 0]
    )
  );
  currentPosts.push(
    createPost(
      currentCount + 1,
      authors[(authors.length * Math.random()) | 0],
      postsBodies[(postsBodies.length * Math.random()) | 0]
    )
  );
  currentPosts.push(
    createPost(
      currentCount + 2,
      authors[(authors.length * Math.random()) | 0],
      postsBodies[(postsBodies.length * Math.random()) | 0]
    )
  );
  localStorage.setItem("posts", JSON.stringify(currentPosts));
  return currentPosts;
};
