import { Button, Collapse, DatePicker, Input, Select, Space } from "antd";
import { userApi } from "api/userApi";
import { LIST_USER_STATUS } from "constants/constant";
import { useAppSelector } from "hooks/hook";
import { INewsCategory, INewsQueries, IResponseData } from "models";
import React, { useEffect, useRef, useState } from "react";

const { Option } = Select;
const { RangePicker } = DatePicker;
const { Panel } = Collapse;

type FilterProps = {
  onFilter: any;
  isPost?: boolean;
};

const Filter: React.FC<FilterProps> = (props) => {
  const { onFilter, isPost } = props;

  // Redux
  const listCategory = useAppSelector((state) => state.category).list;

  // State
  const [position, setPosition] = useState<any[]>([]);
  const [listPosition, setListPosition] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>(['all']);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [key, setKey] = useState("");

  // Ref
  const queries = useRef<INewsQueries>();

  useEffect(() => {
    getUserCategory();
  }, []);

  const getUserCategory = async () => {
    try {
      const res = (await userApi.getUserCategories()) as IResponseData<any[]>;
      if (res.data) {
        setListPosition(res.data);
        setPosition(["all"]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterPosition = (value: string[]) => {
    let result: string[] = [];
    if (!value.length || value[value.length - 1] === "all") {
      setPosition(["all"]);
    } else {
      result = value.filter((item) => item !== "all");
      setPosition(result);
    }
    queries.current = { ...queries.current, categories: result.join("_") };
  };

  const handleFilterCategoryPost = (val: string[]) => {
    let result: any[] = [];
    if (!val.length || val[val.length - 1] === "all") {
      setCategories(["all"]);
    } else {
      result = val.filter(item => item !== 'all')
      setCategories(result);
    }
    queries.current = { ...queries.current, categories: result.join("_") };
  };

  const handleChangeUserStatus = (val: string) => {
    queries.current = { ...queries.current, status: val !== "all" ? val : "" };
  };

  const handleDateRangeChange = (value: any) => {
    if (value && (value[0] || value[1])) {
      const start = new Date(value[0]?._d);
      const end = new Date(value[1]?._d);

      queries.current = {
        ...queries.current,
        startDate: `${start.getDate()}-${start.getMonth() + 1}-${start.getFullYear()}`,
        endDate: `${end.getDate()}-${end.getMonth() + 1}-${end.getFullYear()}`,
      };
    }
  };

  const handleKeywordChange = (e: any) => {
    setKey(e.target.value);
    queries.current = { ...queries.current, keyword: e.target.value };
  };

  const handleFilter = () => {
    console.log(queries.current);
    onFilter(queries.current);
  };

  return (
    <div className="px-16px mb-16px mt-12px">
      <Collapse accordion>
        <Panel header={<span className="max-w-[min-content]">Tìm kiếm nâng cao</span>} key={1}>
          <div className="filter flex flex-wrap">
            {listPosition.length > 0 && !isPost && (
              <div className="filter-item">
                <p className="text-tx-color font-[500] mb-8px">Chức vụ: </p>
                <Select
                  mode="multiple"
                  allowClear={!!position.length && position[0] !== "all"}
                  maxTagCount={2}
                  defaultValue={["all"]}
                  style={{ minWidth: 220 }}
                  placeholder="All"
                  onChange={handleFilterPosition}
                  value={position}
                >
                  <Option key={"all"} value="all">
                    Tất cả
                  </Option>
                  {listPosition.map((item, index) => {
                    return (
                      <Option key={index} value={item.nhom_nhan_vien_id}>
                        {item.ten_nhom}
                      </Option>
                    );
                  })}
                </Select>
              </div>
            )}

            {isPost && categories.length > 0 && (
              <div className="filter-item">
                <p className="text-tx-color font-[500] mb-8px">Nhóm bài viết: </p>
                <Select
                  mode="multiple"
                  allowClear={!!categories.length && categories[0] !== "all"}
                  maxTagCount={2}
                  defaultValue={["all"]}
                  style={{ minWidth: 220 }}
                  placeholder="All"
                  onChange={handleFilterCategoryPost}
                  value={categories}
                >
                  <Option key={"all"} value="all">
                    Tất cả
                  </Option>
                  {listCategory.map((item, index) => {
                    return (
                      <Option key={index} value={item.nhom_tin_tuc_id}>
                        {item.ten_nhom}
                      </Option>
                    );
                  })}
                </Select>
              </div>
            )}

            <div className="filter-item">
              <p className="text-tx-color font-[500] mb-8px">Trạng thái: </p>
              <Select defaultValue={"all"} style={{ minWidth: 220 }} onChange={handleChangeUserStatus}>
                <Option key={"all"} value={"all"}>
                  <span>Tất cả trạng thái</span>
                </Option>
                {LIST_USER_STATUS.map((item, index) => {
                  const title = item === "active" ? "Đang hoạt động" : "Bị khóa";
                  return (
                    <Option key={index} value={item}>
                      <span className={`${item === "active" ? "text-[green]" : "text-[#df3434]"}`}>{title}</span>
                    </Option>
                  );
                })}
              </Select>
            </div>
            <div className="filter-item">
              <p className="text-tx-color font-[500] mb-8px">Ngày tạo: </p>
              <Space direction="vertical" size={12}>
                <RangePicker onCalendarChange={handleDateRangeChange} />
              </Space>
            </div>
            <div className="filter-item">
              <p className="text-tx-color font-[500] mb-8px">Tìm theo từ khóa: </p>
              <Input allowClear placeholder="Nhập từ khóa" onChange={(e) => handleKeywordChange(e)} />
            </div>
          </div>
          <Button className="mt-16px" onClick={handleFilter} type="primary">
            Tìm kiếm
          </Button>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Filter;
