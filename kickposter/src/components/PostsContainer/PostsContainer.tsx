import React, { useEffect, useState } from "react";
import "./PostsContainer.css";
import PostBox from "../Post/Post";
import { Post } from "../../types";
import { loadMoreData, createPost } from "../../utils";
//import Cookies from 'js-cookie';

const PostsContainer: React.FC = () => {
  const [posts, setPosts] = useState<Array<ReturnType<typeof createPost>>>(
    JSON.parse(localStorage.getItem("posts")!!)
  );

  useEffect(() => {
    /*
    const scrollPos = Cookies.get("scrollPosition")
    if (scrollPos) {
      window.scrollTo(0, parseInt(scrollPos))
    }
    window.addEventListener("scroll", updateScrollCookie);
    */
    window.addEventListener("scroll", HasScrolledToBottomOfPage);
    return () => {
      window.removeEventListener("scroll", HasScrolledToBottomOfPage);
    };
  });

  /*
  function updateScrollCookie() {
    document.cookie = `scrollPosition=${window.pageYOffset};max-age=604800`
  }
  */

  function HasScrolledToBottomOfPage(event: Event) {
    const closeToBottomBuffer = 20;
    if (
      window.innerHeight + window.pageYOffset >=
      document.body.offsetHeight - closeToBottomBuffer
    ) {
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
