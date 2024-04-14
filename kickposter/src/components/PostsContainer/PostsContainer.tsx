import React, { useEffect, useState } from "react";
import "./PostsContainer.css";
import PostBox from "../Post/Post";
import { Post } from "../../types";
import EventsTesterContainer from "../EventsTester/EventsTesterContainer";
// This library lets you get and set cookies using Cookies.set(k, v) and Cookies.get.
// You may need to look up some more information to find out how to make them stay between
// sessions though...
import Cookies from "js-cookie";
import { getPostsBackend } from "../../utils";

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
  });

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
      <div className="Posts-title">Your feed</div>
      {/* Event tester example! Uncomment the EventsTesterContainer below to reveal the events tester.}
      {/*</EventsTesterContainer/>*/}
      {postElements}
    </div>
  );
};

export default PostsContainer;
