import React, { useEffect, useState } from "react";
import "./PostsContainer.css";
import PostBox from "../Post/Post";
import { Post } from "../../types";
import EventsTesterContainer from "../EventsTester/EventsTesterContainer";
import { loadMoreData } from "../../utils";
import Cookies from 'js-cookie';

interface PostContainerProps {
  webSocketUpdated: boolean
}

const PostsContainer: React.FC<PostContainerProps> = (props: PostContainerProps) => {
  const [posts, setPosts] = useState<Array<Post>>(
    JSON.parse(localStorage.getItem("posts")!!)
  );
  
  useEffect(() => {
    setPosts(JSON.parse(localStorage.getItem("posts")!!))
  }, [props.webSocketUpdated])

  useEffect(() => {
    const scrollPos = Cookies.get("scrollPosition")
    if (scrollPos) {
      window.scrollTo(0, parseInt(scrollPos))
    }
    window.addEventListener("scroll", hasScrolledToBottomOfPage)
    window.addEventListener("scroll", updateScrollCookie)

    return () => {
      window.removeEventListener("scroll", hasScrolledToBottomOfPage)
    }
  })

  const hasScrolledToBottomOfPage = (event: Event) => {
    const closeToBottom = 20;
    if (
      window.innerHeight + window.pageYOffset >= 
      document.body.offsetHeight - closeToBottom
    ) {
      loadMoreData();
      setPosts(JSON.parse(localStorage.getItem("posts")!!))
    }
  }

  function updateScrollCookie() {
    document.cookie = `scrollPosition=${window.pageYOffset};max-age=604800`
  }

  function getFeedName() {
    return localStorage.getItem("feedname")
  }

  
  useEffect(() => {
    /* Infinite scrolling example! Anything put here will be run once on each load. 
       For reference, you can compare your position on the page with
       window.innerHeight + window.pageYOffset, and the pixel position of the bottom
       of the page with document.body.offsetHeight.
    */
  });

  const postElements = posts.map((post: Post) => {
    post.when = new Date(post.when);
    return <PostBox {...post} key={post.id} />;
  });

  return (
    <div className="Posts-container">
      <div className="Posts-title">{getFeedName() ? getFeedName() : "Your feed"}
      {/*</EventsTesterContainer/>*/}
      {postElements}
    </div>
  );
};

export default PostsContainer;
