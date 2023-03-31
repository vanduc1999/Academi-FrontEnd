import { Table } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Actions, ButtonAction, Country, Image, Population } from "./styles";

const getColor = (population) => {
  if (population < 20000) {
    return "darkgreen";
  }

  if (population < 40000) {
    return "darkblue";
  }

  return "darkred";
};
const TableCities = (props) => {
  const columns = [
    {
      title: "Thành Phố",
      dataIndex: "name",
      key: "name",
      width: "15%",
    },

    {
      title: "Quốc Gia",
      dataIndex: "country",
      key: "country",
      width: "30%",
      render: (_, item) => {
        return (
          <Country>
            <Image src={item.countryflag} />
            <div>
              <h6>{item.country}</h6>
              <div>{item.countryCode}</div>
            </div>
          </Country>
        );
      },
    },
    {
      title: "Dân Số",
      dataIndex: "population",
      key: "population",
      width: "15%",
      render: (_, item) => {
        const color = getColor(item.population);
        return (
          <Population color={color}>
            {item.population} <UserOutlined />
          </Population>
        );
      },
    },
    {
      title: "",
      dataIndex: "actions",
      width: "20%",
      render: (text, item) => {
        return (
          <Actions>
            <ButtonAction
              onClick={() => {
                props.onGetWeather(item.name);
              }}
            >
              Weather
            </ButtonAction>
            <ButtonAction
              loading={props.itemloading}
              onClick={() => {
                props.onEdit(item.id);
              }}
            >
              Edit
            </ButtonAction>
            <ButtonAction
              disabled={props.itemloading}
              onClick={() => {
                props.onDelete(item.id);
              }}
            >
              Delete
            </ButtonAction>
          </Actions>
        );
      },
    },
  ];

  return (
    <Table
      loading={props.loading}
      dataSource={props.dataSource}
      columns={columns}
    />
  );
};

export default TableCities;
