import "./PostsContainer.css";
import PostBox from "../Post/Post";
import { Post } from "../../types";
import { useEffect } from "react";

function HasScrolledToBottomOfPage(event: Event) {
  const closeToBottomBuffer = 20;
  if (
    window.innerHeight + window.pageYOffset >=
    document.body.offsetHeight - closeToBottomBuffer
  ) {
    console.log("At bottom of page");
  }
}

function PostsContainer() {
  useEffect(() => {
    window.addEventListener("scroll", HasScrolledToBottomOfPage);
    return () => {
      window.removeEventListener("scroll", HasScrolledToBottomOfPage);
    };
  });

  const posts = JSON.parse(localStorage.getItem("posts")!!).map((post: Post) =>
    PostBox(post)
  );
  return (
    <div className="Posts-container">
      <div className="Posts-title">Your feed</div>
      {posts}
    </div>
  );
}

export default PostsContainer;
