import React from "react";
import "./Skeleton.scss";

type SkeletonProps = {
  type?: string;
  width?: string;
};

const Skeleton: React.FC<SkeletonProps> = ({ type, width }) => {
  return (
    <div className={`${type} skeleton h-full relative w-full`}>
      <div className="shimmer absolute"></div>
    </div>
  );
};

export default Skeleton;
