import React from "react";
import { Post } from "../../types";
//import Likes from "../Likes/Likes";
import TimeSince, { TimeSinceWebComponent } from "../TimeSince/TimeSince";
import "./Post.css";

const PostBox: React.FC<Post> = (post: Post) => {
  return (
    <div className="Post" key={post.id}>
      <p>
        From @
        <span style={{ color: "dodgerblue", fontWeight: "bold" }}>
          {post.author}
        </span>
        <TimeSinceWebComponent date={post.when} />
      </p>
      <p></p>
      <p>{post.text}</p>
      {/*
      <p>
        <Likes count={post.likeCount} postId={post.id}/>
      </p>
     */}
    </div>
  );
};

export default PostBox;
