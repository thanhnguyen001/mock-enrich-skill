import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";

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

  const onFinish = (value: any) => {
    console.log(value);
  };

  return (
    <div className="w-[700px]">
      <div className="form-wrapper px-16px py-16px">
        <Form form={form} {...formItemLayout} name="login" onFinish={onFinish} scrollToFirstError>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="Password" />
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
              Or <Link to="/register">register now!</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
