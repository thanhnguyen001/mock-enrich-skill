import { DingtalkCircleFilled, HomeFilled, HomeOutlined } from "@ant-design/icons";
import { postApi } from "api/postApi";
import { useAppSelector } from "hooks/hook";
import { INewsCategory } from "models";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LeftBar.scss";

const LeftBar = () => {
  const { leftBar } = useAppSelector((state) => state.layout);
  const navigate = useNavigate();
  // State
  const [categories, setCategories] = useState<INewsCategory[]>([]);
  const [view, setView] = useState('home');

  useEffect(() => {
    handleGetCategories();
  }, []);

  const handleGetCategories = async () => {
    try {
      const { data } = await postApi.getCategories();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeView = (val: string) => {
    setView(val);
    navigate(`${val === 'home' ? '/' : `/categories/${val}`}`);
  }

  return (
    <div id="left-bar" className={`w-[240px] ${leftBar}`}>
      <div className="categories sticky">
        <ul className="list">
          <li className={`category px-[8px] py-4px flex items-center cursor-pointer ${view === 'home' ? 'active' : ''}`} title={"Trang chủ"}>
            <div onClick={() => handleChangeView('home')} className="flex items-center text-[20px]">
              <HomeFilled style={{ color: "red" }} />
              {leftBar === 'normal' && <div className="category-name ml-8px text-tx-color">Trang chủ</div>}
            </div>
          </li>
          {categories.map((item, index) => {
            return (
              <li key={index} className={`${view === item.ten_nhom ? 'active' : ''} category px-[8px] py-4px flex items-center cursor-pointer`} title={item.ten_nhom}>
                <div onClick={() => handleChangeView(`${item.ten_nhom}`)} className="flex items-center text-[20px]">
                  <DingtalkCircleFilled />
                  {leftBar === 'normal' && <div className="category-name ml-8px text-tx-color">{item.ten_nhom}</div>}
                </div>
              </li>
            );
          })}
        </ul>

        {leftBar === 'normal' && <div className="separate"></div>}

        {leftBar === 'normal' && <div className="tags">
          <p className="tags-title text-[16px] font-[500] mt-16px">Popular tags</p>
          <ul className="list">
            <li className="tag mt-8px">#reactjs</li>
            <li className="tag mt-8px">#python</li>
            <li className="tag mt-8px">#java</li>
            <li className="tag mt-8px">#angular</li>
            <li className="tag mt-8px">#machinelearning</li>
          </ul>
        </div>}
      </div>
    </div>
  );
};

export default LeftBar;
