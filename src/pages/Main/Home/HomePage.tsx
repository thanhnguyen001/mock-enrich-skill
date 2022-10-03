import { postApi } from "api/postApi";
import News from "components/News/News";
import Skeleton from "components/Skeleton/Skeleton";
import SkeletonAvatar from "components/Skeleton/SkeletonAvatar";
import { INews } from "models";
import React, { useEffect, useState } from "react";
import "./HomePage.scss";

const HomePage: React.FC = (props) => {
  const [newsList, setNewsList] = useState<INews[]>([]);
  const [isAllList, setIsAllList] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // get list news
    getListNews();
  }, []);

  const getListNews = async () => {
    try {
      const { data } = await postApi.getPosts();
      setNewsList(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home  mx-auto">
      <div className="home-heading flex items-center mb-16px">
        <div className="display mr-16px active">Relevant</div>
        <div className="display">Latest</div>
      </div>
      <div className="home-body mt-16px">
        {isLoading && <div className="is-loading">
          <SkeletonAvatar />
          <div className="mt-16px">
            <Skeleton type="text" />
            <div className="mt-16px h-[300px]">
              <Skeleton />
            </div>
          </div>
        </div>}

        {!isLoading && <div className={`home-news-list ${isAllList ? "all-list" : ""}`}>
          {newsList.map((item, index) => (
            <News key={index} news={item} />
          ))}
        </div>}
      </div>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
