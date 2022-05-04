import React from "react";
import { Post } from "../../types";
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
      </p>
      <p>{post.text}</p>
    </div>
  );
};

export default PostBox;
