import { createBrowserHistory } from "@remix-run/router";
import { postApi } from "api/postApi";
import News from "components/News/News";
import { useAppDispatch, useAppSelector } from "hooks/hook";
import { ILayout, INews } from "models";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { initialLayout, setLayout } from "reducers/layoutReducer";

const DetailNews: React.FC = () => {
  const dispatch = useAppDispatch();
  const [news, setNews] = useState<INews>();
  const { newsId } = useParams();
  const layout: ILayout = {
    leftBar: "none",
    // rightBar: "none",
  };

  useEffect(() => {
    dispatch(setLayout(layout));

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
    } catch (error) {
      console.log(error);
    }
  };

  return <div className="detail-news">{news && <News news={news} isDetail={true} />}</div>;
};

export default DetailNews;
