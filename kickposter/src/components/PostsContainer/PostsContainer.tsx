import React, { useEffect, useState } from "react";
import "./PostsContainer.css";
import PostBox from "../Post/Post";
import { Post } from "../../types";
import { loadMoreData, createPost } from "../../utils";
//import Cookies from 'js-cookie';
import EventsTester from "../EventsTesterContainer/EventsTesterContainer";

const PostsContainer: React.FC = () => {
  const [posts, setPosts] = useState<Array<Post>>(
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
    window.addEventListener("scroll", hasScrolledToBottomOfPage);
    // window.addEventListener("scroll", logWhenScrolling)
    // if we had used window.onscroll we could've wiped out someone else using the same function, so using
    // add/remove event listener ensure s we keep ourselves encapsulated

    return () => {
      window.removeEventListener("scroll", hasScrolledToBottomOfPage);
      //window.removeEventListener("scroll", logWhenScrolling);
    };
  });

  /*
  function updateScrollCookie() {
    document.cookie = `scrollPosition=${window.pageYOffset};max-age=604800`
  }
  */

  const logWhenScrolling = () => {
    console.log("I got a scroll event!");
  };

  const hasScrolledToBottomOfPage = (event: Event) => {
    const closeToBottomBuffer = 20;
    if (
      window.innerHeight + window.pageYOffset >=
      document.body.offsetHeight - closeToBottomBuffer
    ) {
      loadMoreData();
      setPosts(JSON.parse(localStorage.getItem("posts")!!));
    }
  };

  const postElements = posts.map((post: Post) => {
    post.when = new Date(post.when);
    return <PostBox {...post} key={post.id} />;
  });

  /*
  function getFeedName() {
    return localStorage.getItem("feedname")
  }

  return (
    <div className="Posts-container">
      <div className="Posts-title">{getFeedName() ?? "Your feed"}</div>
      {postElements}
    </div>
  );
  */
  return (
    <div className="Posts-container">
      <div className="Posts-title">Your feed</div>
      {/* <EventsTester /> */}
      {postElements}
    </div>
  );
};

export default PostsContainer;
