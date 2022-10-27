import { Button, Col, Form, Input, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { userApi } from "api/userApi";
import { useAppDispatch, useAppSelector } from "hooks/hook";
import { IResponseData, IUser } from "models";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { show } from "reducers/dialogReducer";

const { Option } = Select;

const UserForm: React.FC = () => {
  //Router
  const { userId } = useParams();
  const location = useLocation();

  //Redux
  const dispatch = useAppDispatch();

  //State
  const [position, setPosition] = useState<any[]>([]);
  const [user, setUser] = useState<IUser>();
  const [isDetail, setIsDetail] = useState(false);

  const [form] = Form.useForm();

  useEffect(() => {
    if (userId) {
      getUserById(userId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  useEffect(() => {
    if (location.pathname.includes('detail')) {
      setIsDetail(true);
    }
    getUserCategory();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserById = async (id: string) => {
    try {
      const res = (await userApi.getUser(id)) as IResponseData<IUser>;
      if (res.data) {
        setUser(res.data);
        form.setFieldsValue({ ...res.data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserCategory = async () => {
    try {
      const res = (await userApi.getUserCategories()) as IResponseData<any[]>;
      if (res.data) {
        setPosition(res.data);

        if (!userId) {
          form.setFieldsValue({
            trang_thai: "active",
            nhom_nhan_vien_id: res.data[0].nhom_nhan_vien_id,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFinish = async (value: any) => {
    console.log(value);
    const body: any = {nhan_vien_id: user?.nhan_vien_id};
    for (let key in value) {
      if (value[key]) {
        body[key] = value[key];
      }
    }

    const api = userId ? userApi.updateUser({ ...body }) : userApi.postUser({...body});
    
    try {
      const res = await api;
      if (res.data) {
        dispatch(
          show({
            type: "notify",
            msg: userId ? "Cập nhật thông tin thành viên thành công" : "Thêm thành viên thành công",
            isShow: true,
            title: "",
          })
        );
        if (!userId) {
          form.resetFields();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center" id="register-form">
      <div className="form-wrapper px-16px py-16px">
        <Form
          form={form}
          name="register"
          layout="vertical"
          onFinish={handleFinish}
          scrollToFirstError
        >
          <Row gutter={16}>
            <Col lg={12} md={24} sm={24} xs={24}>
              <Form.Item
                name="ten_tai_khoan"
                label="Tên tài khoản"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input autoComplete="on" readOnly={isDetail} />
              </Form.Item>
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
              <Form.Item
                name="ten_nhan_vien"
                label="Tên thành viên"
                rules={[
                  {
                    required: true,
                    message: "Please input your full-name!",
                  },
                ]}
              >
                <Input autoComplete="on" readOnly={isDetail} />
              </Form.Item>
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
              <Form.Item name="don_vi" label="Nơi làm việc">
                <Input autoComplete="on" readOnly={isDetail} />
              </Form.Item>
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
              <Form.Item name="chuc_vu" label="Công việc">
                <Input autoComplete="on" readOnly={isDetail} />
              </Form.Item>
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
              <Form.Item name="dia_chi" label="Địa chỉ">
                <Input autoComplete="on" readOnly={isDetail} />
              </Form.Item>
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
              <Form.Item name="so_dien_thoai" label="Số điện thoại">
                <Input autoComplete="on" readOnly={isDetail} />
              </Form.Item>
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input autoComplete="on" readOnly={isDetail} />
              </Form.Item>
            </Col>

            <Col lg={12} md={24} sm={24} xs={24}>
              <div className="flex items-center flex-wrap">
                <Form.Item name="trang_thai" label="Trạng thái" className="mr-16 min-w-[150px]">
                  <Select disabled={isDetail}>
                    <Option value="active">Đang hoạt động</Option>
                    <Option value="inactive">Bị khóa</Option>
                  </Select>
                </Form.Item>
                {position.length > 0 && (
                  <Form.Item name="nhom_nhan_vien_id" label="Nhóm" className="mr-16 min-w-[150px]">
                    <Select disabled={isDetail}>
                      {position.map((item, index) => (
                        <Option key={index} value={item.nhom_nhan_vien_id}>
                          {item.ten_nhom}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                )}
              </div>
            </Col>

            <Col lg={24} md={24} sm={24} xs={24}>
              <Form.Item name="gioi_thieu" label="Giới thiệu">
                <TextArea autoComplete="on" readOnly={isDetail} />
              </Form.Item>
            </Col>

            {/* ==================Password=================== */}
            {!isDetail && <Col lg={12} md={24} sm={24} xs={24}>
              <Form.Item
                name="mat_khau"
                label="Password"
                hasFeedback
                rules={[
                  {
                    required: userId ? false : true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input.Password autoComplete="off" readOnly={isDetail} />
              </Form.Item>
            </Col>}
            {!isDetail && <Col lg={12} md={24} sm={24} xs={24}>
              <Form.Item
                name="xac_nhan_mat_khau"
                label="Confirm Password"
                dependencies={["mat_khau"]}
                hasFeedback
                rules={[
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("mat_khau") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("The two passwords that you entered do not match!"));
                    },
                  }),
                  {
                    required: userId ? false : true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input.Password autoComplete="off" readOnly={isDetail} />
              </Form.Item>
            </Col>}
            {!isDetail && <Col lg={24}>
              <div className="flex justify-end">
                <Form.Item>
                  <Button type="primary" className="mt-16px w-[100px] mr-16px bg-cancel">
                    <Link to={"/admin/user-management"}>Hủy bỏ</Link>
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="mt-16px w-[min-content]">
                    {userId ? "Cập nhật" : "Thêm thành viên"}
                  </Button>
                </Form.Item>
              </div>
            </Col>}

            {isDetail && <Col lg={24}>
              <div className="flex justify-end">
                <Form.Item>
                  <Button type="primary" className="mt-16px w-[min-content] mr-16px ">
                    <Link onClick={() => setIsDetail(false)} to={`/admin/user-management/edit/${userId}`}>Chỉnh sửa thành viên</Link>
                  </Button>
                </Form.Item>
              </div>
            </Col>}
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default UserForm;
