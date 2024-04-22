import React from "react";
import { commentsData } from "../Utils/commentsData";
import CommentsList from "./CommentList";

const CommentsContainer = () => {
  return (
    <div className="m-5 ml-10 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
