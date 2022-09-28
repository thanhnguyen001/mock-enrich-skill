import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Loading from "components/Loading/Loading";
import { useAppDispatch } from "hooks/hook";
import { login } from "reducers/loginReducer";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};

const LoginForm = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (value: any) => {
    console.log(value);
    setIsLoading(true);
    // setTimeout(() => {
    //   dispatch(login());
    //   navigate('/home')
    // }, 3000);
  };

  return (
    <div className="w-[700px]">
      <div className="form-wrapper px-16px py-16px">
        {isLoading && <Loading />}
        {!isLoading && (
          <Form form={form} {...formItemLayout} name="login" onFinish={onFinish} scrollToFirstError>
            <Form.Item
              name="ten_tai_khoan"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input placeholder="Username" autoComplete="on" />
            </Form.Item>

            <Form.Item
              name="mat_khau"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password placeholder="Password" autoComplete="on" />
            </Form.Item>

            <Form.Item>
              <div className="flex justify-between">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="/">
                  Forgot password?
                </a>
              </div>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button w-full">
                Log in
              </Button>
              <div className="mt-8px w-full">
                Or <Link to="/log/register" replace={true}>register now!</Link>
              </div>
            </Form.Item>
          </Form>
        )}
      </div>
    </div>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
