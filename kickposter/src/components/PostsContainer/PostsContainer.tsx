import React, { useEffect, useState } from "react";
import "./PostsContainer.css";
import PostBox from "../Post/Post";
import { Post } from "../../types";
import { loadMoreData } from "../../utils";

const PostsContainer: React.FC = () => {
  const [posts, setPosts] = useState<Array<Post>>(
    JSON.parse(localStorage.getItem("posts")!!)
  );

  useEffect(() => {
    window.addEventListener("scroll", hasScrolledToBottomOfPage);
    // window.addEventListener("scroll", logWhenScrolling)
    // if we had used window.onscroll we could've wiped out someone else using the same function, so using
    // add/remove event listener ensures we keep ourselves encapsulated

    return () => {
      window.removeEventListener("scroll", hasScrolledToBottomOfPage);
      //window.removeEventListener("scroll", logWhenScrolling);
    };
  });

  const logWhenScrolling = () => {
    console.log("I got a scroll event!");
  };

  const hasScrolledToBottomOfPage = (event: Event) => {
    const closeToBottomBuffer = 20;
    if (
      window.innerHeight + window.pageYOffset >=
      document.body.offsetHeight - closeToBottomBuffer
    ) {
      console.log("At bottom of page");
      loadMoreData();
      setPosts(JSON.parse(localStorage.getItem("posts")!!));
    }
  };

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
