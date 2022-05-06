import React, { useEffect, useState } from "react";
import "./PostsContainer.css";
import PostBox from "../Post/Post";
import { Post } from "../../types";

const PostsContainer: React.FC = () => {
  const [posts, setPosts] = useState<Array<Post>>(
    JSON.parse(localStorage.getItem("posts")!!)
  );

  const postElements = posts.map((post: Post) => {
    post.when = new Date(post.when);
    return <PostBox {...post} key={post.id} />;
  });
  
  return (
    <div className="Posts-container">
      <div className="Posts-title">Your feed</div>
      {postElements}
    </div>
  );
};

export default PostsContainer;
