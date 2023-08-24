import React, { useEffect, useState } from "react";
import { Image, List, Card } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setData, setOriginalData, setSelectedId } from "./slice";

function ListItem() {
  const dispatch = useDispatch();

  useEffect(() => {
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
  }, []);

  const data = useSelector((state) => state.productSlice.data);

  return (
    <List
      grid={{ gutter: 16, column: 3 }}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item
          onClick={() => {
            dispatch(setSelectedId(item.id));
          }}
        >
          <Card
            style={{
              padding: "10px",
              background: "#f0f0f0",
            }}
          >
            {
              <Image
                width={200}
                height={150}
                preview={false}
                src={item.avatar}
              />
            }
          </Card>
          <Card> {item.title}</Card>
          <Card> {item.description}</Card>
        </List.Item>
      )}
    />
  );
}

export default ListItem;
