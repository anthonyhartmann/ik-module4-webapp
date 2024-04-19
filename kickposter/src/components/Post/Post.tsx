import React from "react";
import { Post } from "../../types";
import TimeSince from "../TimeSince/TimeSince";
import "./Post.css";
import Likes from "../Likes/Likes";

const PostBox: React.FC<Post> = (post: Post) => {
  return (
    <div className="Post" key={post.id}>
      <div>
        <p>#{post.id}</p>
        From @
        <span style={{ color: "dodgerblue", fontWeight: "bold" }}>
          {post.author}
        </span>
        <TimeSince date={post.when} />
      </div>
      <p></p>
      <p>{post.text}</p>
      <p>
        <Likes count={post.likeCount} postId={post.id}/>
      </p>
    </div>
  );
};

export default PostBox;
