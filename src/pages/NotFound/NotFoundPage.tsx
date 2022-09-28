import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="h-full w-full flex justify-center items-center flex-col text-[30px]">
      <h1>Not Fount Page</h1>
      <Link to={"/"}>Go to Home</Link>
    </div>
  );
};

export default NotFoundPage;
