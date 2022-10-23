import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cancelReqUser, userApi } from "api/userApi";
import { useAppDispatch, useAppSelector } from "hooks/hook";
import { IReqRegUser } from "models";
import { login } from "reducers/loginReducer";
import Loading from "components/Loading/Loading";
import { setUserInfo } from "reducers/userReducer";
import { routePath } from "routes/routePath";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 22,
      offset: 0,
    },
  },
};

const Register = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { isShow } = useAppSelector((state) => state.dialog);

  useEffect(() => {
    return () => {
      cancelReqUser.abort();
    };
  }, []);

  useEffect(() => {
    if (!isShow) {
      setIsLoading(false);
    }
  }, [isShow]);

  const onFinish = (formBody: IReqRegUser) => {
    setIsLoading(true);
    userApi.postUser({ ...formBody }).then((res) => {
      if (res.data) {
        dispatch(setUserInfo(res.data));
        dispatch(login(res.data.token));
        navigate(routePath.home.path);
      }
    });
  };

  return (
    <div className="w-[700px] flex items-center" id="register-form">
      <div className="form-wrapper px-16px py-16px">
        <Form form={form} {...formItemLayout} name="register" onFinish={onFinish} scrollToFirstError>
          <Form.Item
            name="ten_tai_khoan"
            label="Username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input autoComplete="on" />
          </Form.Item>

          <Form.Item
            name="ten_nhan_vien"
            label="Full Name"
            rules={[
              {
                required: true,
                message: "Please input your full-name!",
              },
            ]}
          >
            <Input autoComplete="on" />
          </Form.Item>

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
            <Input autoComplete="on" />
          </Form.Item>

          <Form.Item
            name="mat_khau"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password autoComplete="off" />
          </Form.Item>

          <Form.Item
            name="xac_nhan_mat_khau"
            label="Confirm Password"
            dependencies={["mat_khau"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("mat_khau") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("The two passwords that you entered do not match!"));
                },
              }),
            ]}
          >
            <Input.Password autoComplete="off" />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" className="mt-16px w-1/2">
              Register
            </Button>
            <div className="mt-8px w-full flex items-center">
              <span>
                Or <Link to="/log/login">Login!</Link>
              </span>
              <div className="flex-1 flex justify-center">{isLoading && <Loading />}</div>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
