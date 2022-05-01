import { builtinModules } from "module";
import { Post } from "../../types";
import "./Post.css";

function PostBox(post: Post) {
  return (
    <div className="Post" key={post.id}>
      <p>
        From @
        <span style={{ color: "dodgerblue", fontWeight: "bold" }}>
          {post.author}
        </span>
      </p>
      <p>{post.text}</p>
    </div>
  );
}

export default PostBox;
