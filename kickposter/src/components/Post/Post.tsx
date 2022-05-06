import React from "react";
import { Post } from "../../types";
import TimeSince from "../TimeSince/TimeSince";
import "./Post.css";

const PostBox: React.FC<Post> = (post: Post) => {
  return (
    <div className="Post" key={post.id}>
      <p>
        <p>
          #{post.id} 
        </p>
        From @
        <span style={{ color: "dodgerblue", fontWeight: "bold" }}>
          {post.author}
        </span>
        <TimeSince date={post.when} />
      </p>
      <p></p>
      <p>{post.text}</p>
    </div>
  );
};

export default PostBox;
