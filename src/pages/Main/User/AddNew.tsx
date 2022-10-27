import { Button, Form, Input, Row, Select, Switch } from "antd";
import Col from "antd/es/grid/col";
import TextArea from "antd/lib/input/TextArea";
import { postApi } from "api/postApi";
import { useAppDispatch, useAppSelector } from "hooks/hook";
import { INews, IResponseData } from "models";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { show } from "reducers/dialogReducer";

const { Option } = Select;

type AddNewProps = {
  onCancelCreate: Function
}

const AddNew: React.FC<AddNewProps> = ({onCancelCreate}) => {
  const [form] = Form.useForm();

  //Router
  const { postId } = useParams();

  // Redux
  const dispatch = useAppDispatch();
  const listCategory = useAppSelector((state) => state.category).list;

  //State
  const [content, setContent] = useState("Nhấn để nhập nội dung");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [post, setPost] = useState<INews>();

  // useEffect
  useEffect(() => {
    if (postId) {
      getPostById(`${postId}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  const getPostById = async (id: string) => {
    try {
      const res = (await postApi.getPost(id)) as IResponseData<INews>;
      if (res.data) {
        setPost(res.data);
        form.setFieldsValue({ ...res.data });
        setContent(res.data?.noi_dung ? res.data.noi_dung : "");
        const contentElement = document.querySelector("#edit-box");
        if (contentElement) {
          contentElement.innerHTML = res.data?.noi_dung ? res.data.noi_dung : "";
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditChange = (e: React.FormEvent<HTMLElement>) => {
    const value = e.currentTarget.innerHTML;
    if (value) {
      setContent(value);
    }
  };

  const handleFinish = (value: any) => {
    const body = { ...value, noi_dung: content, tin_moi: value.tin_moi ? 1 : 0, tin_noi_bat: value.tin_noi_bat ? 1 : 0 };

    postApi.createPost(body).then((res) => {
      dispatch(
        show({
          type: "notify",
          msg: postId ? "Cập nhật thông tin bài viết thành công" : "Thêm bài viết thành công",
          isShow: true,
          title: "",
        })
      );
      form.resetFields();
    });
  };

  return (
    <div className="px-16px">
      <Form form={form} name="register" layout="vertical" onFinish={handleFinish} scrollToFirstError>
        <Row gutter={16}>
          <Col lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              name="tieu_de"
              label="Tiêu đề"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input autoComplete="on" />
            </Form.Item>
          </Col>
          <Col lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              name="mo_ta"
              label="Mô tả"
              rules={[
                {
                  required: true,
                  message: "Please input your full-name!",
                },
              ]}
            >
              <Input autoComplete="on" />
            </Form.Item>
          </Col>
          <Col>
            {listCategory.length > 0 && (
              <Form.Item name="nhom_tin_tuc_id" label="Nhóm tin tức" className="mr-16 min-w-[150px]">
                <Select placeholder="Chọn nhóm tin tức">
                  {listCategory.map((item, index) => (
                    <Option key={index} value={item.nhom_tin_tuc_id}>
                      {item.ten_nhom}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            )}
          </Col>
          <Col className="flex items-center max-w-[200px]">
            <div className="flex items-center max-w-[200px] gap-[24px]">
              <Form.Item name="tin_noi_bat" label="Tin nổi bật" valuePropName="checked">
                <Switch />
              </Form.Item>
              <Form.Item name="tin_moi" label="Tin mới" valuePropName="checked">
                <Switch />
              </Form.Item>
            </div>
          </Col>
    
          <Col lg={24} md={24} sm={24} xs={24}>
            <Form.Item name="noi_dung" label="Nội dung">
              <div
                id="edit-box"
                onKeyUpCapture={(e) => handleEditChange(e)}
                className="edit-post-content px-8px py-8px min-h-[100px] border rounded"
                contentEditable
                suppressContentEditableWarning={true}
              >
                {/* {content} */}
              </div>
            </Form.Item>
          </Col>

          <Col lg={24}>
            <div className="flex justify-end">
              <Form.Item>
                <Button type="primary" className="mt-16px w-[100px] mr-16px bg-cancel">
                  <span onClick={() => onCancelCreate()}>Hủy bỏ</span>
                </Button>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="mt-16px w-[min-content]">
                  {postId ? "Cập nhật" : "Thêm bài viết"}
                </Button>
              </Form.Item>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AddNew;
