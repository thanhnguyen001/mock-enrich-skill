import { postApi } from "api/postApi";
import News from "components/News/News";
import { useAppSelector } from "hooks/hook";
import { INews } from "models";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./RightBar.scss";

const RightBar = () => {
  const [newsList, setNewsList] = useState<INews[]>([]);
  const { rightBar } = useAppSelector((state) => state.layout);

  useEffect(() => {
    // get list news
    getListNews();
  }, []);

  const getListNews = async () => {
    try {
      const { data } = await postApi.getPosts();
      const topList: INews[] = [];
      for (let item of data) {
        if (item.tin_noi_bat) {
          topList.push(item);
        }
        if (topList.length >= 10) {
          break;
        }
      }
      setNewsList(topList);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="right-bar" className={`w-[280px] ${rightBar}`}>
      <div className="right-content">
        <div className="right-heading">
          <p className="text-[20px] font-[700] mb-16px">Top News</p>
        </div>
        <div className="right-body">
          <div className="right-news-list">
            {newsList.map((item, index) => (
              <News key={index} news={item} isAtRight={true} />
            ))}
            {newsList.length >= 10 && (
              <Link to="/" className="more text-end">
                see more...
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
