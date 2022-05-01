import './PostsContainer.css';
import PostBox from '../Post/Post'
import { Post } from '../../types';

function PostsContainer() {
  const posts = JSON.parse(localStorage.getItem("posts")!!)
    .map((post: Post) => PostBox(post))
  return (
    <div className="Posts-container">
      <div className="Posts-title">
        Your feed
      </div>
      {posts}
    </div>
  );
}

export default PostsContainer;
