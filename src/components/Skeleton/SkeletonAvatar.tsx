import React from "react";
import Skeleton from "./Skeleton";

const SkeletonAvatar: React.FC = () => {
  return (
    <div className="flex">
      <Skeleton type="avatar" />
      <div>
        <div className="w-[150px] ml-[6px]">
          <Skeleton type="text" />
        </div>
        <div className="w-[100px] ml-[6px] mt-4px">
          <Skeleton type="text" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonAvatar;
