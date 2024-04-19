import React, { useEffect, useState } from "react";
import "./PostsContainer.css";
import PostBox from "../Post/Post";
import { Post } from "../../types";
import EventsTesterContainer from "../EventsTester/EventsTesterContainer";
// This library lets you get and set cookies using Cookies.set(k, v) and Cookies.get.
// You may need to look up some more information to find out how to make them stay between
// sessions though...
import Cookies from "js-cookie";
import { getPostsBackend, loadMoreData } from "../../utils";

const PostsContainer: React.FC = () => {
  /* For future reference, a cookie can be set by setting document.cookie equal to
     a string, such as `cookieName=${javaScriptVariable}`. We can also add properties
     by adding a semicolon, such as `cookieName=${javaScriptVariable};max-age=2000`
     Who knows when this could be useful?
  */
  const [posts, setPosts] = useState<Array<Post>>(getPostsBackend());

  useEffect(() => {
    /* Infinite scrolling example! Anything put here will be run once on each load. 
       For reference, you can compare your position on the page with
       window.innerHeight + window.pageYOffset, and the pixel position of the bottom
       of the page with document.body.offsetHeight.
    */
    const scrollPos = Cookies.get("scrollPosition");
    if (scrollPos) {
      window.scrollTo(0, parseInt(scrollPos));
    }
    window.addEventListener("scroll", hasScrolledToBottomOfPage);
    window.addEventListener("scroll", setScrollCookie);
    return () => {
      window.removeEventListener("scroll", hasScrolledToBottomOfPage);
      window.removeEventListener("scroll", setScrollCookie);
    };
  });

  /*
  1. page loads
  2. window (browser object) gets two event listeners added to it (we return a callback function from this step, DOES NOT CALL IT)
  3. do stuff on page, user views logs in, etc.
  4. page is unloaded (e.g. from refresh, changing content, etc)
  5. window (browser object) gets two event listeners removed from it (here we call the callback)
  */

  const logWhenScrolling = () => {
    console.log("scroll event!");
  };

  const setScrollCookie = () => {
    document.cookie = `scrollPosition=${window.scrollY};max-age=604800`;
  };

  const hasScrolledToBottomOfPage = () => {
    const closeToBottomBuffer = 20;
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - closeToBottomBuffer
    ) {
      setPosts(loadMoreData());
    }
  };

  const postElements = posts.map((post: Post) => {
    post.when = new Date(post.when);
    return <PostBox {...post} key={post.id} />;
  });

  return (
    <div className="Posts-container">
      {/* Currently this feedname is just a string, but you can put 
          JavaScript variables into your HTML with brackets like this,
          if that's ever useful to know.
        */}
      <div className="Posts-title">{localStorage.getItem("feedname")}</div>
      {postElements}
    </div>
  );
};

export default PostsContainer;
