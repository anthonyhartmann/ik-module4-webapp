import React, { useEffect, useState } from "react";
import "./PostsContainer.css";
import PostBox from "../Post/Post";
import { Post } from "../../types";
import { loadMoreData, createPost } from "../../utils";

const PostsContainer: React.FC = () => {
  const [posts, setPosts] = useState<Array<ReturnType<typeof createPost>>>(
    JSON.parse(localStorage.getItem("posts")!!)
  );

  useEffect(() => {
    window.addEventListener("scroll", HasScrolledToBottomOfPage);
    return () => {
      window.removeEventListener("scroll", HasScrolledToBottomOfPage);
    };
  });

  function HasScrolledToBottomOfPage(event: Event) {
    const closeToBottomBuffer = 20;
    if (
      window.innerHeight + window.pageYOffset >=
      document.body.offsetHeight - closeToBottomBuffer
    ) {
      console.log("At bottom of page");
      loadMoreData();
      setPosts(JSON.parse(localStorage.getItem("posts")!!));
    }
  }

  const postElements = posts.map((post: Post) => (
    <PostBox {...post} key={post.id} />
  ));

  return (
    <div className="Posts-container">
      <div className="Posts-title">Your feed</div>
      {postElements}
    </div>
  );
};

export default PostsContainer;
