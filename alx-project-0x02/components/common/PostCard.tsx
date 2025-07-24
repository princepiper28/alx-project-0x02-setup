import { FC } from "react";
import { PostProps } from "@/interfaces";

const PostCard: FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 border border-gray-200">
      <h2 className="text-lg font-bold text-blue-700 mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{body}</p>
      <p className="text-sm text-gray-500">Posted by User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
