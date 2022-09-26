import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cancelReqUser } from "api/userApi";
import { useAppDispatch } from "hooks/hook";
import { IReqRegUser } from "models";
import { login } from "reducers/loginReducer";
import Loading from "components/Loading/Loading";

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
      span: 16,
      offset: 0,
    },
  },
};

const Register = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      cancelReqUser.abort();
    };
  }, []);

  const onFinish = (formBody: IReqRegUser) => {
    console.log(formBody);
    setIsLoading(true);
    setTimeout(() => {
      dispatch(login());
    }, 3000)

    // userApi.postUser({ ...formBody }).then();
  };

  return (
    <div className="w-[700px] flex items-center" id="register-form">
      {isLoading && <Loading />}
      {!isLoading && (
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
              <Input />
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
              <Input />
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
              <Input />
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
              <Input.Password />
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
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" className="mt-16px w-1/2">
                Register
              </Button>
              <div className="mt-8px w-full">
                Or <Link to="/login">Login!</Link>
              </div>
            </Form.Item>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Register;
