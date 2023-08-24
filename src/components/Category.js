import {
  CarTwoTone,
  HomeTwoTone,
  SkinTwoTone,
  PlusCircleTwoTone,
  EditTwoTone,
  DeleteTwoTone,
} from "@ant-design/icons";
import { Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setOpenModal, setData, setButtonType, setOriginalData } from "./slice";

function Category() {
  const dispatch = useDispatch();
  const originalData = useSelector((state) => state.productSlice.originalData);
  const selectedId = useSelector((state) => state.productSlice.selectedId);
  const data = useSelector((state) => state.productSlice.data);
  const handleClick = (type) => {
    switch (type) {
      case "car":
        let filteredData1 = originalData.filter((e) => e.category === "car");
        dispatch(setData(filteredData1));
        break;
      case "home":
        let filteredData2 = originalData.filter((e) => e.category === "home");
        dispatch(setData(filteredData2));
        break;
      case "clothes":
        let filteredData3 = originalData.filter(
          (e) => e.category === "clothes"
        );
        dispatch(setData(filteredData3));
        break;
    }
  };

  const handleRemove = () => {
    window.location.reload();
    fetch(`http://localhost:3000/lists/${selectedId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((lists) => {});
  };
  const getData = () => {
    fetch("http://localhost:3000/lists", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        let lists = response;
        dispatch(setData(lists));
        dispatch(setOriginalData(lists));
      });
  };

  const { Title } = Typography;
  return (
    <div>
      <Title
        onClick={getData}
        style={{
          fontSize: "40px",
          padding: "1px",
          marginTop: "-10px",
          marginLeft: "80px",
          color: "#1677ff",
          fontFamily: "Helvetica Neue",
        }}
        level={2}
      >
        DOLPHIN
      </Title>
      <CarTwoTone
        onClick={() => {
          handleClick("car");
        }}
        style={{
          fontSize: "40px",
          padding: "10px",
          marginTop: "1px",
          marginLeft: "500px",
        }}
      />
      <HomeTwoTone
        onClick={() => {
          handleClick("home");
        }}
        style={{ fontSize: "40px", padding: "20px" }}
      />
      <SkinTwoTone
        onClick={() => {
          handleClick("clothes");
        }}
        style={{ fontSize: "40px", padding: "20px" }}
      />
      <PlusCircleTwoTone
        onClick={() => {
          dispatch(setOpenModal(true));
          dispatch(setButtonType("add"));
        }}
        style={{ fontSize: "20px", padding: "10px" }}
      />
      <EditTwoTone
        onClick={() => {
          dispatch(setOpenModal(true));
          dispatch(setButtonType("edit"));
        }}
        style={{ fontSize: "20px", padding: "10px" }}
      />
      <DeleteTwoTone
        onClick={handleRemove}
        style={{ fontSize: "20px", padding: "10px" }}
      />
    </div>
  );
}

export default Category;
