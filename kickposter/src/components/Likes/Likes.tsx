import React from "react";

type LikeProps = {
  count: number;
  postId: number;
};

const Likes: React.FC<LikeProps> = (props) => {
  /*
    TODO
  function handleLike() = () => {};
  */

  return <span className="Likes">&#128157; {props.count}</span>;
};

export default Likes;
