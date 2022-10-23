import { DingtalkCircleFilled, HomeFilled } from "@ant-design/icons";
import { postApi } from "api/postApi";
import { useAppDispatch, useAppSelector } from "hooks/hook";
import { INewsCategory } from "models";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { setCurrentCategory } from "reducers/categoryReducer";
import "./LeftBar.scss";

const LeftBar = () => {
  //Router
  const navigate = useNavigate();
  const location = useLocation();

  //Redux
  const dispatch = useAppDispatch();
  const { leftBar } = useAppSelector((state) => state.layout);
  const categories = useAppSelector((state) => state.category);
  // State
  // const [categories, setCategories] = useState<INewsCategory[]>([]);
  const [category, setCategory] = useState("home");

  useEffect(() => {
    if (location.pathname === '/home') {
      setCategory('home');
      dispatch(setCurrentCategory(null));
      return;
    }
    if (categories.currentCategory?.ten_nhom) {
      setCategory(categories.currentCategory.ten_nhom);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories?.currentCategory?.ten_nhom, location.pathname]);

  const handleChangeView = (val?: INewsCategory) => {
    if (!val) {
      setCategory("home");
      dispatch(setCurrentCategory(null));
      navigate("/");
    } else {
      setCategory(val.ten_nhom);
      dispatch(setCurrentCategory(val));
      navigate(`/categories/${val.ten_nhom}}`);
    }
  };

  return (
    <div id="left-bar" className={`w-[240px] ${leftBar}`}>
      <div className="categories sticky">
        <ul className="list">
          <li
            className={`category px-[8px] py-4px flex items-center cursor-pointer ${category === "home" ? "active" : ""}`}
            title={"Trang chủ"}
            onClick={() => handleChangeView()}
          >
            <div className="flex items-center text-[20px]">
              <HomeFilled style={{ color: "red" }} />
              {leftBar === "normal" && <div className="category-name ml-8px text-tx-color">Trang chủ</div>}
            </div>
          </li>
          {categories.list.map((item, index) => {
            return (
              <li
                key={index}
                className={`${
                  category === item.ten_nhom ? "active" : ""
                } category px-[8px] py-4px flex items-center cursor-pointer`}
                title={item.ten_nhom}
                onClick={() => handleChangeView(item)}
              >
                <div className="flex items-center text-[20px]">
                  <DingtalkCircleFilled />
                  {leftBar === "normal" && <div className="category-name ml-8px text-tx-color">{item.ten_nhom}</div>}
                </div>
              </li>
            );
          })}
        </ul>

        {leftBar === "normal" && <div className="separate"></div>}

        {leftBar === "normal" && (
          <div className="tags">
            <p className="tags-title text-[16px] font-[500] mt-16px">Popular tags</p>
            <ul className="list">
              <li className="tag mt-8px">#reactjs</li>
              <li className="tag mt-8px">#python</li>
              <li className="tag mt-8px">#java</li>
              <li className="tag mt-8px">#angular</li>
              <li className="tag mt-8px">#machinelearning</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftBar;
