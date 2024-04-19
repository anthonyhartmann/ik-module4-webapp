import React from "react";

type Props = {
  count: number;
  postId: number;
};

const Likes: React.FC<Props> = (props) => {
  return <span className="Likes">&#128157; {props.count}</span>;
};

export default Likes;
