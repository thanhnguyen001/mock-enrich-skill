import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Loading from "components/Loading/Loading";
import { useAppDispatch } from "hooks/hook";
import { login } from "reducers/loginReducer";
import { cancelReqUser, userApi } from "api/userApi";
import { ILoginUser, IResponseError, IResRegUser } from "models";
import { setUserInfo } from "reducers/userReducer";
import { AxiosError } from "axios";
import { routePath } from "routes/routePath";

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
  const [errMsg, setErrMsg] = useState('');

  // component unmount
  useEffect(() => {
    return () => {
      cancelReqUser.abort();
    };
  }, []);

  const onFinish = async (value: ILoginUser) => {
    setIsLoading(true);
    try {
      const res = await userApi.loginUser(value) as unknown as IResRegUser;
      dispatch(login(res.token));
      dispatch(setUserInfo(res.data));
      navigate(routePath.home.path);
    } catch (error: unknown) {
      if (error instanceof AxiosError<IResponseError>) {
        console.log(error);
        setErrMsg(error.response?.data.error);
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="w-[700px]">
      <div className="form-wrapper px-16px py-16px">
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
            {!isLoading && (
              <Button type="primary" htmlType="submit" className="login-form-button w-full">
                Log in
              </Button>
            )}
            {isLoading && <Loading />}
            <div className="text-[red]">{errMsg}</div>
            <div className="mt-8px w-full">
              Or{" "}
              <Link to="/log/register" replace={true}>
                register now!
              </Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
