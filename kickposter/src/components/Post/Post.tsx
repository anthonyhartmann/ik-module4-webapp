import React from "react";
import { Post } from "../../types";
import TimeSince from "../TimeSince/TimeSince";
import "./Post.css";

const PostBox: React.FC<Post> = (post: Post) => {
  return (
    <div className="Post" key={post.id}>
      <div>
        <p>
          #{post.id} 
        </p>
        From @
        <span style={{ color: "dodgerblue", fontWeight: "bold" }}>
          {post.author}
        </span>
        <TimeSince date={post.when} />
      </div>
      <p></p>
      <p>{post.text}</p>
      {/* This is where the Likes example would go! 
        This will be implemented by the instructor, 
        but feel free to try on your own! */}
    </div>
  );
};

export default PostBox;
