import { postApi } from "api/postApi";
import News from "components/News/News";
import Skeleton from "components/Skeleton/Skeleton";
import SkeletonAvatar from "components/Skeleton/SkeletonAvatar";
import { useAppDispatch } from "hooks/hook";
import { ILayout, INews } from "models";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { initialLayout, setLayout } from "reducers/layoutReducer";

const DetailNews: React.FC = () => {
  const dispatch = useAppDispatch();
  const [news, setNews] = useState<INews>();
  const [isLoading, setIsLoading] = useState(false);
  // const isLoading = useRef(true);

  const { newsId } = useParams();
  const layout: ILayout = {
    leftBar: "none",
    // rightBar: "none",
  };

  useEffect(() => {
    dispatch(setLayout(layout));
    setIsLoading(true);
    handleGetDetailNews();

    return () => {
      dispatch(setLayout(initialLayout));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsId]);

  const handleGetDetailNews = async () => {
    if (!newsId) return;
    try {
      const res = await postApi.getPost(newsId);
      setNews(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="detail-news">
      {isLoading && (
        <div className="is-loading">
          <SkeletonAvatar />
          <div className="mt-16px">
            <Skeleton type="text" />
            <Skeleton type="text" />
            <div className="mt-16px h-[300px]">
              <Skeleton />
            </div>
          </div>
        </div>
      )}
      {!isLoading && news && <News news={news} isDetail={true} />}
    </div>
  );
};

export default DetailNews;
