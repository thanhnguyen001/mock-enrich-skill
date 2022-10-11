import { AppstoreAddOutlined, CameraFilled, MailOutlined, PhoneOutlined, UnorderedListOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { postApi } from "api/postApi";
import { userApi } from "api/userApi";
import News from "components/News/News";
import { BASE_API_GET_IMG } from "constants/constant";
import { useAppDispatch, useAppSelector } from "hooks/hook";
import { ILayout, INews, IUser } from "models";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { initialLayout, setLayout } from "reducers/layoutReducer";
import "./UserPage.scss";
import { Menu } from "antd";
import { setUserInfo } from "reducers/userReducer";

const items: MenuProps["items"] = [
  {
    label: "Danh sách bài viết",
    key: "list",
    icon: <UnorderedListOutlined />,
  },
  {
    label: "Tạo bài viết",
    key: "create-post",
    icon: <AppstoreAddOutlined />,
  },
];

const UserPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const userMain = useAppSelector(state => state.user);
  const { userId } = useParams();
  const [user, setUser] = useState<IUser>();
  const [post, setPost] = useState<INews[]>([]);
  const [view, setView] = useState("list");
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    const userLayout: ILayout = {
      leftBar: "none",
      rightBar: "none",
    };

    dispatch(setLayout(userLayout));
    handleGetUser();

    return () => {
      dispatch(setLayout(initialLayout));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const handleGetUser = async () => {
    if (!userId) return;
    try {
      const res = await userApi.getUser(userId);
      setUser(res.data);
      setAvatar(`${BASE_API_GET_IMG}${res.data.anh_dai_dien}`);
      getListNews(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getListNews = async (author: IUser) => {
    try {
      const { data } = await postApi.getPosts();
      const postOfUser = data.filter(
        (item) => item.nguoi_tao === author?.ten_nhan_vien || item.nguoi_tao === author?.nhan_vien_id
      );
      setPost(postOfUser);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeView: MenuProps["onClick"] = (e) => {
    setView(e.key);
  };

  const handleUploadAvatar = (e: ChangeEvent) => {
    const imgFile = (e.target as HTMLInputElement).files;
    console.log(imgFile);
    if (imgFile && imgFile.length) {
      const tempUrl = window.URL.createObjectURL(imgFile[0]);
      setAvatar(`${BASE_API_GET_IMG}${tempUrl}`);
      updateUser();
    }
  }

  const updateUser = async () => {
    if (!user) return;
    const body: IUser = {...user, anh_dai_dien: avatar};
    try {
      const res = await userApi.updateUser(body);
      dispatch(setUserInfo(res.data))
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="user flex">
      <div className="user-info py-[8px] w-full flex">
        <div className="user-intro justify-center items-center w-[35%] rounded-[5px]">
          <div className="flex relative">
            {user?.nhan_vien_id === userMain?.nhan_vien_id && <div className="camera absolute bottom-[0px] left-[85px]  opacity-80 cursor-pointer">
              <input type="file" name="avatar" onChange={(e) => handleUploadAvatar(e)}/>              
              <CameraFilled className="camera-icon" />
            </div>}
            <div className="user-avatar  ">
              <img
                src={
                  user?.anh_dai_dien
                    ? avatar
                    : "data:image/png;base64,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"
                }
                alt=""
              />
            </div>

            <div className="user-name text-tx-color ml-[12px]">
              <p className="text-[28px] font-[700]">{user?.ten_nhan_vien}</p>
              <p className="text-tx-color">{user?.chuc_vu}</p>
            </div>
          </div>
          <p className="mt-16px text-[20px] font-[700]">Giới thiệu</p>
          <div className="user-contact flex flex-wrap mt-16px">
            <div className="user-email w-[50%] flex items-center text-tx-color">
              <MailOutlined />
              <p className="ml-8px">{user?.email}</p>
            </div>
            <div className="user-phone w-[50%] flex items-center text-tx-color">
              <PhoneOutlined />
              <p className="ml-8px">{user?.so_dien_thoai ? user.so_dien_thoai : "0123455552"}</p>
            </div>
            <div className="mt-8px w-[50%] flex items-center text-tx-color">
              <p className="font-[600]">Địa chỉ: </p>
              <p className="ml-8px">{user?.dia_chi ? user.dia_chi : ""}</p>
            </div>
          </div>
          <div className="user-des ">
            <p className="mt-8px w-full inline-block text-tx-color">
              <i className="max-w-[700px] mx-auto inline-block">"{user?.gioi_thieu}"</i>
            </p>
          </div>
        </div>
        <div className="user-post ml-16px w-[75%] flex-1 ">
          <div className="w-full mb-16px">
            <Menu
              className="view-mode rounded-[5px]"
              onClick={handleChangeView}
              selectedKeys={[view]}
              mode="horizontal"
              items={items}
            />
          </div>
          <div className="list-news">
            {post.map((item, index) => (
              <News key={index} news={item} />
            ))}
            {!post.length && <div className="text-tx-color text-center">chưa có bài viết nào!</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
