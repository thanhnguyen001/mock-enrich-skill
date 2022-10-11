import { postApi } from "api/postApi";
import News from "components/News/News";
import Skeleton from "components/Skeleton/Skeleton";
import SkeletonAvatar from "components/Skeleton/SkeletonAvatar";
import { useAppSelector } from "hooks/hook";
import { INews } from "models";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./HomePage.scss";

const HomePage: React.FC = (props) => {
  const { category } = useParams();
  //Redux
  const categories = useAppSelector((state) => state.category);
  //State
  const [newsList, setNewsList] = useState<INews[]>([]);
  const [isAllList, setIsAllList] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState("normal");

  useEffect(() => {
    // get list news
    getListNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view, category]);

  const getListNews = async () => {
    setIsLoading(true);
    try {
      let { data } = await postApi.getPosts();
      if (view !== "normal") {
        data.sort((a, b) => {
          if (a.ngay_tao && b.ngay_tao && a.ngay_tao <= b.ngay_tao) {
            return 1;
          } else {
            return -1;
          }
        });
      }
      if (category) {
        const categoryIndex = categories.findIndex((item) => item.ten_nhom === category);
        if (categoryIndex > -1) {
          data = data.filter((item) => item.nhom_tin_tuc_id === categories[categoryIndex].nhom_tin_tuc_id);
        }
      }
      setNewsList(data);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeView = (val: string) => {
    setView(val);
    setIsLoading(true);
  };

  return (
    <div className="home  mx-auto">
      <div className="home-heading flex items-center mb-16px">
        <div onClick={() => handleChangeView("normal")} className={`display mr-16px ${view === "normal" ? "active" : ""}`}>
          Relevant
        </div>
        <div onClick={() => handleChangeView("latest")} className={`display ${view === "latest" ? "active" : ""}`}>
          Latest
        </div>
      </div>
      <div className="home-body mt-16px">
        {isLoading && (
          <div className="is-loading">
            <SkeletonAvatar />
            <div className="mt-16px">
              <Skeleton type="text" />
              <div className="mt-16px h-[300px]">
                <Skeleton />
              </div>
            </div>
          </div>
        )}

        {!isLoading && (
          <div className={`home-news-list ${isAllList ? "all-list" : ""}`}>
            {!newsList.length && <div className="text-center">Chưa có bài viết nào</div>}

            {newsList.map((item, index) => (
              <News key={index} news={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
